import { HoverCard as HoverCardPrimitive } from "@/lib";

import Content from "./hover-card-content.svelte";
const Root = HoverCardPrimitive.Root;
const Trigger = HoverCardPrimitive.Trigger;

export {
	Root,
	Content,
	Trigger,
	Root as HoverCard,
	Content as HoverCardContent,
	Trigger as HoverCardTrigger
};
