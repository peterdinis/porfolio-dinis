<script>
	import About from '$lib/components/porfolio/About.svelte';
	import Contact from '$lib/components/porfolio/Contact.svelte';
	import Hero from '$lib/components/porfolio/Hero.svelte';
	import Projects from '$lib/components/porfolio/Projects.svelte';
	import Navigation from '$lib/components/shared/Navigation.svelte';
</script>

<Navigation />

<div class="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
	<Hero />
	<About />
	<Projects />
	<Contact />
</div>
