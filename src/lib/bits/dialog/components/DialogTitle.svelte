<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { ctx } from "../ctx.js";
	import type { TitleProps } from "../types.js";

	type $$Props = TitleProps;
	export let level: TitleProps["level"] = "h2";
	export let asChild = false;
	const title = ctx.get().elements.title;
</script>

{#if asChild}
	<slot builder={$title} />
{:else}
	<svelte:element this={level} use:melt={$title} {...$$restProps}>
		<slot builder={$title} />
	</svelte:element>
{/if}
