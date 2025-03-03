<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { spring } from 'svelte/motion';

	interface Bubble {
		x: number;
		y: number;
		size: number;
		vx: number;
		vy: number;
		color: string;
		animationDuration: number;
	}

	let mounted: boolean = false;
	let visibleSections: Record<string, boolean> = { about: false, projects: false, contact: false };

	let mouseX: number = 0;
	let mouseY: number = 0;
	let windowWidth: number = 0;
	let windowHeight: number = 0;
	let bubbles: Bubble[] = [];
	let activeBubble: number | null = null;

	const coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);

	function handleMouseMove(event: MouseEvent): void {
		mouseX = event.clientX;
		mouseY = event.clientY;

		coords.set({ x: mouseX, y: mouseY });

		if (windowWidth > 768) {
			bubbles = bubbles.map((bubble) => {
				const dx = mouseX - bubble.x;
				const dy = mouseY - bubble.y;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < 200) {
					const angle = Math.atan2(dy, dx);
					const pushX = Math.cos(angle) * (200 - distance) * 0.05;
					const pushY = Math.sin(angle) * (200 - distance) * 0.05;

					return {
						...bubble,
						vx: bubble.vx - pushX,
						vy: bubble.vy - pushY
					};
				}
				return bubble;
			});

			bubbles = [...bubbles];
		}
	}
	function generateBubbles(): void {
		bubbles = Array.from(
			{ length: 20 },
			(): Bubble => ({
				x: Math.random() * windowWidth,
				y: Math.random() * windowHeight,
				size: Math.random() * 100 + 50,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5,
				color: `rgba(59, 130, 246, ${Math.random() * 0.15 + 0.05})`,
				animationDuration: Math.random() * 10 + 5
			})
		);

		bubbles = [...bubbles];
	}
	function animateBubbles(): void {
		if (!mounted) return;

		bubbles = bubbles.map((bubble) => {
			let x = bubble.x + bubble.vx;
			let y = bubble.y + bubble.vy;

			if (x < 0 || x > windowWidth) bubble.vx *= -1;
			if (y < 0 || y > windowHeight) bubble.vy *= -1;

			x = Math.max(0, Math.min(windowWidth, x));
			y = Math.max(0, Math.min(windowHeight, y));

			return { ...bubble, x, y };
		});

		bubbles = [...bubbles];
		requestAnimationFrame(animateBubbles);
	}

	// Kliknutie na bublinu
	function handleBubbleClick(index: number): void {
		activeBubble = index;

		bubbles = bubbles.map((bubble, i) => {
			if (i === index) {
				return {
					...bubble,
					size: bubble.size * 1.5,
					color: `rgba(59, 130, 246, 0.3)`
				};
			}
			return bubble;
		});

		bubbles = [...bubbles];

		setTimeout(() => {
			bubbles = bubbles.map((bubble, i) => {
				if (i === index) {
					return {
						...bubble,
						size: bubble.size / 1.5,
						color: `rgba(59, 130, 246, ${Math.random() * 0.15 + 0.05})`
					};
				}
				return bubble;
			});
			bubbles = [...bubbles];
			activeBubble = null;
		}, 500);
	}

	let activeSection = '';

	onMount(() => {
		mounted = true;

		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id: string = entry.target.id;
						activeSection = id.charAt(0).toUpperCase() + id.slice(1);
						visibleSections[id] = true;
					}
				});
			},
			{ threshold: 0.3 }
		);

		document.querySelectorAll('section').forEach((section) => observer.observe(section));

		handleResize();
		generateBubbles();
		animateBubbles();

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('resize', handleResize);

		onDestroy(() => {
			observer.disconnect();
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('resize', handleResize);
		});
	});

	function handleNavClick(item: string): void {
		activeSection = item;
		const element: HTMLElement | null = document.getElementById(item.toLowerCase());
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
	function handleResize(): void {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		generateBubbles();
	}
</script>

<svelte:window
	on:mousemove={handleMouseMove}
	on:resize={handleResize}
	bind:innerWidth={windowWidth}
	bind:innerHeight={windowHeight}
/>

<section
	id="home"
	class="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
>
	<div class="absolute inset-0 z-0">
		<div
			class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
		></div>
		{#if mounted}
			{#each bubbles as bubble, i}
				<div
					class="absolute cursor-pointer rounded-full transition-all duration-300"
					style="
              width: {bubble.size}px; 
              height: {bubble.size}px; 
              left: {bubble.x}px; 
              top: {bubble.y}px; 
              background-color: {bubble.color};
              transform: scale({activeBubble === i ? 1.2 : 1});
            "
					on:click={() => handleBubbleClick(i)}
					on:mouseenter={() => {
						if (windowWidth > 768) {
							bubbles[i].color = `rgba(59, 130, 246, 0.25)`;
						}
					}}
					on:mouseleave={() => {
						if (windowWidth > 768) {
							bubbles[i].color = `rgba(59, 130, 246, ${Math.random() * 0.15 + 0.05})`;
						}
					}}
				></div>
			{/each}
		{/if}

		{#if windowWidth > 768}
			<div
				class="bg-primary/10 pointer-events-none absolute z-0 h-40 w-40 rounded-full"
				style="
            left: {$coords.x}px;
            top: {$coords.y}px;
            transform: translate(-50%, -50%);
          "
			></div>
		{/if}
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			{#if mounted}
				<h1
					class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white"
					in:fly={{ y: 50, duration: 800, delay: 200 }}
				>
					<span class="block">Hi, Peter <span class="text-primary">Dinis</span></span>
					<span class="mt-3 block">Creative FullStack Developer</span>
				</h1>

				<div
					class="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8"
					in:fly={{ y: 50, duration: 800, delay: 600 }}
				>
					<div class="rounded-md shadow">
						<button
							class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-700 px-8 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-green-800 md:px-10 md:py-4 md:text-lg"
							on:click={() => handleNavClick('Projects')}
						>
							View My Work
						</button>
					</div>
					<div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
						<button
							class="text-primary flex w-full items-center justify-center rounded-md border border-transparent bg-orange-700 px-8 py-3 text-base font-medium transition-all duration-200 hover:bg-orange-800 md:px-10 md:py-4 md:text-lg dark:text-white"
							on:click={() => handleNavClick('Contact')}
						>
							Contact Me
						</button>
					</div>
				</div>
			{/if}
		</div>
	</div>

	<div class="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce">
		<svg
			class="h-6 w-6 text-gray-500 dark:text-gray-400"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			></path>
		</svg>
	</div>
</section>
