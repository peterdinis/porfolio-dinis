<script lang="ts">
	import { fly } from 'svelte/transition';
	let visibleSections: Record<string, boolean> = { about: false, projects: true, contact: true };
</script>

<section id="contact" class="bg-white py-20 dark:bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="lg:text-center">
			<h2 class="text-primary text-base font-semibold tracking-wide uppercase">Contact</h2>
			<p
				class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
			>
				Get In Touch
			</p>
			<p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto dark:text-gray-300">
				Have a project in mind? Let's work together!
			</p>
		</div>

		<div class="mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
			{#if visibleSections.contact}
				<div class="relative" in:fly={{ x: -50, duration: 800 }}>
					<div class="prose prose-lg dark:prose-invert">
						<h3 class="text-xl font-bold">Contact Information</h3>
						<p>Feel free to reach out if you have any questions or want to work together.</p>

						<div class="mt-6 space-y-4">
							<div class="flex items-center">
								<svg
									class="text-primary mr-3 h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									></path>
								</svg>
								<span>hello@example.com</span>
							</div>
							<div class="flex items-center">
								<svg
									class="text-primary mr-3 h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									></path>
								</svg>
								<span>+1 (555) 123-4567</span>
							</div>
							<div class="flex items-center">
								<svg
									class="text-primary mr-3 h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									></path>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									></path>
								</svg>
								<span>San Francisco, CA</span>
							</div>
						</div>

						<div class="mt-8 flex space-x-4">
							<a
								href="#"
								class="hover:text-primary dark:hover:text-primary text-gray-500 transition-colors dark:text-gray-400"
							>
								<span class="sr-only">Twitter</span>
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
									></path>
								</svg>
							</a>
							<a
								href="#"
								class="hover:text-primary dark:hover:text-primary text-gray-500 transition-colors dark:text-gray-400"
							>
								<span class="sr-only">GitHub</span>
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path
										fill-rule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clip-rule="evenodd"
									></path>
								</svg>
							</a>
							<a
								href="#"
								class="hover:text-primary dark:hover:text-primary text-gray-500 transition-colors dark:text-gray-400"
							>
								<span class="sr-only">LinkedIn</span>
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
									></path>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<div class="mt-12 lg:mt-0" in:fly={{ x: 50, duration: 800 }}>
					<form class="grid grid-cols-1 gap-y-6">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
								>Name</label
							>
							<div class="mt-1">
								<input
									type="text"
									name="name"
									id="name"
									class="focus:ring-primary focus:border-primary block w-full rounded-md border-gray-300 bg-white px-4 py-3 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
								/>
							</div>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
								>Email</label
							>
							<div class="mt-1">
								<input
									type="email"
									name="email"
									id="email"
									class="focus:ring-primary focus:border-primary block w-full rounded-md border-gray-300 bg-white px-4 py-3 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
								/>
							</div>
						</div>
						<div>
							<label
								for="message"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label
							>
							<div class="mt-1">
								<textarea
									id="message"
									name="message"
									rows="4"
									class="focus:ring-primary focus:border-primary block w-full rounded-md border-gray-300 bg-white px-4 py-3 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
								></textarea>
							</div>
						</div>
						<div>
							<button
								type="submit"
								class="bg-primary hover:bg-primary/90 focus:ring-primary inline-flex w-full items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none"
							>
								Send Message
								<svg
									class="-mr-1 ml-2 h-5 w-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									></path>
								</svg>
							</button>
						</div>
					</form>
				</div>
			{/if}
		</div>
	</div>
</section>
