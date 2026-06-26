# MedCase

MedCase e uma plataforma de estudos medicos mobile-first para aprender medicina por raciocinio clinico, investigacao diagnostica, casos interativos e profundidade tecnica de faculdade/residencia.

O produto combina referencias como Duolingo, Dr. House, Amboss, Osmosis, Anki, atlas anatomico, simulador clinico e comunidade medica, mas com identidade propria: o estudante nao apenas "le resumo"; ele vive a medicina em um Hospital Virtual.

## Estado atual

Este repositorio esta na fase de fundacao:

- preservar o contexto da conversa original;
- documentar produto, UX, stack, infraestrutura e roadmap;
- preparar um prompt objetivo para o Lovable gerar o MVP visual;
- preparar a arquitetura para Codex implementar, testar, publicar e evoluir.

## Documentos principais

- [Plano mestre](docs/00-medcase-master-plan.md)
- [Arquitetura tecnica inicial](docs/architecture/technical-foundation.md)
- [Prompt do Lovable](docs/prompts/lovable-mvp-prompt.md)
- [Contexto original resumido](docs/context/MEDCASE_CONTEXT.original.md)
- [Conversa original exportada](docs/context/resumo-gpt-conversa.original.txt)

## Stack base

- Frontend: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion.
- Banco: PostgreSQL com Prisma ORM.
- Hospedagem do banco: Neon.
- Arquivos e midia: Cloudinary.
- Deploy frontend: Vercel.
- Backend/API dedicada, se necessario: Render.
- Autenticacao: Better Auth ou Auth.js, decisao final apos o MVP visual.
- Cache futuro: Upstash Redis.
- Busca inicial: PostgreSQL Full Text Search.
- Busca futura: Meilisearch.
- Observabilidade: Sentry.
- Analytics: Umami ou Vercel Analytics, conforme custo e privacidade.

## Principio central

Nao simplificar a medicina. Simplificar o caminho ate a profundidade.

