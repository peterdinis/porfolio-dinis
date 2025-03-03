<script lang="ts">
	export let variant: 'bold' | 'italic' | 'classic' = 'classic';
	export let fontSize: string = 'text-base';
	export let color: string = 'text-black';
    export let text: string = '';
</script>

<p
	class={` ${fontSize} cursor-pointer ${color} ${variant === 'bold' ? 'font-bold' : ''} ${variant === 'italic' ? 'italic' : ''}`}
>
	{text}
</p>
