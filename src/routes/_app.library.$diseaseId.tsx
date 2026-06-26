import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Clock,
  TrendingUp,
  AlertTriangle,
  ChevronDown,
  BookOpen,
  Microscope,
  Activity,
  Search,
  FlaskConical,
  GitBranch,
  Pill,
  Stethoscope,
  ListChecks,
  Layers,
  Network,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { getDisease, diseases, type Difficulty } from "@/lib/mock-data";
import {
  Card,
  DifficultyBadge,
  UrgencyBadge,
  ProgressBar,
  DidYouKnow,
} from "@/components/medcase/atoms";
import { cn } from "@/lib/utils";
import anatomyHero from "@/assets/anatomy-hero.jpg";

export const Route = createFileRoute("/_app/library/$diseaseId")({
  loader: ({ params }) => {
    const disease = getDisease(params.diseaseId);
    if (!disease) throw notFound();
    return { disease };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.disease.name} · MedCase` },
      { name: "description", content: loaderData?.disease.summary },
    ],
  }),
  notFoundComponent: () => (
    <div className="py-20 text-center">
      <p className="text-lg font-semibold">Doença não encontrada</p>
      <Link to="/library" className="mt-2 inline-block text-sm text-primary">
        ← Voltar à biblioteca
      </Link>
    </div>
  ),
  component: DiseasePage,
});

const depthLevels: Difficulty[] = ["Básico", "Faculdade", "Residência"];

function DiseasePage() {
  const { diseaseId } = Route.useParams();
  const d = getDisease(diseaseId)!;
  const [depth, setDepth] = useState<Difficulty>("Faculdade");

  return (
    <div className="space-y-5">
      <Link
        to="/library"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Biblioteca
      </Link>

      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-border">
        <img
          src={anatomyHero}
          alt={`Ilustração anatômica de ${d.name}`}
          width={1280}
          height={640}
          className="h-44 w-full object-cover sm:h-56"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {d.specialty}
            </span>
            <DifficultyBadge level={d.difficulty} />
            <UrgencyBadge level={d.urgency} />
          </div>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{d.name}</h1>
        </div>
      </div>

      {/* Quick facts */}
      <div className="grid grid-cols-3 gap-3">
        <Fact icon={TrendingUp} label="Incidência" value={d.incidence} />
        <Fact icon={Clock} label="Tempo médio" value={`${d.avgTime} min`} />
        <Fact icon={AlertTriangle} label="Urgência" value={d.urgency} />
      </div>

      <Card>
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">Seu progresso</span>
          <span className="text-muted-foreground">{d.progress}%</span>
        </div>
        <ProgressBar value={d.progress} className="mt-2.5" />
      </Card>

      {/* Depth selector */}
      <div>
        <p className="mb-2 text-sm font-semibold">Nível de profundidade</p>
        <div className="flex rounded-xl bg-secondary/60 p-1">
          {depthLevels.map((l) => (
            <button
              key={l}
              onClick={() => setDepth(l)}
              className={cn(
                "flex-1 rounded-lg py-2 text-sm font-medium transition-colors",
                depth === l ? "bg-card text-foreground shadow-sm" : "text-muted-foreground",
              )}
            >
              {l}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          {depth === "Básico" && "Visão geral acessível, focada nos conceitos-chave."}
          {depth === "Faculdade" && "Aprofundamento clínico-fisiopatológico para a graduação."}
          {depth === "Residência" && "Detalhes avançados, condutas e armadilhas de prova."}
        </p>
      </div>

      <DidYouKnow title="Você sabia?" text={d.curiosity} tag="Curiosidade" />

      {/* Modules */}
      <section className="space-y-2.5">
        <h2 className="text-lg font-bold">Módulos</h2>

        <Module icon={BookOpen} title="História & Visão geral" defaultOpen>
          <p className="text-sm leading-relaxed text-muted-foreground">{d.summary}</p>
        </Module>

        <Module icon={Microscope} title="Fisiopatologia">
          <p className="text-sm leading-relaxed text-muted-foreground">{d.pathophysiology}</p>
        </Module>

        <Module icon={Activity} title="Sintomas explicados por mecanismo" defaultOpen>
          <div className="space-y-3">
            {d.symptoms.map((s) => (
              <div key={s.sign} className="rounded-xl border border-border bg-card p-3">
                <p className="text-sm font-semibold text-primary">{s.sign}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Mecanismo: </span>
                  {s.mechanism}
                </p>
              </div>
            ))}
          </div>
        </Module>

        <Module icon={Stethoscope} title="Semiologia & Diagnóstico">
          <p className="text-sm leading-relaxed text-muted-foreground">{d.diagnosis}</p>
        </Module>

        <Module icon={FlaskConical} title="Exames complementares">
          <ul className="space-y-2">
            {d.exams.map((e) => (
              <li key={e} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {e}
              </li>
            ))}
          </ul>
        </Module>

        <Module icon={GitBranch} title="Diagnóstico diferencial">
          <div className="flex flex-wrap gap-2">
            {d.differentials.map((dx) => (
              <span
                key={dx}
                className="rounded-lg border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
              >
                {dx}
              </span>
            ))}
          </div>
        </Module>

        <Module icon={Pill} title="Tratamento">
          <p className="text-sm leading-relaxed text-muted-foreground">{d.treatment}</p>
        </Module>

        <Module icon={Network} title="Mapa mental">
          <MindMap disease={d.name} specialty={d.specialty} />
        </Module>
      </section>

      {/* Practice CTAs */}
      <section className="grid gap-3 sm:grid-cols-3">
        <PracticeLink
          to="/plantao"
          icon={Stethoscope}
          label="Caso clínico"
          hint="Resolver no Plantão"
        />
        <PracticeLink
          to="/questions"
          icon={ListChecks}
          label="Questões"
          hint="Testar conhecimento"
        />
        <PracticeLink to="/flashcards" icon={Layers} label="Flashcards" hint="Fixar conteúdo" />
      </section>

      {/* Related */}
      <section>
        <h2 className="mb-3 text-lg font-bold">Relacionadas</h2>
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 no-scrollbar">
          {diseases
            .filter((x) => x.specialty === d.specialty && x.id !== d.id)
            .slice(0, 4)
            .map((x) => (
              <Link
                key={x.id}
                to="/library/$diseaseId"
                params={{ diseaseId: x.id }}
                className="w-48 shrink-0"
              >
                <Card interactive className="h-full">
                  <p className="text-sm font-semibold leading-tight">{x.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{x.specialty}</p>
                </Card>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

function Fact({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <Card className="p-3">
      <Icon className="size-4 text-primary" />
      <p className="mt-2 text-[11px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="text-sm font-semibold leading-tight">{value}</p>
    </Card>
  );
}

function Module({
  icon: Icon,
  title,
  children,
  defaultOpen = false,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="surface overflow-hidden rounded-2xl">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
          <Icon className="size-[18px]" />
        </span>
        <span className="flex-1 text-sm font-semibold">{title}</span>
        <ChevronDown
          className={cn("size-4 text-muted-foreground transition-transform", open && "rotate-180")}
        />
      </button>
      {open && <div className="px-4 pb-4 pt-1">{children}</div>}
    </div>
  );
}

function MindMap({ disease, specialty }: { disease: string; specialty: string }) {
  const nodes = ["Fisiopatologia", "Clínica", "Diagnóstico", "Tratamento"];
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground">
        {disease}
      </span>
      <div className="h-4 w-px bg-border" />
      <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
        {nodes.map((n) => (
          <div
            key={n}
            className="rounded-xl border border-border bg-card p-2.5 text-center text-xs font-medium"
          >
            <Sparkles className="mx-auto mb-1 size-3.5 text-primary" />
            {n}
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">Mapa mental de {specialty}</p>
    </div>
  );
}

function PracticeLink({
  to,
  icon: Icon,
  label,
  hint,
}: {
  to: string;
  icon: LucideIcon;
  label: string;
  hint: string;
}) {
  return (
    <Link to={to}>
      <Card interactive className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
          <Icon className="size-5" />
        </span>
        <div>
          <p className="text-sm font-semibold">{label}</p>
          <p className="text-xs text-muted-foreground">{hint}</p>
        </div>
      </Card>
    </Link>
  );
}
