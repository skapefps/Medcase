import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Library,
  Stethoscope,
  ListChecks,
  Layers,
  Users,
  User,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import type { ReactNode } from "react";

interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
  primary?: boolean;
}

const navItems: NavItem[] = [
  { to: "/dashboard", label: "Início", icon: Home },
  { to: "/library", label: "Biblioteca", icon: Library },
  { to: "/plantao", label: "Plantão", icon: Stethoscope, primary: true },
  { to: "/questions", label: "Questões", icon: ListChecks },
  { to: "/profile", label: "Perfil", icon: User },
];

const sideExtra: NavItem[] = [
  { to: "/flashcards", label: "Flashcards", icon: Layers },
  { to: "/community", label: "Comunidade", icon: Users },
];

function useActive(to: string) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (to === "/dashboard") return pathname === "/dashboard";
  return pathname.startsWith(to);
}

function SideLink({ item }: { item: NavItem }) {
  const active = useActive(item.to);
  const Icon = item.icon;
  return (
    <Link
      to={item.to}
      className={cn(
        "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
        active
          ? "bg-secondary text-foreground"
          : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
      )}
    >
      <Icon className={cn("size-[18px] transition-colors", active && "text-primary")} />
      {item.label}
    </Link>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-background">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-sidebar px-4 py-6 lg:flex">
        <Link to="/dashboard" className="flex items-center gap-2.5 px-2">
          <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground glow-ring">
            <Activity className="size-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">MedCase</span>
        </Link>

        <nav className="mt-8 flex flex-1 flex-col gap-1">
          <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            Hospital Virtual
          </p>
          {navItems.map((i) => (
            <SideLink key={i.to} item={i} />
          ))}
          <p className="px-3 pb-1 pt-5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            Estudo
          </p>
          {sideExtra.map((i) => (
            <SideLink key={i.to} item={i} />
          ))}
        </nav>

        <Link
          to="/profile"
          className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5"
        >
          <div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
            H
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Dra. Helena</p>
            <p className="truncate text-xs text-muted-foreground">Nível 12 · R2</p>
          </div>
        </Link>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        <main className="mx-auto w-full max-w-5xl px-4 pb-28 pt-5 sm:px-6 lg:pb-12 lg:pt-8">
          {children}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/85 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-md items-end justify-around px-2 pb-[calc(env(safe-area-inset-bottom)+6px)] pt-2">
          {navItems.map((item) => (
            <BottomLink key={item.to} item={item} />
          ))}
        </div>
      </nav>

      <Toaster position="top-center" />
    </div>
  );
}

function BottomLink({ item }: { item: NavItem }) {
  const active = useActive(item.to);
  const Icon = item.icon;

  if (item.primary) {
    return (
      <Link to={item.to} className="flex flex-col items-center gap-1 px-2">
        <span
          className={cn(
            "grid size-12 -translate-y-3 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30 transition-transform active:scale-95",
            active && "pulse-ring",
          )}
        >
          <Icon className="size-6" />
        </span>
        <span className="-mt-2 text-[10px] font-semibold text-foreground">{item.label}</span>
      </Link>
    );
  }

  return (
    <Link
      to={item.to}
      className={cn(
        "flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 transition-colors",
        active ? "text-primary" : "text-muted-foreground",
      )}
    >
      <Icon className="size-[22px]" />
      <span className="text-[10px] font-medium">{item.label}</span>
    </Link>
  );
}
