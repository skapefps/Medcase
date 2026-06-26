import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, X, BookOpen, Timer, Layers, Flag, ChevronRight } from "lucide-react";
import { questions, specialties } from "@/lib/mock-data";
import { Card, PageHeader } from "@/components/medcase/atoms";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/questions")({
  head: () => ({
    meta: [
      { title: "Questões · MedCase" },
      {
        name: "description",
        content: "Questões estilo residência com explicação profunda de cada alternativa.",
      },
    ],
  }),
  component: QuestionsPage,
});

type Mode = "estudo" | "prova";

function QuestionsPage() {
  const [mode, setMode] = useState<Mode>("estudo");
  const [specialty, setSpecialty] = useState("Todas");
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const pool = questions.filter((q) => specialty === "Todas" || q.specialty === specialty);
  const q = pool[idx % pool.length] ?? questions[0];
  const showFeedback = mode === "estudo" && answered;

  function pick(letter: string, correct: boolean) {
    if (answered && mode === "estudo") return;
    setSelected(letter);
    setAnswered(true);
    if (mode === "prova") {
      toast(correct ? "Resposta registrada" : "Resposta registrada", {
        description: "Confira no modo estudo.",
      });
    }
  }

  function next() {
    setIdx((i) => i + 1);
    setSelected(null);
    setAnswered(false);
  }

  return (
    <div className="space-y-5">
      <PageHeader
        title="Questões"
        subtitle="Estilo residência, com explicação de cada alternativa"
      />

      {/* Mode switch */}
      <div className="flex rounded-xl bg-secondary/60 p-1">
        <ModeTab
          active={mode === "estudo"}
          onClick={() => setMode("estudo")}
          icon={BookOpen}
          label="Modo estudo"
        />
        <ModeTab
          active={mode === "prova"}
          onClick={() => setMode("prova")}
          icon={Timer}
          label="Modo prova"
        />
      </div>

      {/* Specialty filter */}
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 no-scrollbar">
        {["Todas", ...specialties.map((s) => s.name)].map((s) => (
          <button
            key={s}
            onClick={() => {
              setSpecialty(s);
              setIdx(0);
              setSelected(null);
              setAnswered(false);
            }}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              specialty === s
                ? "border-primary bg-primary/15 text-primary"
                : "border-border bg-card text-muted-foreground",
            )}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Question */}
      <Card>
        <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
          <span className="rounded-full bg-secondary px-2 py-0.5 font-medium text-primary">
            {q.specialty}
          </span>
          <span>
            Questão {(idx % pool.length) + 1} de {pool.length} · {q.style}
          </span>
        </div>
        <p className="text-sm leading-relaxed">{q.stem}</p>

        <div className="mt-4 space-y-2.5">
          {q.options.map((o) => {
            const isSel = selected === o.letter;
            const reveal = showFeedback;
            return (
              <button
                key={o.letter}
                onClick={() => pick(o.letter, o.correct)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-xl border p-3 text-left text-sm transition-colors",
                  reveal && o.correct && "border-success/50 bg-success/10",
                  reveal && isSel && !o.correct && "border-destructive/50 bg-destructive/10",
                  !reveal && isSel && "border-primary bg-primary/10",
                  !reveal && !isSel && "border-border bg-card hover:border-primary/30",
                  reveal && !o.correct && !isSel && "border-border bg-card opacity-70",
                )}
              >
                <span
                  className={cn(
                    "grid size-6 shrink-0 place-items-center rounded-lg border text-xs font-bold",
                    reveal && o.correct && "border-success bg-success text-success-foreground",
                    reveal &&
                      isSel &&
                      !o.correct &&
                      "border-destructive bg-destructive text-destructive-foreground",
                    (!reveal || (!o.correct && !isSel)) &&
                      "border-muted-foreground text-muted-foreground",
                  )}
                >
                  {reveal && o.correct ? (
                    <Check className="size-3.5" />
                  ) : reveal && isSel ? (
                    <X className="size-3.5" />
                  ) : (
                    o.letter
                  )}
                </span>
                <span className="flex-1">
                  <span className="font-medium">{o.text}</span>
                  {reveal && (
                    <span className="mt-1.5 block text-xs leading-relaxed text-muted-foreground">
                      {o.why}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() =>
                toast.success("Flashcard criado a partir desta questão!", {
                  description: "Adicionado à sua revisão.",
                })
              }
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-medium"
            >
              <Layers className="size-3.5 text-accent" /> Gerar flashcard do erro
            </button>
            <button
              onClick={() => toast("Questão marcada para revisão")}
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-medium"
            >
              <Flag className="size-3.5 text-warning" /> Marcar erro
            </button>
          </div>
        )}

        {(answered || mode === "prova") && (
          <button
            onClick={next}
            className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-accent py-3 text-sm font-semibold text-primary-foreground"
          >
            Próxima questão <ChevronRight className="size-4" />
          </button>
        )}
      </Card>
    </div>
  );
}

function ModeTab({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof BookOpen;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-colors",
        active ? "bg-card text-foreground shadow-sm" : "text-muted-foreground",
      )}
    >
      <Icon className="size-4" />
      {label}
    </button>
  );
}
