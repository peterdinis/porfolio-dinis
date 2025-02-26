<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import ScrollToTop from '$lib/components/shared/ScrollToTop.svelte';
	let { children } = $props();
</script>

{@render children()}
<ModeWatcher />
<ScrollToTop />
