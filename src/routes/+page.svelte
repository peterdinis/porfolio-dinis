<script>
	import About from "$lib/components/porfolio/About.svelte";
import Hero from "$lib/components/porfolio/Hero.svelte";
    import Navigation from "$lib/components/shared/Navigation.svelte";
</script>

<Navigation />

<div class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
    <Hero />
    <About />
</div>