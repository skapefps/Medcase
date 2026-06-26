import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Clock, Filter } from "lucide-react";
import { diseases, specialties } from "@/lib/mock-data";
import {
  Card,
  DifficultyBadge,
  UrgencyBadge,
  ProgressBar,
  PageHeader,
} from "@/components/medcase/atoms";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/library/")({
  head: () => ({
    meta: [
      { title: "Biblioteca de Doenças · MedCase" },
      {
        name: "description",
        content: "Busca poderosa por doença, sintoma, exame, síndrome, epônimo e mais.",
      },
    ],
  }),
  component: LibraryPage,
});

const searchHints = ["sintoma", "exame", "síndrome", "epônimo", "medicamento", "nervo", "artéria"];

function LibraryPage() {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState<string>("Todas");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return diseases.filter((d) => {
      const matchSpec = specialty === "Todas" || d.specialty === specialty;
      if (!q) return matchSpec;
      const haystack = [
        d.name,
        d.specialty,
        d.eponym ?? "",
        d.summary,
        ...d.tags,
        ...d.symptoms.map((s) => s.sign),
        ...d.exams,
      ]
        .join(" ")
        .toLowerCase();
      return matchSpec && haystack.includes(q);
    });
  }, [query, specialty]);

  return (
    <div className="space-y-5">
      <PageHeader
        title="Biblioteca"
        subtitle="Busque por doença, sintoma, exame, síndrome, epônimo, fármaco, nervo, artéria…"
      />

      {/* Search */}
      <div className="surface flex items-center gap-3 rounded-2xl px-4 focus-within:glow-ring">
        <Search className="size-5 shrink-0 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar no Hospital Virtual…"
          className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>

      {!query && (
        <div className="flex flex-wrap gap-2">
          {searchHints.map((h) => (
            <button
              key={h}
              onClick={() => setQuery(h)}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {h}
            </button>
          ))}
        </div>
      )}

      {/* Specialty filter */}
      <div className="-mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-1 no-scrollbar">
        <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
          <Filter className="size-3.5" />
        </span>
        {["Todas", ...specialties.map((s) => s.name)].map((s) => (
          <button
            key={s}
            onClick={() => setSpecialty(s)}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              specialty === s
                ? "border-primary bg-primary/15 text-primary"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {s}
          </button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">{filtered.length} resultado(s)</p>

      {/* Disease cards */}
      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((d) => (
          <Link key={d.id} to="/library/$diseaseId" params={{ diseaseId: d.id }}>
            <Card interactive className="h-full">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-semibold leading-tight">{d.name}</p>
                  <p className="mt-0.5 text-xs font-medium text-primary">{d.specialty}</p>
                </div>
                <UrgencyBadge level={d.urgency} />
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {d.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                <DifficultyBadge level={d.difficulty} />
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5" /> {d.avgTime}min
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <ProgressBar value={d.progress} />
                <span className="text-[11px] text-muted-foreground">{d.progress}%</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <Card className="py-10 text-center text-sm text-muted-foreground">
          Nenhum resultado para "{query}". Tente outro termo.
        </Card>
      )}
    </div>
  );
}
