import { createDialog, type CreateDialogProps, type Dialog as DialogReturn } from "@melt-ui/svelte";
import { getContext, setContext } from "svelte";
import { getOptionUpdater, removeUndefined } from "$internal/index.js";

const NAME = "Dialog";

export const ctx = {
	set,
	get
};

function set(props: CreateDialogProps) {
	const dialog = createDialog({ ...removeUndefined(props), role: "dialog", forceVisible: true });
	setContext(NAME, dialog);
	return {
		...dialog,
		updateOption: getOptionUpdater(dialog.options)
	};
}

function get() {
	return getContext<DialogReturn>(NAME);
}
