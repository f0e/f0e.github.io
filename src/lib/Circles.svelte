<script>
	import { onMount } from 'svelte';
	import { theme } from '../stores';

	let canvas;
	let innerWidth = 0;
	let innerHeight = 0;

	const lerp = (a, b, t) => (1 - t) * a + t * b;

	let lastQuadrant = -1;

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

			ctx.strokeStyle = $theme == 'dark' ? '#fff' : '#000';
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

	let circles = [new Circle()];

	onMount(() => {
		const ctx = canvas.getContext('2d');
		let frame = requestAnimationFrame(render);

		let lastTime;
		function render(time) {
			const delta = lastTime ? (time - lastTime) / 1000 : 1 / 60;
			lastTime = time;
			frame = requestAnimationFrame(render);

			// update canvas size (resize event is inconsistent)
			canvas.width = innerWidth;
			canvas.height = innerHeight;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (const circle of circles) {
				circle.animate(delta);
				circle.draw(ctx);

				if (circle.dead()) {
					circle.reset();
				}
			}
		}

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<canvas class="circles" bind:this={canvas} />

<style lang="scss">
	.circles {
		position: fixed;

		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		z-index: -1;
	}
</style>
