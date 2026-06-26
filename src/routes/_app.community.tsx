import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, MessageSquare, ShieldAlert, Users, GraduationCap, UserPlus } from "lucide-react";
import { communityFeed, studyClubs } from "@/lib/mock-data";
import { Card, PageHeader } from "@/components/medcase/atoms";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/community")({
  head: () => ({
    meta: [
      { title: "Comunidade · MedCase" },
      {
        name: "description",
        content: "Feed médico, clubes de estudo e discussão de casos com anonimização obrigatória.",
      },
    ],
  }),
  component: CommunityPage,
});

type Tab = "feed" | "clubes";

function CommunityPage() {
  const [tab, setTab] = useState<Tab>("feed");
  const [liked, setLiked] = useState<string[]>([]);

  return (
    <div className="space-y-5">
      <PageHeader title="Comunidade" subtitle="Aprenda junto com estudantes e médicos" />

      {/* Anonymization notice */}
      <div className="flex items-start gap-3 rounded-2xl border border-warning/30 bg-warning/10 p-4">
        <ShieldAlert className="size-5 shrink-0 text-warning" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Anonimização obrigatória.</span> Nunca
          compartilhe nome, documento, imagem identificável ou dados que permitam reconhecer o
          paciente.
        </p>
      </div>

      <div className="flex rounded-xl bg-secondary/60 p-1">
        {(["feed", "clubes"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "flex-1 rounded-lg py-2 text-sm font-semibold capitalize transition-colors",
              tab === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground",
            )}
          >
            {t === "feed" ? "Feed médico" : "Clubes & Grupos"}
          </button>
        ))}
      </div>

      {tab === "feed" && (
        <div className="space-y-3">
          {communityFeed.map((p) => {
            const isLiked = liked.includes(p.id);
            return (
              <Card key={p.id}>
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
                    {p.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{p.author}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {p.role} · {p.time}
                    </p>
                  </div>
                  <button className="flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium text-muted-foreground">
                    <UserPlus className="size-3.5" /> Seguir
                  </button>
                </div>

                <p className="mt-3 text-sm leading-relaxed">{p.text}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                  <button
                    onClick={() =>
                      setLiked((l) => (isLiked ? l.filter((x) => x !== p.id) : [...l, p.id]))
                    }
                    className={cn("flex items-center gap-1.5", isLiked && "text-destructive")}
                  >
                    <Heart className={cn("size-4", isLiked && "fill-current")} />
                    {p.likes + (isLiked ? 1 : 0)}
                  </button>
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="size-4" /> {p.comments}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {tab === "clubes" && (
        <div className="space-y-3">
          {studyClubs.map((c) => (
            <Card key={c.name} interactive className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                {c.specialty === "Faculdade" ? (
                  <GraduationCap className="size-5" />
                ) : (
                  <Users className="size-5" />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{c.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {c.members.toLocaleString("pt-BR")} membros · {c.specialty}
                </p>
              </div>
              <button className="shrink-0 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                Entrar
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
