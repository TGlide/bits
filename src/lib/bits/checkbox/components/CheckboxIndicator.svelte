<script lang="ts">
	import { ctx } from "../ctx.js";
	import type { IndicatorProps } from "../types.js";

	type $$Props = IndicatorProps;
	const { isChecked, isIndeterminate } = ctx.getIndicator();
</script>

<div {...$$restProps}>
	<slot isChecked={$isChecked} isIndeterminate={$isIndeterminate} />
</div>
