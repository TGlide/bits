<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import type { Props } from "../types.js";
	import { ctx } from "../ctx.js";

	type Multiple = $$Generic<boolean>;
	type $$Props = Props<Multiple>;

	export let multiple: $$Props["multiple"] = false as Multiple;
	export let disabled: $$Props["disabled"] = false;
	export let value: $$Props["value"] = undefined;
	export let onValueChange: $$Props["onValueChange"] = undefined;
	export let asChild: $$Props["asChild"] = false;

	const {
		elements: { root },
		states: { value: localValue },
		updateOption
	} = ctx.set({
		multiple,
		disabled,
		defaultValue: value,

		onValueChange: (({ next }: { next: $$Props["value"] }) => {
			onValueChange?.(next);
			value = next;
			return next;
		}) as any // I'm sorry
	});

	// Svelte types get weird here saying set expects something that is both string and string[].
	$: localValue.set(value as any);

	$: updateOption("multiple", multiple);
	$: updateOption("disabled", disabled);
</script>

{#if asChild}
	<slot builder={$root} />
{:else}
	<div use:melt={$root} {...$$restProps}>
		<slot builder={$root} />
	</div>
{/if}
