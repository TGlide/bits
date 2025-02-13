import type { CreateSelectProps, SelectComponentEvents, SelectOptionProps } from "@melt-ui/svelte";
import type {
	AsChild,
	Expand,
	HTMLDivAttributes,
	OmitOpen,
	OmitValue,
	OnChangeFn,
	Transition,
	TransitionParams
} from "$internal/index.js";
import type { HTMLAttributes, HTMLButtonAttributes, HTMLInputAttributes } from "svelte/elements";

type Props = Expand<
	OmitOpen<OmitValue<Omit<CreateSelectProps, "defaultValueLabel" | "forceVisible">>> & {
		value?: CreateSelectProps["defaultValue"] & {};
		onValueChange?: OnChangeFn<CreateSelectProps["defaultValue"]>;
		open?: CreateSelectProps["defaultOpen"] & {};
		onOpenChange?: OnChangeFn<CreateSelectProps["defaultOpen"]>;
		label?: CreateSelectProps["defaultValueLabel"] & {};
	}
>;

type ContentProps<T extends Transition = Transition> = {
	transition?: T;
	transitionConfig?: TransitionParams<T>;
} & AsChild &
	HTMLDivAttributes;

type GroupProps = AsChild & HTMLDivAttributes;
type InputProps = AsChild & HTMLInputAttributes;
type LabelProps = AsChild & HTMLDivAttributes;
type ItemProps = Expand<SelectOptionProps> & AsChild & HTMLDivAttributes;
type SeparatorProps = AsChild & HTMLDivAttributes;

type TriggerProps = AsChild & HTMLButtonAttributes;
type ValueProps = {
	placeholder?: string;
} & AsChild &
	HTMLAttributes<HTMLSpanElement>;

type ItemEvents = SelectComponentEvents["option"];
type ContentEvents = SelectComponentEvents["menu"];
type TriggerEvents = SelectComponentEvents["trigger"];
type LabelEvents = SelectComponentEvents["label"];

export type {
	Props,
	ContentProps,
	GroupProps,
	InputProps,
	LabelProps,
	ItemProps,
	SeparatorProps,
	TriggerProps,
	ValueProps,
	//
	Props as SelectProps,
	ContentProps as SelectContentProps,
	GroupProps as SelectGroupProps,
	InputProps as SelectInputProps,
	LabelProps as SelectLabelProps,
	ItemProps as SelectItemProps,
	SeparatorProps as SelectSeparatorProps,
	TriggerProps as SelectTriggerProps,
	ValueProps as SelectValueProps,
	//
	ItemEvents,
	ContentEvents,
	TriggerEvents,
	LabelEvents,
	//
	ItemEvents as SelectItemEvents,
	ContentEvents as SelectContentEvents,
	TriggerEvents as SelectTriggerEvents,
	LabelEvents as SelectLabelEvents
};
