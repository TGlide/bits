<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { ctx } from "../ctx.js";
	import type { ThumbEvents, ThumbProps } from "../types.js";

	type $$Props = ThumbProps;
	type $$Events = ThumbEvents;
	export let asChild = false;
	const thumb = ctx.get().elements.thumb;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions / applied by melts builders -->
{#if asChild}
	<slot builder={$thumb()} />
{:else}
	<span use:melt={$thumb()} {...$$restProps} on:m-keydown />
{/if}
