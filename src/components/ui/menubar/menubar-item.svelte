<script lang="ts">
	import { Menubar as MenubarPrimitive } from "@/lib";
	import { cn } from "@/utils";

	type $$Props = MenubarPrimitive.ItemProps & {
		inset?: boolean;
	};
	type $$Events = MenubarPrimitive.ItemEvents;

	let className: $$Props["class"] = undefined;
	export let inset: $$Props["inset"] = undefined;
	export { className as class };
</script>

<MenubarPrimitive.Item
	class={cn(
		"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		inset && "pl-8",
		className
	)}
	{...$$restProps}
	on:m-click
>
	<slot />
</MenubarPrimitive.Item>
