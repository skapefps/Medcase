import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { RotateCcw, Brain, Flame, Check } from "lucide-react";
import { flashcards } from "@/lib/mock-data";
import { Card, PageHeader, ProgressBar } from "@/components/medcase/atoms";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/flashcards")({
  head: () => ({
    meta: [
      { title: "Flashcards · MedCase" },
      {
        name: "description",
        content: "Revisão espaçada com cartões por especialidade e nível de dificuldade.",
      },
    ],
  }),
  component: FlashcardsPage,
});

type Rating = "errei" | "dificil" | "facil" | "acertei";

const ratings: { id: Rating; label: string; tone: string }[] = [
  { id: "errei", label: "Errei", tone: "bg-destructive/15 text-destructive border-destructive/30" },
  { id: "dificil", label: "Difícil", tone: "bg-warning/15 text-warning border-warning/30" },
  { id: "facil", label: "Fácil", tone: "bg-primary/15 text-primary border-primary/30" },
  { id: "acertei", label: "Acertei", tone: "bg-success/15 text-success border-success/30" },
];

function FlashcardsPage() {
  const [filter, setFilter] = useState<"todos" | "dificeis">("todos");
  const deck = useMemo(
    () => flashcards.filter((c) => (filter === "dificeis" ? c.difficulty === "Difícil" : true)),
    [filter],
  );
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState<Record<string, Rating>>({});

  const card = deck[idx % deck.length];
  const reviewed = Object.keys(done).length;
  const progress = Math.round((reviewed / flashcards.length) * 100);

  function rate(r: Rating) {
    setDone((d) => ({ ...d, [card.id]: r }));
    setFlipped(false);
    setIdx((i) => i + 1);
  }

  return (
    <div className="space-y-5">
      <PageHeader title="Flashcards" subtitle="Revisão espaçada — fixe o conteúdo a longo prazo" />

      {/* Today stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-3 text-center">
          <Brain className="mx-auto size-4 text-primary" />
          <p className="mt-1.5 text-sm font-bold">{flashcards.length}</p>
          <p className="text-[11px] text-muted-foreground">na revisão</p>
        </Card>
        <Card className="p-3 text-center">
          <Check className="mx-auto size-4 text-success" />
          <p className="mt-1.5 text-sm font-bold">{reviewed}</p>
          <p className="text-[11px] text-muted-foreground">revisados</p>
        </Card>
        <Card className="p-3 text-center">
          <Flame className="mx-auto size-4 text-warning" />
          <p className="mt-1.5 text-sm font-bold">{progress}%</p>
          <p className="text-[11px] text-muted-foreground">memória</p>
        </Card>
      </div>

      <ProgressBar value={progress} />

      {/* Filter */}
      <div className="flex rounded-xl bg-secondary/60 p-1">
        {(["todos", "dificeis"] as const).map((f) => (
          <button
            key={f}
            onClick={() => {
              setFilter(f);
              setIdx(0);
              setFlipped(false);
            }}
            className={cn(
              "flex-1 rounded-lg py-2 text-sm font-semibold capitalize transition-colors",
              filter === f ? "bg-card text-foreground shadow-sm" : "text-muted-foreground",
            )}
          >
            {f === "todos" ? "Todos" : "Difíceis"}
          </button>
        ))}
      </div>

      {/* Card */}
      <button
        onClick={() => setFlipped((f) => !f)}
        className="surface relative flex min-h-[240px] w-full flex-col justify-center rounded-3xl p-6 text-center transition-transform active:scale-[0.99]"
      >
        <div className="mb-3 flex items-center justify-center gap-2">
          <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-primary">
            {card.specialty}
          </span>
          <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
            {card.difficulty}
          </span>
        </div>
        <p
          className={cn(
            "text-base font-medium leading-relaxed",
            flipped && "text-muted-foreground",
          )}
        >
          {flipped ? card.back : card.front}
        </p>
        <span className="mt-4 inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <RotateCcw className="size-3.5" /> {flipped ? "Ver pergunta" : "Toque para revelar"}
        </span>
      </button>

      {/* Ratings */}
      {flipped ? (
        <div className="grid grid-cols-4 gap-2">
          {ratings.map((r) => (
            <button
              key={r.id}
              onClick={() => rate(r.id)}
              className={cn(
                "rounded-xl border py-3 text-xs font-semibold transition-transform active:scale-95",
                r.tone,
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
      ) : (
        <p className="text-center text-xs text-muted-foreground">
          Revele a resposta para avaliar sua memória
        </p>
      )}
    </div>
  );
}
