# MedCase Technical Foundation

Versao: 0.1  
Data: 2026-06-26

## 1. Objetivo tecnico

Criar uma base escalavel, barata no inicio e preparada para crescer. O projeto deve comecar simples o suficiente para ser publicado rapidamente, mas sem fechar portas para IA, comunidade, Hospital Virtual, banco de questoes, midia pesada e conteudo medico estruturado.

## 2. Decisao de arquitetura inicial

Recomendacao: iniciar como monorepo Next.js full-stack e separar backend apenas quando houver necessidade real.

Motivos:

- menor custo inicial;
- menos deploys para manter;
- facil integracao com Vercel;
- Prisma e Neon funcionam bem com Next.js;
- acelera o MVP;
- permite extrair um backend NestJS/Fastify depois.

Estrutura prevista:

```txt
apps/
  web/
packages/
  database/
  config/
  ui/
  medical-content/
docs/
```

Se o Lovable gerar um app unico, Codex devera primeiro organizar a base antes de crescer para monorepo.

## 3. Frontend

Tecnologias:

- Next.js App Router.
- React.
- TypeScript.
- Tailwind CSS.
- shadcn/ui.
- Framer Motion.
- lucide-react.
- Zod para validacao.
- React Hook Form para formularios.
- TanStack Query ou SWR para dados client-side quando fizer sentido.

Requisitos:

- mobile-first;
- tema escuro como padrao;
- responsivo para desktop;
- acessibilidade basica;
- componentes reutilizaveis;
- estados de loading, empty, error e offline;
- evitar telas de marketing antes da experiencia real.

## 4. Backend

Fase inicial:

- Next.js route handlers;
- server actions quando forem adequadas;
- Prisma para acesso ao banco;
- validacao com Zod.

Fase futura:

- NestJS se o dominio crescer muito;
- Fastify se quisermos API leve e performatica;
- workers para IA, geracao de conteudo, emails e revisao espacada.

## 5. Banco de dados

Banco oficial:

- PostgreSQL hospedado no Neon.

ORM:

- Prisma.

Entidades iniciais:

- User.
- Profile.
- MedicalSchool.
- Specialty.
- Disease.
- DiseaseModule.
- ClinicalCase.
- CaseStep.
- CaseSession.
- Question.
- QuestionAttempt.
- Flashcard.
- FlashcardReview.
- Progress.
- XPEvent.
- Achievement.
- Badge.
- MediaAsset.
- Note.
- Highlight.
- Group.
- Post.
- Comment.
- Follow.
- AiSession.

## 6. Arquivos e midia

Cloudinary sera usado para:

- foto de perfil;
- imagens anatomicas;
- imagens de doencas;
- videos educacionais;
- arquivos de conteudo;
- imagens de casos;
- possiveis exames simulados.

Regra: nunca armazenar arquivos pesados diretamente no banco.

## 7. Autenticacao

Candidatos:

- Better Auth;
- Auth.js.

Decisao posterior:

- Better Auth tende a ser interessante para produto moderno full-stack.
- Auth.js tem ecossistema amplo e padroes conhecidos.

Requisitos:

- email e senha;
- magic link futuro;
- login social futuro;
- sessao persistente;
- roles;
- perfil medico com CRM;
- permissoes para admin/editor/moderador.

## 8. Busca

Inicial:

- PostgreSQL Full Text Search.
- indices por nome, sinonimos, sintomas, epominimos, medicamentos, exames, especialidade.

Futuro:

- Meilisearch se o volume de conteudo justificar.
- Busca semantica com embeddings quando a camada de IA estiver madura.

## 9. IA

Fornecedores possiveis:

- OpenAI API;
- outros provedores via gateway no futuro.

Agentes:

- tutor;
- paciente;
- preceptor;
- examinador;
- radiologista;
- patologista;
- anatomista;
- farmacologista.

Controles necessarios:

- prompt templates versionados;
- logs de sessao;
- limites por usuario;
- controle de custo;
- disclaimers educacionais;
- revisao humana para conteudo persistente.

## 10. Deploy

GitHub:

- repositorio principal;
- branch `main`;
- branches `codex/*` para trabalho assistido.

Vercel:

- frontend;
- preview deployments;
- variaveis de ambiente.

Render:

- backend dedicado quando existir;
- jobs/workers se necessario;
- o usuario ja paga Render, entao pode ser aproveitado quando houver ganho real.

Neon:

- banco Postgres;
- ambientes dev/preview/prod quando possivel.

Cloudinary:

- assets e midia.

## 11. Variaveis previstas

```txt
DATABASE_URL=
DIRECT_DATABASE_URL=
AUTH_SECRET=
AUTH_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
OPENAI_API_KEY=
SENTRY_DSN=
NEXT_PUBLIC_APP_URL=
```

## 12. Testes e qualidade

Inicial:

- TypeScript strict.
- ESLint.
- Prettier.
- testes unitarios para logica critica.
- testes de componentes principais.
- Playwright para fluxos principais.

Fluxos a verificar:

- login;
- criar perfil;
- abrir dashboard;
- estudar doenca;
- iniciar caso;
- responder questao;
- revisar flashcard;
- acompanhar progresso.

## 13. LGPD e privacidade

Cuidados:

- consentimento para dados de perfil;
- controle de perfil publico/privado;
- anonimização obrigatoria de casos reais;
- direito de exclusao;
- logs sem dados sensiveis desnecessarios;
- politicas claras para uso de IA.

