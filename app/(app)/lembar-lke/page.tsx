import { Button, Surface } from "@heroui/react";

export default function LembarLkePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Lembar LKE
          </h2>
          <p className="text-sm text-muted">
            Kelola daftar Lembar Kerja Evaluasi di sini.
          </p>
        </div>
        <Button>Tambah Lembar LKE</Button>
      </div>

      <Surface className="rounded-2xl p-6">
        <p className="text-sm text-muted">
          Tabel/daftar Lembar LKE akan ditampilkan di sini. Halaman ini masih
          placeholder, siap dihubungkan ke data dan komponen{" "}
          <code className="rounded bg-surface-secondary px-1 py-0.5">
            Table
          </code>{" "}
          dari HeroUI.
        </p>
      </Surface>
    </div>
  );
}
