<script lang="ts">
	import { locale } from '$lib/i18n';

	const languages = [
		{ code: 'en', name: 'English', flag: '🇬🇧' },
		{ code: 'sk', name: 'Slovenčina', flag: '🇸🇰' }
	];

	function changeLanguage(lang: string) {
		locale.set(lang);
		localStorage.setItem('lang', lang);
	}
</script>

<div class="flex space-x-4">
	{#each languages as { code, name, flag }}
		<button
			on:click={() => changeLanguage(code)}
			class="flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 transition hover:bg-gray-100"
		>
			<span class="text-lg">{flag}</span>
			<span class="text-sm font-medium">{name}</span>
		</button>
	{/each}
</div>
