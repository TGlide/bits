import type {
	HTMLDivAttributes,
	OmitOpen,
	Expand,
	HTMLHeadingAttributes,
	OnChangeFn,
	Transition,
	TransitionParams,
	AsChild
} from "$internal/index.js";
import type { HTMLButtonAttributes } from "svelte/elements";
import type { CreateDialogProps, DialogComponentEvents } from "@melt-ui/svelte";

type Props = Expand<
	OmitOpen<Omit<CreateDialogProps, "role">> & {
		open?: CreateDialogProps["defaultOpen"] & {};
		onOpenChange?: OnChangeFn<CreateDialogProps["defaultOpen"]>;
	}
>;

type TriggerProps = AsChild & HTMLButtonAttributes;

type ActionProps = TriggerProps;
type CancelProps = TriggerProps;

type ContentProps<T extends Transition = Transition> = {
	transition?: T;
	transitionConfig?: TransitionParams<T>;
} & AsChild &
	HTMLDivAttributes;

type DescriptionProps = AsChild & HTMLDivAttributes;

type OverlayProps = AsChild & HTMLDivAttributes;

type PortalProps = AsChild & HTMLDivAttributes;

type TitleProps = {
	level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & AsChild &
	HTMLHeadingAttributes;

type TriggerEvents = DialogComponentEvents["trigger"];
type CancelEvents = DialogComponentEvents["close"];
type ActionEvents = CancelEvents;

export type {
	Props,
	TriggerProps,
	ActionProps,
	CancelProps,
	ContentProps,
	DescriptionProps,
	OverlayProps,
	PortalProps,
	TitleProps,
	//
	Props as AlertDialogProps,
	TriggerProps as AlertDialogTriggerProps,
	ActionProps as AlertDialogActionProps,
	CancelProps as AlertDialogCancelProps,
	ContentProps as AlertDialogContentProps,
	DescriptionProps as AlertDialogDescriptionProps,
	OverlayProps as AlertDialogOverlayProps,
	PortalProps as AlertDialogPortalProps,
	TitleProps as AlertDialogTitleProps,
	//
	TriggerEvents,
	CancelEvents,
	ActionEvents,
	//
	TriggerEvents as AlertDialogTriggerEvents,
	CancelEvents as AlertDialogCancelEvents,
	ActionEvents as AlertDialogActionEvents
};
