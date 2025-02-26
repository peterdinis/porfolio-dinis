<script lang="ts">
	import { fly } from 'svelte/transition';
	let visibleSections: Record<string, boolean> = { about: false, projects: true, contact: false };
	let hoveredProject: number | null = null;
	const projects = [
		{
			title: 'E-commerce Platform',
			description: 'A full-stack e-commerce solution with payment integration',
			tags: ['SvelteKit', 'Tailwind', 'Stripe', 'MongoDB'],
			image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format&fit=crop'
		},
		{
			title: 'Portfolio Website',
			description: 'Interactive portfolio with animations and 3D elements',
			tags: ['SvelteKit', 'Three.js', 'GSAP', 'Tailwind'],
			image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&auto=format&fit=crop'
		},
		{
			title: 'Task Management App',
			description: 'Collaborative task management with real-time updates',
			tags: ['SvelteKit', 'Firebase', 'Tailwind', 'PWA'],
			image:
				'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop'
		}
	];
</script>

<section id="projects" class="bg-gray-50 py-20 dark:bg-gray-900">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="lg:text-center">
			<h2 class="text-primary text-base font-semibold tracking-wide uppercase">Projects</h2>
			<p
				class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
			>
				My Recent Work
			</p>
			<p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto dark:text-gray-300">
				Check out some of my latest projects and creations.
			</p>
		</div>

		<div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#if visibleSections.projects}
				{#each projects as project, i}
					<div
						class="transform overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
						in:fly={{ y: 50, duration: 600, delay: i * 200 }}
						on:mouseenter={() => (hoveredProject = i)}
						on:mouseleave={() => (hoveredProject = null)}
					>
						<div class="relative h-48 overflow-hidden">
							<img
								src={project.image || '/placeholder.svg'}
								alt={project.title}
								class="h-full w-full object-cover transition-transform duration-500"
								class:scale-110={hoveredProject === i}
							/>
							<div
								class="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent"
							>
								<h3 class="p-4 text-xl font-bold text-white">{project.title}</h3>
							</div>
						</div>
						<div class="p-6">
							<p class="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
							<div class="flex flex-wrap gap-2">
								{#each project.tags as tag}
									<span
										class="rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
									>
										{tag}
									</span>
								{/each}
							</div>
							<div class="mt-6">
								<button class="text-primary flex items-center font-medium hover:underline">
									View Project
									<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</section>
