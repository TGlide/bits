<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { ctx } from "../ctx.js";
	import type { Events, Props } from "../types.js";

	type $$Props = Props;
	type $$Events = Events;
	export let checked: $$Props["checked"] = undefined;
	export let onCheckedChange: $$Props["onCheckedChange"] = undefined;
	export let disabled: $$Props["disabled"] = undefined;
	export let name: $$Props["name"] = undefined;
	export let value: $$Props["value"] = undefined;
	export let asChild = false;

	const {
		elements: { root },
		states: { checked: localChecked },
		updateOption
	} = ctx.set({
		disabled,
		name,
		value,
		defaultChecked: checked,
		onCheckedChange: ({ next }) => {
			onCheckedChange?.(next);
			checked = next;
			return next;
		}
	});

	$: checked !== undefined && localChecked.set(checked);
	$: updateOption("disabled", disabled);
	$: updateOption("name", name);
	$: updateOption("value", value);
</script>

{#if asChild}
	<slot builder={$root} />
{:else}
	<button use:melt={$root} {...$$restProps} on:m-click on:m-keydown>
		<slot builder={$root} />
	</button>
{/if}
