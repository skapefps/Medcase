import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Settings,
  Flame,
  Zap,
  Trophy,
  Clock,
  Stethoscope,
  Brain,
  Siren,
  GraduationCap,
  Eye,
  EyeOff,
  Award,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { user, badges, timeline, specialties, diseases } from "@/lib/mock-data";
import { Card, ProgressBar } from "@/components/medcase/atoms";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/profile")({
  head: () => ({ meta: [{ title: "Perfil · MedCase" }] }),
  component: ProfilePage,
});

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Stethoscope,
  Brain,
  Siren,
  GraduationCap,
  Trophy,
};

const tabs = ["Visão geral", "Estudos", "Casos", "Certificados", "Publicações"] as const;
type Tab = (typeof tabs)[number];

function ProfilePage() {
  const [tab, setTab] = useState<Tab>("Visão geral");
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className="space-y-5">
      {/* Header card */}
      <div className="relative overflow-hidden rounded-3xl border border-border">
        <div className="h-24 w-full" style={{ background: "var(--gradient-hero)" }} />
        <div className="px-5 pb-5">
          <div className="-mt-10 flex items-end justify-between">
            <div className="grid size-20 place-items-center rounded-2xl border-4 border-background bg-gradient-to-br from-primary to-accent text-3xl font-bold text-primary-foreground">
              {user.avatarInitials}
            </div>
            <button className="mb-1 flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground">
              <Settings className="size-3.5" /> Editar
            </button>
          </div>
          <h1 className="mt-3 text-xl font-bold">{user.name}</h1>
          <p className="text-sm text-muted-foreground">
            {user.university} · {user.period}
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <Pill>Residência: {user.targetResidency}</Pill>
            <Pill>CRM: {user.crm}</Pill>
            {user.favoriteSpecialties.map((s) => (
              <Pill key={s} accent>
                {s}
              </Pill>
            ))}
          </div>

          <button
            onClick={() => setIsPublic((p) => !p)}
            className="mt-3 flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
          >
            {isPublic ? <Eye className="size-3.5 text-success" /> : <EyeOff className="size-3.5" />}
            Perfil {isPublic ? "público" : "privado"}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat icon={Flame} value={`${user.streak}`} label="dias seguidos" tone="text-warning" />
        <Stat icon={Zap} value={user.xp.toLocaleString("pt-BR")} label="XP" tone="text-primary" />
        <Stat
          icon={Trophy}
          value={`#${user.rankPosition}`}
          label={`de ${user.rankTotal.toLocaleString("pt-BR")}`}
          tone="text-accent"
        />
        <Stat
          icon={Clock}
          value={`${Math.round(user.studiedWeek / 60)}h`}
          label="esta semana"
          tone="text-success"
        />
      </div>

      {/* Tabs */}
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 no-scrollbar">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors",
              tab === t
                ? "border-primary bg-primary/15 text-primary"
                : "border-border bg-card text-muted-foreground",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Visão geral" && (
        <>
          {/* Badges */}
          <section>
            <h2 className="mb-3 text-lg font-bold">Conquistas & Badges</h2>
            <div className="grid grid-cols-3 gap-3">
              {badges.map((b) => {
                const Icon = iconMap[b.icon] ?? Award;
                return (
                  <Card key={b.name} className={cn("text-center", !b.earned && "opacity-40")}>
                    <span
                      className={cn(
                        "mx-auto grid size-11 place-items-center rounded-2xl",
                        b.earned
                          ? "bg-gradient-to-br from-primary to-accent text-primary-foreground"
                          : "bg-secondary text-muted-foreground",
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <p className="mt-2 text-xs font-semibold leading-tight">{b.name}</p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground">{b.desc}</p>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="mb-3 text-lg font-bold">Timeline de estudo</h2>
            <Card>
              <div className="space-y-4">
                {timeline.map((t, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span className="size-2.5 rounded-full bg-primary" />
                      {i < timeline.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
                    </div>
                    <div className="-mt-1 pb-1">
                      <p className="text-xs text-muted-foreground">
                        {t.date} · +{t.xp} XP
                      </p>
                      <p className="text-sm">{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </>
      )}

      {tab === "Estudos" && (
        <Card className="space-y-3.5">
          <h2 className="text-sm font-bold">Progresso por especialidade</h2>
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
      )}

      {tab === "Casos" && (
        <div className="grid gap-3 sm:grid-cols-2">
          {diseases.slice(0, 4).map((d) => (
            <Link key={d.id} to="/library/$diseaseId" params={{ diseaseId: d.id }}>
              <Card interactive>
                <p className="text-sm font-semibold">{d.name}</p>
                <p className="text-xs text-muted-foreground">{d.specialty} · resolvido</p>
                <ProgressBar value={d.progress} className="mt-2" />
              </Card>
            </Link>
          ))}
        </div>
      )}

      {tab === "Certificados" && (
        <Card className="flex flex-col items-center py-12 text-center">
          <Award className="size-10 text-muted-foreground/50" />
          <p className="mt-3 text-sm font-semibold">Nenhum certificado ainda</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Conclua uma especialidade para emitir seu primeiro certificado.
          </p>
        </Card>
      )}

      {tab === "Publicações" && (
        <Card className="flex flex-col items-center py-12 text-center">
          <FileText className="size-10 text-muted-foreground/50" />
          <p className="mt-3 text-sm font-semibold">Sem publicações</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Compartilhe um caso (anonimizado) na Comunidade para começar.
          </p>
        </Card>
      )}
    </div>
  );
}

function Pill({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 font-medium",
        accent ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground",
      )}
    >
      {children}
    </span>
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
      <Icon className={cn("size-5", tone)} />
      <p className="mt-2 text-lg font-bold leading-none">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </Card>
  );
}
