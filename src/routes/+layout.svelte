<script lang="ts">
	import { setupI18n } from '$lib/i18n';
	import '../app.css';
	import ScrollToTop from '$lib/components/shared/ScrollToTop.svelte';
	let { children } = $props();

	setupI18n()
</script>

{@render children()}
<ScrollToTop />
