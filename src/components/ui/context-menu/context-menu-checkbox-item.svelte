<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from "@/lib";
	import { cn } from "@/utils";
	import { Check } from "radix-icons-svelte";

	type $$Props = ContextMenuPrimitive.CheckboxItemProps;
	type $$Events = ContextMenuPrimitive.CheckboxItemEvents;

	let className: $$Props["class"] = undefined;
	export { className as class };
	export let checked: $$Props["checked"] = undefined;
</script>

<ContextMenuPrimitive.CheckboxItem
	bind:checked
	class={cn(
		"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		className
	)}
	{...$$restProps}
	on:m-click
>
	<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
		<ContextMenuPrimitive.CheckboxItemIndicator>
			<Check class="h-4 w-4" />
		</ContextMenuPrimitive.CheckboxItemIndicator>
	</span>
	<slot />
</ContextMenuPrimitive.CheckboxItem>
