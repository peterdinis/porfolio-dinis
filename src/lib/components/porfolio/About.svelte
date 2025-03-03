<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import logo from '$lib/assets/me.jpeg';
	let visibleSections: Record<string, boolean> = { about: true, projects: false, contact: false };

	const skills = [
		{ name: 'JavaScript', level: 90 },
		{ name: 'Svelte', level: 85 },
		{ name: 'CSS/Tailwind', level: 80 },
		{ name: 'Node.js', level: 75 },
		{ name: 'UI/UX Design', level: 70 }
	];
</script>

<section id="about" class="bg-white py-20 dark:bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="lg:text-center">
			<p
				class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
			>
				A few sentences about me
			</p>
		</div>

		<div class="mt-16 items-center lg:grid lg:grid-cols-2 lg:gap-8">
			<div class="relative">
				{#if visibleSections.about}
					<div in:fly={{ x: -50, duration: 800 }}>
						<img class="h-96 w-full rounded-lg object-cover shadow-lg" src={logo} alt="Profile" />
						<div
							class="absolute -bottom-6 rounded-lg bg-amber-600 p-4 shadow-lg"
							in:scale={{ delay: 300, duration: 500 }}
						>
							<p class="font-bold text-white">3+ Years Experience</p>
						</div>
					</div>
				{/if}
			</div>

			<div class="mt-10 lg:mt-0">
				{#if visibleSections.about}
					<div class="prose prose-lg dark:prose-invert" in:fly={{ x: 50, duration: 800 }}>
						<p>
							Hi 👋. My name is Peter Dinis. I am 23 years old. I come from Bardejov. I attended the
							Secondary Industrial School (SPŠT) in Bardejov. My favorite sports are football and
							volleyball. Now working in Prague.
						</p>
						<p>
							I have the most experience with technologies: React, JavaScript, NestJS, TypeScript,
							and Node.js.
						</p>

						<h3 class="mt-8 text-xl font-bold">My Skills</h3>
						<div class="mt-4 space-y-4">
							{#each skills as skill, i}
								<div class="space-y-2" in:fly={{ y: 20, duration: 400, delay: i * 100 }}>
									<div class="flex justify-between">
										<span>{skill.name}</span>
										<span>{skill.level}%</span>
									</div>
									<div class="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
										<div
											class="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
											style="width: {skill.level}%"
										></div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
