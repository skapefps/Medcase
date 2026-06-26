# MedCase

MedCase e uma plataforma de estudos medicos mobile-first para aprender medicina por raciocinio clinico, investigacao diagnostica, casos interativos e profundidade tecnica de faculdade/residencia.

O produto combina referencias como Duolingo, Dr. House, Amboss, Osmosis, Anki, atlas anatomico, simulador clinico e comunidade medica, mas com identidade propria: o estudante nao apenas "le resumo"; ele vive a medicina em um Hospital Virtual.

## Estado atual

Este repositorio esta na fase de fundacao:

- preservar o contexto da conversa original;
- documentar produto, UX, stack, infraestrutura e roadmap;
- preparar um prompt objetivo para o Lovable gerar o MVP visual;
- preparar a arquitetura para Codex implementar, testar, publicar e evoluir.

Branch `codex/import-lovable-core`: importa o primeiro prototipo visual gerado pelo Lovable em `skapefps/medcase-core`, remove dependencias/telemetria do Lovable e transforma o resultado em uma base local verificavel. Esse prototipo e referencia visual inicial, nao a fonte de verdade do produto.

## Rodando o prototipo visual

```bash
npm install
npm run dev
```

Depois abra:

```txt
http://127.0.0.1:3000/
```

Comandos de verificacao:

```bash
npm run build
npm run lint
```

## Documentos principais

- [Plano mestre](docs/00-medcase-master-plan.md)
- [Arquitetura tecnica inicial](docs/architecture/technical-foundation.md)
- [Prompt do Lovable](docs/prompts/lovable-mvp-prompt.md)
- [Contexto original resumido](docs/context/MEDCASE_CONTEXT.original.md)
- [Conversa original exportada](docs/context/resumo-gpt-conversa.original.txt)

## Stack base planejada

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

## Stack do prototipo importado

- TanStack Start/Router.
- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- shadcn/ui/Radix.
- lucide-react.

Essa base pode ser mantida temporariamente para acelerar validacao visual ou migrada para Next.js quando iniciarmos a arquitetura full-stack definitiva.

## Principio central

Nao simplificar a medicina. Simplificar o caminho ate a profundidade.
