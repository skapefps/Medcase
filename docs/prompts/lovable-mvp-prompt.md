# Prompt para Lovable: MedCase MVP Visual

Use este prompt no Lovable para gerar a primeira base visual do MedCase. O objetivo e criar uma experiencia navegavel, bonita e mobile-first. Nao tente construir o backend completo ainda.

---

Quero criar um app/site chamado MedCase.

MedCase e uma plataforma de estudos medicos para estudantes de medicina, internos, residentes e medicos. Nao quero um site de resumos simples. Quero uma experiencia profunda, intuitiva e divertida, onde o estudante aprende medicina por raciocinio clinico, casos interativos, questoes, flashcards, curiosidades e progresso.

O produto deve parecer uma mistura de Duolingo, Dr. House, Amboss, Osmosis, Anki e atlas anatomico, mas com uma identidade propria. O diferencial e fazer o usuario sentir que esta vivendo a medicina em um Hospital Virtual.

## Estilo visual

- Moderno.
- Minimalista.
- Profissional.
- Escuro.
- Fluido.
- Mobile-first.
- Inspirado em Apple, Linear, Notion, Raycast e Arc Browser.
- Nada infantil.
- Usar microanimacoes elegantes.
- Usar cards compactos, navegacao clara e muita atencao a hierarquia visual.
- A interface deve ser bonita no celular, pois o celular sera a plataforma principal.

## Stack desejada

- React.
- TypeScript.
- Tailwind CSS.
- Componentes reutilizaveis.
- Preparado para Next.js.
- Preparado para integracao futura com PostgreSQL, Prisma, Neon, Cloudinary, Vercel e Render.

## Telas obrigatorias do MVP

### 1. Entrada/Login

Criar uma tela de acesso com:

- nome MedCase em destaque;
- frase curta: "Aprenda medicina vivendo casos clinicos";
- login;
- cadastro;
- recuperar senha;
- login social visual futuro;
- estado mobile perfeito.

### 2. Dashboard

Esta deve ser a tela principal apos login, nao uma landing page generica.

Mostrar:

- saudacao do usuario;
- sequencia de dias estudando;
- XP;
- nivel;
- tempo estudado;
- missao do dia;
- casos recomendados;
- revisao de flashcards;
- questoes pendentes;
- progresso por especialidade;
- botao para entrar no "Plantao";
- cards para Doencas, Casos Clinicos, Questoes, Flashcards, Biblioteca e Comunidade.

### 3. Perfil

Criar perfil com:

- foto;
- nome;
- universidade;
- periodo;
- residencia desejada;
- CRM opcional para medicos;
- especialidades favoritas;
- XP;
- badges;
- conquistas;
- ranking pessoal;
- timeline de estudo;
- progresso publico/privado;
- abas: Visao geral, Estudos, Casos, Certificados, Publicacoes.

### 4. Biblioteca de doencas

Criar tela com busca poderosa por:

- doenca;
- sintoma;
- exame;
- sindrome;
- epônimo;
- medicamento;
- hormonio;
- nervo;
- arteria;
- especialidade.

Mostrar cards de doencas com:

- nome;
- especialidade;
- dificuldade;
- urgencia;
- tempo medio;
- progresso;
- tags.

### 5. Pagina de doenca

Criar exemplo com "Esclerose Multipla" ou "Sindrome de Lambert-Eaton".

A pagina deve ter:

- imagem/area visual anatomica;
- nome;
- especialidade;
- dificuldade;
- incidencia;
- urgencia;
- tempo medio;
- niveis de profundidade: Basico, Faculdade, Residencia;
- modulos:
  - Historia;
  - Fisiopatologia;
  - Sintomas explicados;
  - Semiologia;
  - Diagnostico;
  - Exames;
  - Diagnostico diferencial;
  - Tratamento;
  - Caso clinico;
  - Questoes;
  - Flashcards;
  - Mapa mental;
  - Curiosidades.

Importante: nao listar sintomas de forma rasa. A interface deve sugerir explicacao por mecanismo fisiopatologico.

### 6. Caso clinico interativo

Criar uma tela chamada Plantao.

O usuario recebe um paciente sem diagnostico.

A tela deve ter:

- paciente;
- idade;
- queixa principal;
- sinais vitais;
- historia progressiva;
- opcoes de perguntas de anamnese;
- opcoes de exame fisico;
- solicitacao de exames;
- hipoteses diagnosticas;
- feedback do preceptor;
- pontuacao;
- custo de exames;
- tempo ate diagnostico.

Exemplo de caso: paciente com fraqueza progressiva e suspeita de sindrome miastenica de Lambert-Eaton associada a cancer de pulmao de pequenas celulas.

### 7. Questoes

Criar tela de questoes com:

- modo estudo;
- modo prova;
- filtros por especialidade;
- questao estilo residencia;
- alternativas;
- explicacao profunda de cada alternativa;
- marcador de erro;
- gerar flashcard a partir do erro.

### 8. Flashcards

Criar tela com:

- revisao do dia;
- cartoes por especialidade;
- cartoes dificeis;
- revisao espacada;
- acertar/errar/facil/dificil;
- progresso de memoria.

### 9. Comunidade

Criar tela inicial de comunidade com:

- feed medico;
- clubes de estudo;
- grupos por faculdade;
- grupos por especialidade;
- seguir estudantes e medicos;
- discussao de casos com aviso de anonimizacao obrigatoria.

### 10. Curiosidades

Adicionar cards "Voce sabia?" em varias telas, com:

- historias de doencas;
- epônimos;
- casos famosos;
- pegadinhas de prova;
- mitos.

## Navegacao

Criar navegacao mobile com tabs:

- Inicio;
- Biblioteca;
- Plantao;
- Questoes;
- Perfil.

No desktop, pode haver sidebar.

## Dados de exemplo

Use dados mockados realistas de medicina. Inclua:

- Esclerose Multipla;
- Sindrome de Lambert-Eaton;
- Guillain-Barre;
- Hashimoto;
- Graves;
- Cushing;
- Addison;
- Parkinson;
- Huntington;
- Horner;
- Marfan;
- Stevens-Johnson.

## Importante

Nao transformar em landing page de marketing. A primeira experiencia deve ser o app funcionando.

Nao simplificar demais os termos medicos. A plataforma deve impressionar estudantes de medicina pelo nivel tecnico, mas continuar intuitiva.

Quero um MVP visual completo, responsivo e navegavel, preparado para depois o Codex transformar em produto real com banco de dados, autenticacao, IA e deploy.

