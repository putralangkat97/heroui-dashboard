import { Surface } from "@heroui/react";

const STATS = [
  { label: "Total Lembar LKE", value: "128", helper: "+12 bulan ini" },
  { label: "Menunggu Verifikasi", value: "24", helper: "Perlu ditinjau" },
  { label: "Selesai", value: "96", helper: "76% dari total" },
  { label: "Ditolak", value: "8", helper: "Perlu revisi" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Ringkasan</h2>
        <p className="text-sm text-muted">
          Pantau aktivitas Lembar LKE secara keseluruhan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Surface key={stat.label} className="flex flex-col gap-1 rounded-2xl p-5">
            <span className="text-sm text-muted">{stat.label}</span>
            <span className="text-2xl font-semibold text-foreground">
              {stat.value}
            </span>
            <span className="text-xs text-muted">{stat.helper}</span>
          </Surface>
        ))}
      </div>

      <Surface className="rounded-2xl p-6">
        <h3 className="mb-2 text-base font-semibold text-foreground">
          Aktivitas Terbaru
        </h3>
        <p className="text-sm text-muted">
          Belum ada data. Hubungkan sumber data untuk menampilkan aktivitas
          terbaru di sini.
        </p>
      </Surface>
    </div>
  );
}
