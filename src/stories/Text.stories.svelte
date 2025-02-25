<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
    import Text from '$lib/components/ui/Text.svelte';

	const { Story } = defineMeta({
		title: 'Components/Text',
		component: Text,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'radio' },
				options: ['bold', 'italic', 'classic'],
			},
			fontSize: {
				control: { type: 'select' },
				options: ['text-sm', 'text-base', 'text-lg', 'text-xl'],
			},
			color: {
				control: 'color',
			},
		},
		args: {
			variant: 'classic',
			fontSize: 'text-base',
			color: 'text-black',
		},
	});
</script>

<Story name="Default" args={{ text: 'This is a text component' }} />

<Story name="Bold" args={{ variant: 'bold', text: 'Bold text' }} />

<Story name="Italic" args={{ variant: 'italic', text: 'Italic text' }} />

<Story name="Custom Font Size & Color" args={{ fontSize: 'text-xl', color: 'text-red-500', text: 'Large red text' }} />
