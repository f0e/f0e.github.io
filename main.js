const themeSwitcher = document.querySelector('#theme-switcher');
const colorScheme = document.querySelector('meta[name="color-scheme"]');
const main = document.querySelector('main');
const canvas = document.querySelector('#c');

// theme switching
const getTheme = () => document.documentElement.className;

themeSwitcher.addEventListener('mousedown', (e) => e.preventDefault()); // prevent highlighting
themeSwitcher.addEventListener('click', (e) => {
  const newTheme = getTheme() == 'light' ? 'dark' : 'light';

  document.documentElement.className = newTheme;
  colorScheme.content = newTheme;
  localStorage.setItem('theme', newTheme);
});

// link animations
for (const elem of document.querySelectorAll('a')) {
  elem.addEventListener('click', (e) => {
    e.preventDefault();

    const url = e.target.href;
    main.classList.add('slide-out');
    setTimeout(() => (location.href = url), 200);
  });
}

// circles
const lerp = (a, b, t) => (1 - t) * a + t * b;

let lastQuadrant = -1;

const circleMax = 1;
const circleRadius = canvas.height;
const circleSpeed = 1;
const circleMaxAlpha = 1;

class Circle {
  constructor() {
    this.reset();
  }

  reset() {
    let quadrant = -1;
    do {
      this.x = Math.random();
      this.y = Math.random();
      this.radius = 0;

      if (this.x <= 0.5 && this.y <= 0.5) quadrant = 0;
      if (this.x > 0.5 && this.y <= 0.5) quadrant = 1;
      if (this.x <= 0.5 && this.y > 0.5) quadrant = 2;
      if (this.x > 0.5 && this.y > 0.5) quadrant = 3;
    } while (quadrant == lastQuadrant);

    lastQuadrant = quadrant;
  }

  animate(delta) {
    this.radius = lerp(this.radius, 1, circleSpeed * delta);
  }

  draw(ctx) {
    const alpha = (1 - this.radius) * circleMaxAlpha;

    ctx.strokeStyle = getTheme() == 'dark' ? '#fff' : '#000';
    ctx.globalAlpha = alpha;

    ctx.beginPath();
    ctx.arc(
      this.x * canvas.width,
      this.y * canvas.height,
      this.radius * canvas.height,
      0,
      2 * Math.PI
    );
    ctx.stroke();
  }

  dead() {
    return this.radius > 0.99;
  }
}

let circles = [];

const addCircle = () => circles.push(new Circle());

let lastTime;
function render(time) {
  const delta = lastTime ? (time - lastTime) / 1000 : 1 / 60;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = circles.length - 1; i >= 0; i--) {
    const circle = circles[i];
    circle.animate(delta);
    circle.draw(ctx);
    if (circle.dead()) {
      circles.splice(i, 1);
      addCircle();
    }
  }

  localStorage.setItem('circles', JSON.stringify(circles));

  lastTime = time;
  requestAnimationFrame(render);
}

const loadCircles = () => {
  const loadedCirclesJSON = localStorage.getItem('circles');
  if (!loadedCirclesJSON) return false;

  try {
    const loadedCircles = JSON.parse(loadedCirclesJSON);

    for (const circleData of loadedCircles) {
      const circle = Object.assign(new Circle(), circleData);
      circles.push(circle);
    }

    return true;
  } catch (e) {
    return false;
  }
};

const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

resize();
window.addEventListener('resize', resize);

if (
  document.referrer != location.href &&
  document.referrer.indexOf(location.host) != -1
) {
  // came from another page on the site
  loadCircles() || addCircle();

  main.classList.add('slide-in');
  setTimeout(() => main.classList.remove('slide-in'), 0);
} else {
  addCircle();
}

render();
