<script lang="ts">
	export let showOnPx: number = 150;
	let hidden: boolean = true;

	function goTop(): void {
		document.body.scrollIntoView({ behavior: 'smooth' });
	}

	function scrollContainer(): HTMLElement | null {
		return document.documentElement || document.body;
	}

	function handleOnScroll(): void {
		const container = scrollContainer();
		if (!container) return;

		hidden = container.scrollTop <= showOnPx;
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<div
	class="fixed right-5 bottom-5 z-50 cursor-pointer rounded-full bg-black p-3 text-white transition-opacity duration-500 hover:bg-gray-700"
	class:hidden
	on:click={goTop}
>
	Back to top
</div>
