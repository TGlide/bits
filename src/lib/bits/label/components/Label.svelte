<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { ctx } from "../ctx.js";
	import type { Events, Props } from "../types.js";

	type $$Props = Props;
	type $$Events = Events;
	export let asChild = false;
	const root = ctx.get().elements.root;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions / applied by melt's builder-->
{#if asChild}
	<slot builder={$root} />
{:else}
	<label use:melt={$root} {...$$restProps} on:m-mousedown>
		<slot builder={$root} />
	</label>
{/if}
