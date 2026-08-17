import type { ComponentType, SVGProps } from "react";

import { IconClipboardList, IconHome } from "@/components/icons";

export interface NavItem {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: IconHome },
  { label: "Lembar LKE", href: "/lembar-lke", icon: IconClipboardList },
];
