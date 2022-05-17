import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const theme = writable((browser && localStorage.getItem('theme')) ?? 'light');

theme.subscribe((value) => {
	if (browser) {
		localStorage.setItem('theme', value);
		document.documentElement.className = value;
	}
});
