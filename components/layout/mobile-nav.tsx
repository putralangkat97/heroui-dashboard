"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Drawer, Separator, cn, useOverlayState } from "@heroui/react";

import { IconMenu } from "@/components/icons";
import { NAV_ITEMS } from "@/lib/navigation";

export function MobileNav() {
  const pathname = usePathname();
  const state = useOverlayState();

  return (
    <Drawer state={state}>
      <Button
        isIconOnly
        variant="ghost"
        size="sm"
        aria-label="Buka menu navigasi"
        onPress={state.open}
        className="lg:hidden"
      >
        <IconMenu className="size-5" />
      </Button>

      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog aria-label="Menu navigasi" className="w-72">
            <Drawer.Header>
              <Drawer.Heading>LKE Admin</Drawer.Heading>
              <Drawer.CloseTrigger />
            </Drawer.Header>

            <Separator />

            <Drawer.Body>
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={state.close}
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
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}
