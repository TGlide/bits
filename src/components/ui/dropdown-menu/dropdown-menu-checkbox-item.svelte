<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "@/lib";
	import { cn } from "@/utils";
	import { Check } from "radix-icons-svelte";

	type $$Props = DropdownMenuPrimitive.CheckboxItemProps;
	type $$Events = DropdownMenuPrimitive.CheckboxItemEvents;

	let className: $$Props["class"] = undefined;
	export let checked: $$Props["checked"] = undefined;
	export { className as class };
</script>

<DropdownMenuPrimitive.CheckboxItem
	bind:checked
	class={cn(
		"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		className
	)}
	{...$$restProps}
	on:m-click
>
	<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
		<DropdownMenuPrimitive.CheckboxItemIndicator>
			<Check class="h-4 w-4" />
		</DropdownMenuPrimitive.CheckboxItemIndicator>
	</span>
	<slot />
</DropdownMenuPrimitive.CheckboxItem>
