<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { ctx } from "../ctx.js";
	import type { CheckboxItemEvents, CheckboxItemProps } from "../types.js";

	type $$Props = CheckboxItemProps;
	type $$Events = CheckboxItemEvents;
	export let checked: $$Props["checked"] = undefined;
	export let disabled: $$Props["disabled"] = undefined;
	export let onCheckedChange: $$Props["onCheckedChange"] = undefined;
	export let asChild = false;
	const {
		elements: { checkboxItem },
		states: { checked: localChecked },
		updateOption
	} = ctx.setCheckboxItem({
		disabled,
		defaultChecked: checked,
		onCheckedChange: ({ next }) => {
			checked = next;
			onCheckedChange?.(next);
			return next;
		}
	});

	$: checked !== undefined && localChecked.set(checked);
	$: updateOption("disabled", disabled);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions applied by melt's action/store -->
{#if asChild}
	<slot builder={$checkboxItem} />
{:else}
	<div
		use:melt={$checkboxItem}
		{...$$restProps}
		on:m-click
		on:m-focusin
		on:m-focusout
		on:m-keydown
		on:m-pointerdown
		on:m-pointerleave
		on:m-pointermove
	>
		<slot builder={$checkboxItem} />
	</div>
{/if}
