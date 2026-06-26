# MedCase Infrastructure Checklist

Versao: 0.1  
Data: 2026-06-26

## 1. Objetivo

Checklist para criar e conectar GitHub, Vercel, Render, Neon, Cloudinary e dominio sem esquecer variaveis, ambientes e ordem de execucao.

## 2. Ordem recomendada

### Passo 1: Repositorio GitHub

- Criar repo `medcase` ou nome definitivo.
- Conectar o repositorio local.
- Fazer push da documentacao inicial.
- Proteger `main` futuramente.
- Usar branches `codex/*` para desenvolvimento.

### Passo 2: Vercel

- Criar projeto conectado ao GitHub.
- Definir framework como Next.js.
- Configurar variaveis de ambiente.
- Ativar preview deployments.
- Apontar dominio quando o app inicial estiver estavel.

### Passo 3: Neon

- Criar projeto PostgreSQL.
- Criar banco `medcase`.
- Separar ambientes se possivel:
  - development;
  - preview;
  - production.
- Copiar `DATABASE_URL`.
- Copiar `DIRECT_DATABASE_URL` se Prisma precisar.

### Passo 4: Cloudinary

- Criar cloud/app para MedCase.
- Configurar preset seguro.
- Guardar:
  - cloud name;
  - API key;
  - API secret.
- Definir pastas:
  - profiles;
  - diseases;
  - cases;
  - articles;
  - community;
  - temporary.

### Passo 5: Render

Usar apenas quando existir backend separado, worker ou job que justifique.

Possiveis usos:

- API NestJS/Fastify;
- workers de IA;
- filas;
- geracao de conteudo;
- tarefas agendadas.

### Passo 6: Dominio

- Manter dominio comprado.
- Apontar para Vercel quando o frontend estiver pronto.
- Configurar redirects:
  - apex;
  - www;
  - app subdomain se for usado.

## 3. Variaveis de ambiente

```txt
DATABASE_URL=
DIRECT_DATABASE_URL=
AUTH_SECRET=
AUTH_URL=
NEXT_PUBLIC_APP_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
OPENAI_API_KEY=
SENTRY_DSN=
```

## 4. Ambientes

### Development

- roda local;
- usa banco de desenvolvimento;
- pode usar Cloudinary pasta `dev`;
- IA com limites baixos.

### Preview

- cada PR gera preview;
- banco preview se Neon permitir;
- dados seedados;
- bom para testar Lovable/Codex antes de producao.

### Production

- dominio real;
- banco production;
- logs e alertas;
- backups;
- limites de IA e upload.

## 5. Antes do primeiro deploy

- App roda localmente.
- Build passa.
- Lint passa.
- Variaveis estao documentadas.
- README explica como rodar.
- Banco tem migrations.
- Seed inicial existe.
- Fluxos principais foram testados.

## 6. Antes de convidar usuarios

- Termos de uso basicos.
- Politica de privacidade basica.
- Aviso de uso educacional.
- Anonimizacao obrigatoria em casos reais.
- Controle de perfil publico/privado.
- Monitoramento de erro.
- Backup do banco.

