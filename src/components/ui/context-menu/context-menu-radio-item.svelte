<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from "@/lib";
	import { cn } from "@/utils";
	import { DotFilled } from "radix-icons-svelte";

	type $$Props = ContextMenuPrimitive.RadioItemProps;
	type $$Events = ContextMenuPrimitive.RadioItemEvents;

	let className: $$Props["class"] = undefined;
	export let value: $$Props["value"];
	export { className as class };
</script>

<ContextMenuPrimitive.RadioItem
	class={cn(
		"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		className
	)}
	{value}
	{...$$restProps}
	on:m-click
>
	<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
		<ContextMenuPrimitive.RadioItemIndicator>
			<DotFilled class="h-4 w-4 fill-current" />
		</ContextMenuPrimitive.RadioItemIndicator>
	</span>
	<slot />
</ContextMenuPrimitive.RadioItem>
