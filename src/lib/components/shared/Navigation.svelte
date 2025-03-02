<script lang="ts">
	import { scale, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	const navItems = ['Home', 'About', 'Projects', 'Contact'];

	let activeSection = 'Home';
	let isMenuOpen = false;

	function handleNavClick(item: string) {
		activeSection = item;
		isMenuOpen = false;
		const element = document.getElementById(item.toLowerCase());
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="fixed z-50 w-full bg-white/80 shadow-sm backdrop-blur-md dark:bg-gray-900/80">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex items-center">
				<span class="text-white text-xl font-bold">Peter Dinis</span>
			</div>

			<div class="hidden items-center space-x-8 md:flex">
				{#each navItems as item}
					<button
						class="relative px-3 py-2 text-sm font-medium transition-colors duration-200"
						class:text-primary={activeSection === item}
						class:text-gray-600={activeSection !== item}
						class:dark:text-white={activeSection === item}
						class:dark:text-gray-300={activeSection !== item}
						on:click={() => handleNavClick(item)}
					>
						{item}
						{#if activeSection === item}
							<span
								class="bg-white absolute bottom-0 left-0 h-0.5 w-full"
								transition:scale={{ duration: 300, easing: cubicOut }}
							></span>
						{/if}
					</button>
				{/each}
			</div>

			<div class="flex items-center md:hidden">
				<button
					on:click={toggleMenu}
					class="hover:text-white inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						{#if isMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>

	{#if isMenuOpen}
		<div class="md:hidden" transition:slide={{ duration: 300 }}>
			<div class="space-y-1 bg-white px-2 pt-2 pb-3 shadow-lg dark:bg-gray-900">
				{#each navItems as item}
					<button
						class="block w-full rounded-md px-3 py-2 text-left text-base font-medium transition-colors duration-200"
						class:bg-primary={activeSection === item}
						class:text-white={activeSection === item}
						class:text-gray-600={activeSection !== item}
						class:dark:text-gray-300={activeSection !== item}
						on:click={() => handleNavClick(item)}
					>
						{item}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</nav>
