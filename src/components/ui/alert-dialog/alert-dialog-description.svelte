<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from "@/lib";
	import { cn } from "@/utils";

	type $$Props = AlertDialogPrimitive.DescriptionProps;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<AlertDialogPrimitive.Description
	class={cn("text-sm text-muted-foreground", className)}
	{...$$restProps}
>
	<slot />
</AlertDialogPrimitive.Description>
