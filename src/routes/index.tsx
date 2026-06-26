import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity,
  Mail,
  Lock,
  User,
  ArrowRight,
  Stethoscope,
  Brain,
  HeartPulse,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entrar · MedCase" },
      {
        name: "description",
        content: "Acesse o MedCase e aprenda medicina vivendo casos clínicos.",
      },
    ],
  }),
  component: LoginPage,
});

type Mode = "login" | "signup" | "recover";

function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("login");

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Ambient hero glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
        {/* Brand */}
        <div className="animate-rise text-center">
          <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground glow-ring">
            <Activity className="size-8" />
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight">MedCase</h1>
          <p className="mt-2 text-base text-muted-foreground">
            Aprenda medicina vivendo casos clínicos
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground/70">
            <Stethoscope className="size-4" />
            <Brain className="size-4" />
            <HeartPulse className="size-4" />
          </div>
        </div>

        {/* Card */}
        <div
          className="surface mt-8 animate-rise rounded-3xl p-6"
          style={{ animationDelay: "60ms" }}
        >
          <div className="mb-5 flex rounded-xl bg-secondary/60 p-1">
            <Tab active={mode === "login"} onClick={() => setMode("login")}>
              Entrar
            </Tab>
            <Tab active={mode === "signup"} onClick={() => setMode("signup")}>
              Cadastrar
            </Tab>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/dashboard" });
            }}
            className="space-y-3"
          >
            {mode === "signup" && <Field icon={User} placeholder="Nome completo" type="text" />}
            <Field icon={Mail} placeholder="E-mail acadêmico" type="email" />
            {mode !== "recover" && <Field icon={Lock} placeholder="Senha" type="password" />}

            {mode === "login" && (
              <button
                type="button"
                onClick={() => setMode("recover")}
                className="block w-full text-right text-xs font-medium text-primary"
              >
                Esqueceu a senha?
              </button>
            )}

            <button
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent py-3 text-sm font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
            >
              {mode === "login" && "Entrar no Hospital Virtual"}
              {mode === "signup" && "Criar minha conta"}
              {mode === "recover" && "Enviar link de recuperação"}
              <ArrowRight className="size-4" />
            </button>
          </form>

          {mode === "recover" && (
            <button
              onClick={() => setMode("login")}
              className="mt-4 w-full text-center text-xs font-medium text-muted-foreground"
            >
              ← Voltar para o login
            </button>
          )}

          {mode !== "recover" && (
            <>
              <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                ou continue com
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["Google", "Apple", "Microsoft"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => navigate({ to: "/dashboard" })}
                    className="rounded-xl border border-border bg-card py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Ao continuar, você concorda com os Termos e a Política de Privacidade.
        </p>
        <Link to="/dashboard" className="mt-2 text-center text-xs font-medium text-primary">
          Explorar como visitante →
        </Link>
      </div>
    </div>
  );
}

function Tab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex-1 rounded-lg py-2 text-sm font-semibold transition-colors",
        active ? "bg-card text-foreground shadow-sm" : "text-muted-foreground",
      )}
    >
      {children}
    </button>
  );
}

function Field({
  icon: Icon,
  ...props
}: { icon: typeof Mail } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 focus-within:border-primary/60 focus-within:glow-ring">
      <Icon className="size-4 shrink-0 text-muted-foreground" />
      <input
        {...props}
        className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
      />
    </div>
  );
}
