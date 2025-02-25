<script lang="ts">
	import { setMode, mode } from 'mode-watcher';
	import { Sun, Moon } from 'lucide-svelte';

	function handleModeChange() {
		setMode($mode === 'light' ? 'dark' : 'light');
	}
</script>

<button on:click={handleModeChange} aria-label="Toggle dark mode">
	{#if $mode === 'light'}
		<Moon size={24} />
	{:else}
		<Sun size={24} />
	{/if}
</button>
