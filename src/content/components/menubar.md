---
title: Menubar
description: Displays a list of menus that can be used to control the application.
---

## Structure

```svelte
<script lang="ts">
	import { Menubar } from "bits-ui";
</script>

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger />
		<Menubar.Content>
			<Menubar.Label />
			<Menubar.Item />

			<Menubar.Group>
				<Menubar.Item />
			</Menubar.Group>

			<Menubar.CheckboxItem>
				<Menubar.CheckboxIndicator />
			</Menubar.CheckboxItem>

			<Menubar.RadioGroup>
				<Menubar.RadioItem>
					<Menubar.RadioIndicator />
				<Menubar.RadioItem>
			</Menubar.RadioGroup>

			<Menubar.Sub>
				<Menubar.SubTrigger />
				<Menubar.SubContent />
			</Menubar.Sub>

			<Menubar.Separator />
			<Menubar.Arrow />
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>

```
