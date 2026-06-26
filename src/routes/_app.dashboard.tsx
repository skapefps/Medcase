import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flame,
  Zap,
  Clock,
  Trophy,
  Stethoscope,
  Library,
  ListChecks,
  Layers,
  Users,
  Brain,
  ChevronRight,
  Target,
  type LucideIcon,
} from "lucide-react";
import {
  user,
  dailyMission,
  diseases,
  specialties,
  curiosities,
  flashcards,
  questions,
} from "@/lib/mock-data";
import { Card, DidYouKnow, ProgressBar, DifficultyBadge } from "@/components/medcase/atoms";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({ meta: [{ title: "Início · MedCase" }] }),
  component: Dashboard,
});

const hubs: { to: string; label: string; icon: LucideIcon; hint: string }[] = [
  { to: "/library", label: "Doenças", icon: Brain, hint: "Biblioteca clínica" },
  { to: "/plantao", label: "Casos Clínicos", icon: Stethoscope, hint: "Plantão interativo" },
  { to: "/questions", label: "Questões", icon: ListChecks, hint: "Estilo residência" },
  { to: "/flashcards", label: "Flashcards", icon: Layers, hint: "Revisão espaçada" },
  { to: "/library", label: "Biblioteca", icon: Library, hint: "Referências" },
  { to: "/community", label: "Comunidade", icon: Users, hint: "Discussão de casos" },
];

function Dashboard() {
  const recommended = diseases.slice(0, 3);
  return (
    <div className="space-y-6">
      <header className="animate-rise">
        <p className="text-sm text-muted-foreground">Bom dia,</p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{user.name} 👋</h1>
      </header>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat icon={Flame} value={`${user.streak}`} label="dias seguidos" tone="text-warning" />
        <Stat
          icon={Zap}
          value={user.xp.toLocaleString("pt-BR")}
          label="XP total"
          tone="text-primary"
        />
        <Stat icon={Trophy} value={`Nv ${user.level}`} label={user.levelLabel} tone="text-accent" />
        <Stat icon={Clock} value={`${user.studiedToday}min`} label="hoje" tone="text-success" />
      </div>

      {/* Level progress */}
      <Card>
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">
            Nível {user.level} · {user.levelLabel}
          </span>
          <span className="text-muted-foreground">faltam {user.xpToNext} XP</span>
        </div>
        <ProgressBar value={72} className="mt-3" />
      </Card>

      {/* Daily mission + Plantão CTA */}
      <div className="grid gap-3 lg:grid-cols-2">
        <Card className="relative overflow-hidden">
          <div className="flex items-center gap-2">
            <Target className="size-4 text-primary" />
            <span className="text-sm font-semibold">{dailyMission.title}</span>
            <span className="ml-auto rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-semibold text-primary">
              +{dailyMission.reward} XP
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{dailyMission.desc}</p>
          <div className="mt-3 flex items-center gap-3">
            <ProgressBar value={dailyMission.progress} />
            <span className="text-xs font-semibold text-muted-foreground">
              {dailyMission.progress}%
            </span>
          </div>
        </Card>

        <Link
          to="/plantao"
          className="group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent p-5 text-primary-foreground transition-transform active:scale-[0.99]"
        >
          <div className="pointer-events-none absolute -right-6 -top-6 size-28 rounded-full bg-white/10 blur-xl" />
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/15">
            <Stethoscope className="size-6" />
          </span>
          <div className="min-w-0">
            <p className="text-base font-bold">Entrar no Plantão</p>
            <p className="text-sm text-primary-foreground/80">
              Um paciente sem diagnóstico aguarda você
            </p>
          </div>
          <ChevronRight className="ml-auto size-5 shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Hubs grid */}
      <section>
        <h2 className="mb-3 text-lg font-bold">Explorar</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {hubs.map((h) => (
            <Link key={h.label} to={h.to}>
              <Card interactive className="h-full">
                <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
                  <h.icon className="size-5" />
                </span>
                <p className="mt-3 text-sm font-semibold">{h.label}</p>
                <p className="text-xs text-muted-foreground">{h.hint}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Recommended cases */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold">Recomendados para você</h2>
          <Link to="/library" className="text-xs font-medium text-primary">
            Ver tudo
          </Link>
        </div>
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 no-scrollbar">
          {recommended.map((d) => (
            <Link
              key={d.id}
              to="/library/$diseaseId"
              params={{ diseaseId: d.id }}
              className="w-64 shrink-0"
            >
              <Card interactive className="h-full">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">{d.specialty}</span>
                  <DifficultyBadge level={d.difficulty} />
                </div>
                <p className="mt-2 font-semibold leading-tight">{d.name}</p>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{d.summary}</p>
                <div className="mt-3 flex items-center gap-2">
                  <ProgressBar value={d.progress} />
                  <span className="text-[11px] text-muted-foreground">{d.progress}%</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Pending review + questions */}
      <div className="grid gap-3 lg:grid-cols-2">
        <Link to="/flashcards">
          <Card interactive>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-accent/15 text-accent">
                <Layers className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">Revisão de flashcards</p>
                <p className="text-xs text-muted-foreground">
                  {flashcards.length} cartões aguardando hoje
                </p>
              </div>
              <ChevronRight className="size-4 text-muted-foreground" />
            </div>
          </Card>
        </Link>
        <Link to="/questions">
          <Card interactive>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-warning/15 text-warning">
                <ListChecks className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">Questões pendentes</p>
                <p className="text-xs text-muted-foreground">
                  {questions.length} questões de residência
                </p>
              </div>
              <ChevronRight className="size-4 text-muted-foreground" />
            </div>
          </Card>
        </Link>
      </div>

      {/* Progress by specialty */}
      <section>
        <h2 className="mb-3 text-lg font-bold">Progresso por especialidade</h2>
        <Card className="space-y-3.5">
          {specialties.map((s) => (
            <div key={s.name}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium">{s.name}</span>
                <span className="text-xs text-muted-foreground">{s.progress}%</span>
              </div>
              <ProgressBar value={s.progress} />
            </div>
          ))}
        </Card>
      </section>

      <DidYouKnow {...curiosities[0]} />
    </div>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
  tone,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  tone: string;
}) {
  return (
    <Card className="p-3.5">
      <Icon className={`size-5 ${tone}`} />
      <p className="mt-2 text-xl font-bold leading-none">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </Card>
  );
}
