<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from "@/lib";
	import { buttonVariants } from "@/registry/default/ui/button";
	import { cn } from "@/utils";

	type $$Props = AlertDialogPrimitive.ActionProps;
	type $$Events = AlertDialogPrimitive.ActionEvents;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<AlertDialogPrimitive.Action class={cn(buttonVariants(), className)} {...$$restProps} on:m-click>
	<slot />
</AlertDialogPrimitive.Action>
