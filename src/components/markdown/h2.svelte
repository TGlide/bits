<script lang="ts">
	import { cn } from "@/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<h2
	class={cn("mt-12 scroll-m-20 text-2xl font-bold tracking-tight first:mt-0", className)}
	{...$$restProps}
>
	<slot />
</h2>
