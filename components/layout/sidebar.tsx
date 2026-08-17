"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollShadow, Separator, cn } from "@heroui/react";

import { UserMenu } from "@/components/layout/user-menu";
import { NAV_ITEMS } from "@/lib/navigation";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-surface lg:flex">
      <div className="flex h-16 items-center gap-2 px-6">
        <div className="flex size-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">
          L
        </div>
        <span className="font-semibold text-foreground">LKE Admin</span>
      </div>

      <Separator />

      <ScrollShadow className="flex-1 px-3 py-4">
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted hover:bg-surface-secondary hover:text-foreground",
                )}
              >
                <Icon className="size-5 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </ScrollShadow>

      <Separator />

      <div className="p-3">
        <UserMenu />
      </div>
    </aside>
  );
}
