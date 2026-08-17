"use client";

import type { Key } from "react";
import { useRouter } from "next/navigation";
import { Dropdown } from "@heroui/react";

import {
  IconChevronsUpDown,
  IconLogOut,
  IconSettings,
  IconUser,
} from "@/components/icons";

const CURRENT_USER = {
  name: "Anggita Riutomo",
  email: "anggita@lke-zi.go.id",
};

export function UserMenu() {
  const router = useRouter();

  function handleAction(key: Key) {
    if (key === "profile") {
      router.push("/pengaturan/profil");
    } else if (key === "logout") {
      // TODO: ganti dengan pemanggilan API logout / clear session yang sebenarnya.
      router.push("/");
    }
  }

  return (
    <Dropdown>
      <Dropdown.Trigger className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-surface-secondary data-[pressed=true]:bg-surface-secondary">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <IconUser className="size-4" />
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-medium text-foreground">
            {CURRENT_USER.name}
          </span>
          <span className="truncate text-xs text-muted">
            {CURRENT_USER.email}
          </span>
        </span>
        <IconChevronsUpDown className="size-4 shrink-0 text-muted" />
      </Dropdown.Trigger>

      <Dropdown.Popover placement="top start" className="w-64">
        <Dropdown.Menu onAction={handleAction}>
          <Dropdown.Section>
            <Dropdown.Item
              id="profile"
              textValue="Pengaturan Profil"
              className="flex items-center gap-2"
            >
              <IconSettings className="size-4" />
              Pengaturan Profil
            </Dropdown.Item>
          </Dropdown.Section>

          <Dropdown.Section>
            <Dropdown.Item
              id="logout"
              textValue="Keluar"
              className="flex items-center gap-2 text-danger"
            >
              <IconLogOut className="size-4" />
              Keluar
            </Dropdown.Item>
          </Dropdown.Section>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
