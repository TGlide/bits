<script lang="ts">
	import { Button as ButtonPrimitive } from "@/lib";
	import { cn } from "@/utils";
	import { buttonVariants, type Size, type Variant } from ".";
	import type { ButtonEventHandler } from "$lib/primitives/button";

	type $$Props = ButtonPrimitive.Props & {
		variant?: Variant;
		size?: Size;
	};

	type $$Events = {
		click: ButtonEventHandler<MouseEvent>;
		keydown: ButtonEventHandler<KeyboardEvent>;
	};

	let className: $$Props["class"] = undefined;
	export let variant: $$Props["variant"] = "default";
	export let size: $$Props["size"] = "default";
	export let builders: $$Props["builders"] = [];
	export { className as class };
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(buttonVariants({ variant, size, className }))}
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</ButtonPrimitive.Root>
