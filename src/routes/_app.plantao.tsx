import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Stethoscope,
  HeartPulse,
  MessageCircle,
  Hand,
  FlaskConical,
  Brain,
  DollarSign,
  Clock,
  Check,
  Plus,
  Award,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";
import { plantaoCase } from "@/lib/mock-data";
import { Card, PageHeader } from "@/components/medcase/atoms";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/plantao")({
  head: () => ({
    meta: [
      { title: "Plantão · MedCase" },
      {
        name: "description",
        content:
          "Receba um paciente sem diagnóstico e conduza o raciocínio clínico no Hospital Virtual.",
      },
    ],
  }),
  component: PlantaoPage,
});

type Stage = "anamnese" | "exame" | "exames" | "hipotese" | "feedback";

const stages: { id: Stage; label: string; icon: LucideIcon }[] = [
  { id: "anamnese", label: "Anamnese", icon: MessageCircle },
  { id: "exame", label: "Exame físico", icon: Hand },
  { id: "exames", label: "Exames", icon: FlaskConical },
  { id: "hipotese", label: "Hipótese", icon: Brain },
];

function PlantaoPage() {
  const c = plantaoCase;
  const [stage, setStage] = useState<Stage>("anamnese");
  const [asked, setAsked] = useState<number[]>([]);
  const [examined, setExamined] = useState<number[]>([]);
  const [ordered, setOrdered] = useState<number[]>([]);
  const [choice, setChoice] = useState<number | null>(null);

  const spent = ordered.reduce((sum, i) => sum + c.exams[i].cost, 0);
  const remaining = c.budget - spent;

  const score = useMemo(() => {
    let s = 0;
    asked.forEach((i) => c.anamnesis[i].key && (s += 10));
    examined.forEach((i) => c.exam[i].key && (s += 10));
    ordered.forEach((i) => (s += c.exams[i].key ? 15 : -5));
    if (choice !== null && c.hypotheses[choice].correct) s += 40;
    return Math.max(0, s);
  }, [asked, examined, ordered, choice, c]);

  function reset() {
    setStage("anamnese");
    setAsked([]);
    setExamined([]);
    setOrdered([]);
    setChoice(null);
  }

  return (
    <div className="space-y-5">
      <PageHeader
        title="Plantão"
        subtitle="Conduza o raciocínio clínico até o diagnóstico"
        action={
          <button
            onClick={reset}
            className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground"
          >
            <RotateCcw className="size-3.5" /> Reiniciar
          </button>
        }
      />

      {/* Patient card */}
      <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-5">
        <div className="flex items-start gap-4">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <Stethoscope className="size-7" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-bold">{c.patient}</h2>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                {c.age} anos · {c.sex}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-primary">QP: {c.chiefComplaint}</p>
          </div>
        </div>

        {/* Vitals */}
        <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
          {Object.entries(c.vitals).map(([k, v]) => (
            <div key={k} className="rounded-xl bg-card/70 p-2 text-center">
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{k}</p>
              <p className="text-sm font-bold">{v}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 rounded-xl bg-card/60 p-3 text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">História: </span>
          {c.history}
        </p>
      </div>

      {/* Meters */}
      <div className="grid grid-cols-3 gap-3">
        <Meter
          icon={DollarSign}
          label="Orçamento"
          value={`R$ ${remaining}`}
          tone={remaining < 300 ? "text-warning" : "text-success"}
        />
        <Meter
          icon={Clock}
          label="Tempo"
          value={`${asked.length + examined.length + ordered.length} ações`}
          tone="text-primary"
        />
        <Meter icon={Award} label="Pontuação" value={`${score}`} tone="text-accent" />
      </div>

      {/* Stage tabs */}
      {stage !== "feedback" && (
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {stages.map((s) => (
            <button
              key={s.id}
              onClick={() => setStage(s.id)}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-colors",
                stage === s.id
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border bg-card text-muted-foreground",
              )}
            >
              <s.icon className="size-4" />
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* Stage content */}
      {stage === "anamnese" && (
        <StageList
          title="Perguntas de anamnese"
          items={c.anamnesis.map((a) => ({ label: a.q, reveal: a.a }))}
          selected={asked}
          onSelect={(i) => setAsked((p) => (p.includes(i) ? p : [...p, i]))}
          onNext={() => setStage("exame")}
        />
      )}

      {stage === "exame" && (
        <StageList
          title="Exame físico"
          items={c.exam.map((a) => ({ label: a.item, reveal: a.result }))}
          selected={examined}
          onSelect={(i) => setExamined((p) => (p.includes(i) ? p : [...p, i]))}
          onNext={() => setStage("exames")}
        />
      )}

      {stage === "exames" && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold">Solicitar exames complementares</h3>
          {c.exams.map((e, i) => {
            const done = ordered.includes(i);
            const affordable = remaining >= e.cost || done;
            return (
              <button
                key={e.name}
                disabled={!affordable}
                onClick={() => !done && setOrdered((p) => [...p, i])}
                className={cn(
                  "w-full rounded-2xl border p-4 text-left transition-colors",
                  done ? "border-primary/40 bg-primary/10" : "border-border bg-card",
                  !affordable && "opacity-40",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">{e.name}</span>
                  <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                    R$ {e.cost}
                  </span>
                </div>
                {done && <p className="mt-2 text-sm text-muted-foreground">{e.result}</p>}
              </button>
            );
          })}
          <NextButton onClick={() => setStage("hipotese")}>Formular hipótese →</NextButton>
        </div>
      )}

      {stage === "hipotese" && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold">Hipótese diagnóstica principal</h3>
          {c.hypotheses.map((h, i) => (
            <button
              key={h.dx}
              onClick={() => setChoice(i)}
              className={cn(
                "flex w-full items-center gap-3 rounded-2xl border p-4 text-left text-sm transition-colors",
                choice === i ? "border-primary bg-primary/15" : "border-border bg-card",
              )}
            >
              <span
                className={cn(
                  "grid size-5 shrink-0 place-items-center rounded-full border",
                  choice === i
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground",
                )}
              >
                {choice === i && <Check className="size-3.5" />}
              </span>
              <span className="font-medium">{h.dx}</span>
            </button>
          ))}
          <NextButton disabled={choice === null} onClick={() => setStage("feedback")}>
            Confirmar diagnóstico
          </NextButton>
        </div>
      )}

      {stage === "feedback" && (
        <div className="space-y-4">
          <div
            className={cn(
              "rounded-3xl border p-5",
              choice !== null && c.hypotheses[choice].correct
                ? "border-success/40 bg-success/10"
                : "border-destructive/40 bg-destructive/10",
            )}
          >
            <p className="text-sm font-bold">
              {choice !== null && c.hypotheses[choice].correct
                ? "Diagnóstico correto! 🎉"
                : "Diagnóstico incorreto"}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Diagnóstico final:{" "}
              <span className="font-semibold text-foreground">
                {c.hypotheses.find((h) => h.correct)?.dx}
              </span>
            </p>
          </div>

          <Card>
            <div className="mb-2 flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-primary/15 text-primary">
                <Stethoscope className="size-4" />
              </span>
              <span className="text-sm font-semibold">Feedback do preceptor</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{c.preceptorFeedback}</p>
          </Card>

          <div className="grid grid-cols-3 gap-3">
            <Meter icon={Award} label="Pontuação" value={`${score}`} tone="text-accent" />
            <Meter icon={DollarSign} label="Gasto" value={`R$ ${spent}`} tone="text-primary" />
            <Meter
              icon={Clock}
              label="Ações"
              value={`${asked.length + examined.length + ordered.length}`}
              tone="text-success"
            />
          </div>

          <NextButton onClick={reset}>
            <RotateCcw className="mr-1 inline size-4" /> Novo plantão
          </NextButton>
        </div>
      )}
    </div>
  );
}

function StageList({
  title,
  items,
  selected,
  onSelect,
  onNext,
}: {
  title: string;
  items: { label: string; reveal: string }[];
  selected: number[];
  onSelect: (i: number) => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold">{title}</h3>
      {items.map((it, i) => {
        const done = selected.includes(i);
        return (
          <button
            key={it.label}
            onClick={() => onSelect(i)}
            className={cn(
              "w-full rounded-2xl border p-4 text-left transition-colors",
              done
                ? "border-primary/40 bg-primary/10"
                : "border-border bg-card hover:border-primary/30",
            )}
          >
            <div className="flex items-center gap-2">
              {done ? (
                <Check className="size-4 shrink-0 text-primary" />
              ) : (
                <Plus className="size-4 shrink-0 text-muted-foreground" />
              )}
              <span className="text-sm font-medium">{it.label}</span>
            </div>
            {done && (
              <p className="mt-2 pl-6 text-sm italic text-muted-foreground">"{it.reveal}"</p>
            )}
          </button>
        );
      })}
      <NextButton onClick={onNext}>Próxima etapa →</NextButton>
    </div>
  );
}

function NextButton({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-xl bg-gradient-to-r from-primary to-accent py-3 text-sm font-semibold text-primary-foreground transition-transform active:scale-[0.98] disabled:opacity-40"
    >
      {children}
    </button>
  );
}

function Meter({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  tone: string;
}) {
  return (
    <Card className="p-3 text-center">
      <Icon className={cn("mx-auto size-4", tone)} />
      <p className="mt-1.5 text-sm font-bold leading-none">{value}</p>
      <p className="mt-1 text-[11px] text-muted-foreground">{label}</p>
    </Card>
  );
}
