# MedCase Foundation Design

Data: 2026-06-26  
Status: Aprovado pelo usuario para execucao inicial

## Contexto

O usuario trouxe dois arquivos de contexto de uma conversa anterior:

- `MEDCASE_CONTEXT.md`
- `resumo-gpt-conversa.txt`

Esses arquivos descrevem a evolucao de uma ideia que comecou com estudos de semiologia, raciocinio diagnostico, epônimos e casos medicos, e se transformou no conceito de uma plataforma chamada MedCase.

O repositorio `/Users/arthurroque/Documents/Medcase` estava vazio, com apenas `.git` e sem commits. Portanto, a primeira necessidade nao era implementar codigo, mas criar uma fundacao documental para impedir perda de contexto.

## Decisao principal

Comecar pela documentacao oficial do projeto, antes de Lovable, infraestrutura ou deploy.

## Alternativas consideradas

### 1. Comecar pelo Lovable

Vantagem: gera rapidamente uma interface visual.

Risco: pode criar uma base bonita, mas rasa, sem respeitar Hospital Virtual, IA, profundidade medica, comunidade, arquitetura e stack planejada.

### 2. Comecar direto pelo codigo

Vantagem: da sensacao imediata de progresso.

Risco: cria divida de produto e arquitetura antes de definir escopo, entidades, modulos e ordem de execucao.

### 3. Comecar pela fundacao documental

Vantagem: preserva contexto, define ordem profissional, cria material para Lovable e Codex, e prepara infraestrutura com menos retrabalho.

Risco: adia um pouco a primeira tela visual.

Recomendacao escolhida: comecar pela fundacao documental.

## Escopo desta primeira etapa

Criar:

- README do projeto;
- `.gitignore`;
- copia dos arquivos originais de contexto;
- plano mestre do produto;
- arquitetura tecnica inicial;
- prompt Lovable para MVP visual;
- spec desta decisao.

## Fora de escopo nesta etapa

- Criar contas GitHub, Vercel, Render, Cloudinary ou Neon.
- Implementar app.
- Rodar Lovable.
- Criar schema Prisma.
- Definir UI pixel-perfect.
- Publicar deploy.

Essas etapas devem vir depois que a fundacao estiver salva.

## Proxima etapa recomendada

Depois desta fundacao:

1. revisar os documentos;
2. gerar ou colar o prompt no Lovable;
3. importar o resultado no repo;
4. Codex organizar o codigo;
5. configurar banco, autenticacao e deploy.

