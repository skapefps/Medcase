import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { Difficulty, Urgency } from "@/lib/mock-data";

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3 animate-rise">
      <div className="min-w-0">
        <h1 className="truncate text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </header>
  );
}

export function DifficultyBadge({ level }: { level: Difficulty }) {
  const map: Record<Difficulty, string> = {
    Básico: "bg-success/15 text-success",
    Faculdade: "bg-primary/15 text-primary",
    Residência: "bg-accent/15 text-accent",
  };
  return (
    <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-semibold", map[level])}>
      {level}
    </span>
  );
}

export function UrgencyBadge({ level }: { level: Urgency }) {
  const map: Record<Urgency, string> = {
    Eletivo: "bg-muted text-muted-foreground",
    Urgente: "bg-warning/15 text-warning",
    Emergência: "bg-destructive/15 text-destructive",
  };
  return (
    <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-semibold", map[level])}>
      {level}
    </span>
  );
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("h-1.5 w-full overflow-hidden rounded-full bg-secondary", className)}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export function DidYouKnow({ title, text, tag }: { title: string; text: string; tag: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-4">
      <div className="mb-2 flex items-center gap-2">
        <span className="grid size-7 place-items-center rounded-lg bg-primary/20 text-primary">
          <Sparkles className="size-4" />
        </span>
        <span className="text-sm font-semibold">{title}</span>
        <span className="ml-auto rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          {tag}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

export function Card({
  children,
  className,
  interactive,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "surface rounded-2xl p-4",
        interactive && "transition-all hover:-translate-y-0.5 hover:glow-ring",
        className,
      )}
    >
      {children}
    </div>
  );
}
