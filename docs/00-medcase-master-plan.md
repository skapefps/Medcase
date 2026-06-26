# MedCase Master Plan

Versao: 0.1  
Data: 2026-06-26  
Status: Fundacao do projeto

## 1. Ideia central

MedCase sera uma plataforma de estudos medicos para estudantes de medicina, internos, residentes e medicos. O objetivo nao e criar apenas uma biblioteca de resumos, mas uma experiencia completa de aprendizado clinico.

O usuario deve abrir o celular e conseguir:

- estudar uma doenca com profundidade;
- resolver questoes;
- revisar flashcards;
- investigar casos clinicos;
- acompanhar progresso;
- participar de grupos;
- consultar anatomia, semiologia, exames, farmacologia e diretrizes;
- treinar anamnese, exame fisico, SOAP, prescricao e raciocinio diagnostico;
- receber feedback de uma IA tutora/preceptora.

Referencia conceitual: Duolingo + Dr. House + Amboss + Osmosis + Anki + atlas anatomico + simulador clinico.

## 2. Diferencial

O diferencial nao e "estudar medicina". E viver a medicina.

O centro do produto sera o Hospital Virtual. O usuario cria um perfil como estudante, interno, residente ou medico. A plataforma entrega pacientes em cenario de ambulatory, enfermaria, pronto-socorro, UTI, centro cirurgico, pediatria, obstetricia e trauma. O usuario coleta historia, escolhe perguntas, faz exame fisico, solicita exames, interpreta resultados, formula hipoteses, prescreve condutas e acompanha evolucao.

Ao final, uma IA preceptora explica:

- acertos;
- erros;
- exames desnecessarios;
- diagnosticos perdidos;
- riscos de conduta;
- fisiopatologia envolvida;
- conduta ideal;
- pontos de prova e residencia.

## 3. Publico-alvo

- Estudantes de medicina do primeiro periodo ao internato.
- Estudantes no ciclo clinico, com foco inicial em quem esta por volta do quinto periodo.
- Residentes.
- Medicos que queiram revisar, consultar, criar casos e acompanhar atualizacoes.
- Grupos de estudo, ligas academicas, faculdades e comunidades medicas.

## 4. Principios de produto

- Mobile-first: o celular e a plataforma principal.
- App-first na experiencia: mesmo quando rodar como site, deve parecer e se comportar como aplicativo.
- Desktop acessivel: quem estuda no computador deve ter uma experiencia completa, com layout adaptado para tela grande.
- Profundidade tecnica: termos medicos, fisiopatologia, semiologia e raciocinio clinico nao devem ser removidos.
- Diversao pela interacao, nao pela infantilizacao.
- Conteudo em niveis: Basico, Faculdade, Residencia e Especialista.
- Cada sintoma deve ser explicado pelo mecanismo.
- Cada exame deve ser justificado pelo raciocinio.
- Cada alternativa de questao deve ter explicacao profunda.
- O erro deve ensinar.
- A IA deve perguntar e orientar, nao apenas entregar respostas.
- O produto deve ser bonito, rapido, responsivo e confiavel.

## 5. Estetica e experiencia

Inspiracoes visuais:

- Apple;
- Linear;
- Notion;
- Raycast;
- Arc Browser.

Direcao visual:

- moderno;
- minimalista;
- escuro;
- elegante;
- profissional;
- fluido;
- com microanimacoes;
- sem parecer infantil;
- com densidade suficiente para medicina;
- com navegacao intuitiva em celular.
- com experiencia instalavel no iPhone via PWA e, futuramente, app empacotado.

### 5.1 Papel do Lovable

Lovable sera usado apenas como acelerador de layout inicial e referencia visual do MVP. Ele nao e a fonte de verdade do produto, da arquitetura, das regras de negocio, da profundidade medica, da identidade visual final ou da experiencia completa.

Qualquer codigo, tela, componente, texto, marca, logo, fluxo ou decisao criada pelo Lovable devera ser revisada pelo Codex e reorganizada conforme:

- este plano mestre;
- o contexto original da conversa;
- as decisoes tomadas entre usuario e Codex;
- a arquitetura tecnica definida no repositorio;
- a identidade visual propria do MedCase.

Se o Lovable omitir funcionalidades, simplificar conteudo medico, adicionar marca propria, criar componentes rasos ou fugir do conceito de Hospital Virtual, Codex devera corrigir e completar. O objetivo e aproveitar velocidade visual sem terceirizar a direcao do produto.

### 5.2 Identidade visual propria

MedCase precisa de marca propria, incluindo:

- logo;
- icone/app icon;
- favicon;
- paleta de cores;
- tipografia;
- grid e espacamento;
- linguagem visual de cards, modais, abas e navegacao;
- estilo de ilustracoes e imagens medicas;
- tom de voz;
- microinteracoes;
- padrao de telas mobile e desktop.
- estrategia de icone instalavel, splash screen, favicon e app icon.

A identidade deve nascer do conceito "viver a medicina", com atmosfera clinica, investigativa, moderna e premium. Nao deve parecer app infantil, template generico, clone de Lovable ou painel medico sem personalidade.

## 6. Modulos principais

### 6.1 Autenticacao e acesso

- Login.
- Cadastro.
- Recuperacao de senha.
- Magic link.
- Login social futuro: Google, Apple, GitHub ou Microsoft.
- Sessao persistente.
- Protecao contra abuso.
- Fluxos de erro, timeout, offline e carregamento.

### 6.2 Perfil

- Foto.
- Nome.
- Universidade.
- Periodo.
- Residencia desejada.
- Especialidades favoritas.
- CRM para medicos.
- Curriculo.
- Publicacoes.
- DOI.
- Certificados.
- Horas complementares.
- Procedimentos realizados.
- Checklist de habilidades clinicas.
- XP.
- Nivel.
- Badges.
- Ranking.
- Privacidade: publico, privado ou apenas amigos.
- Timeline academica e medica.

### 6.3 Dashboard diario

- Missao do dia.
- Casos recomendados.
- Doencas em andamento.
- Flashcards para revisar.
- Questoes adaptativas.
- Sequencia de dias estudando.
- Tempo estudado.
- XP do dia.
- Progresso por especialidade.
- Erros que precisam de revisao.
- Plantao rapido.

### 6.4 Biblioteca medica

Conteudos conectados por:

- especialidade;
- sistema organico;
- sintomas;
- sindromes;
- epominimos;
- exames;
- medicamentos;
- nervos;
- arterias;
- hormonios;
- receptores;
- vias fisiologicas;
- diagnosticos diferenciais.

Especialidades e areas:

- Anatomia.
- Histologia.
- Embriologia.
- Bioquimica.
- Genetica.
- Microbiologia.
- Imunologia.
- Patologia.
- Farmacologia.
- Semiologia.
- Clinica Medica.
- Cirurgia.
- Pediatria.
- Ginecologia e Obstetricia.
- Psiquiatria.
- Neurologia.
- Cardiologia.
- Pneumologia.
- Endocrinologia.
- Nefrologia.
- Gastroenterologia.
- Hematologia.
- Infectologia.
- Reumatologia.
- Dermatologia.
- Oftalmologia.
- Otorrinolaringologia.
- Medicina Intensiva.
- Emergencia.
- Trauma.
- Medicina Legal.
- Saude Coletiva.

### 6.5 Pagina de doenca

Cada doenca deve ter:

- nome;
- imagem anatomica;
- especialidade;
- dificuldade;
- tempo medio de estudo;
- incidencia;
- urgencia;
- historia e contexto;
- fisiopatologia em niveis;
- sintomas explicados pelo mecanismo;
- semiologia;
- exame fisico;
- diagnostico e arvore de decisao;
- exames laboratoriais e de imagem;
- diagnostico diferencial;
- tratamento;
- primeira linha;
- segunda linha;
- farmacologia;
- efeitos adversos;
- contraindicacoes;
- diretrizes;
- caso clinico interativo;
- questoes;
- flashcards;
- mapa mental;
- conexoes;
- curiosidades;
- pegadinhas de prova.

### 6.6 Casos clinicos interativos

Estrutura:

- paciente chega;
- queixa principal;
- historia da doenca atual;
- antecedentes;
- medicacoes;
- historia familiar;
- historia social;
- perguntas de anamnese escolhidas pelo usuario;
- exame fisico segmentado;
- solicitacao de exames;
- resultados progressivos;
- hipoteses diagnosticas;
- conduta;
- evolucao;
- desfecho;
- feedback do preceptor.

O usuario pode:

- acertar cedo;
- errar;
- pedir exame desnecessario;
- atrasar conduta;
- perder diagnostico grave;
- criar hipotese rara;
- mudar raciocinio com novas pistas.

### 6.7 Questoes

- Questoes proprias.
- Questoes estilo faculdade.
- Questoes estilo residencia.
- Questoes adaptativas.
- Modo prova.
- Modo estudo.
- Modo "aprenda com seus erros".
- Explicacao profunda de cada alternativa.
- Filtros por especialidade, banca, dificuldade, tema e erro recorrente.

### 6.8 Flashcards e revisao espacada

- Flashcards inteligentes.
- Revisao espacada.
- Cartoes gerados por IA.
- Cartoes criados pelo usuario.
- Cartoes a partir de erros.
- Cartoes por doenca, caso, questao ou artigo.
- Metricas de memoria.

### 6.9 Hospital Virtual

Cenarios:

- emergencia;
- pronto-socorro;
- ambulatory;
- enfermaria;
- UTI;
- centro cirurgico;
- obstetricia;
- pediatria;
- trauma;
- sala vermelha;
- sala de reanimacao;
- consultorio;
- telemedicina simulada.

Modos:

- primeiro periodo;
- ciclo basico;
- ciclo clinico;
- internato;
- R1;
- R2;
- especialista;
- medico generalista.

### 6.10 IA

Agentes previstos:

- Tutor socratico.
- Paciente simulado.
- Professor.
- Preceptor.
- Banca examinadora.
- Radiologista.
- Patologista.
- Anatomista.
- Farmacologista.
- Cirurgiao.
- Intensivista.
- Pediatra.
- Obstetra.

Regras da IA:

- nao dar apenas a resposta quando o objetivo for aprendizado;
- perguntar antes de concluir;
- explicar raciocinio;
- interpretar exames;
- simular anamnese;
- revisar condutas;
- apontar incertezas;
- citar quando algo depende de diretriz atual;
- diferenciar estudo de orientacao medica real.

### 6.11 Comunidade

- Feed medico.
- Seguir estudantes e medicos.
- Grupos por faculdade.
- Grupos por especialidade.
- Clubes de estudo.
- Discussao de casos com anonimização obrigatoria.
- Comentarios.
- Curtidas.
- Salvamentos.
- Compartilhamento de progresso.
- Ranking pessoal e opcionalmente social.
- Moderacao e denuncia.

### 6.12 Biblioteca multimidia

- Fotos.
- Videos.
- Artigos.
- Guidelines.
- Leituras comentadas.
- Radiografias.
- Tomografias.
- Ressonancias.
- Ultrassons.
- Lâminas de histologia.
- Patologia macroscopica e microscopica.
- ECG.
- Espirometria.
- Gasometria arterial.
- Sons cardiacos.
- Sons pulmonares.
- Ausculta simulada.

### 6.13 Ferramentas clinicas simuladas

- Prontuario simulado.
- SOAP.
- Evolucao medica.
- Prescricao simulada.
- Receituario de treinamento.
- Solicitacao de exames.
- Interacoes medicamentosas.
- Calculadora de doses.
- Farmacologia interativa.
- Checklist de OSCE.
- Checklist de habilidades.
- Calendario academico.
- Rodizios.
- Plantões.
- Diario clinico anonimizado.

### 6.14 Escalas, codigos e terminologias

- Wells.
- CHA2DS2-VASc.
- Glasgow.
- CURB-65.
- MELD.
- Child-Pugh.
- SOFA.
- APACHE II.
- CID.
- CIAP-2.
- SNOMED CT.
- LOINC.

## 7. Gamificacao

- XP.
- Niveis.
- Sequencia de estudo.
- Badges.
- Conquistas.
- Ranking pessoal.
- Desafios semanais.
- Eventos.
- Casos secretos.
- Doencas raras desbloqueaveis.
- Especialidades desbloqueaveis.
- Procedimentos desbloqueaveis.
- Hospitais desbloqueaveis.
- Feedback narrativo de desempenho.

## 8. Stack tecnica oficial inicial

Frontend:

- Next.js;
- React;
- TypeScript;
- Tailwind CSS;
- shadcn/ui;
- Framer Motion;
- lucide-react;
- TanStack Query ou SWR quando necessario.
- PWA com manifest, icons, theme color, service worker e suporte a Add to Home Screen.
- Preparacao futura para Capacitor se decidirmos publicar app iOS/Android.

Backend:

- Inicialmente, API routes/server actions do Next.js se o MVP permitir.
- Futuramente, backend separado em NestJS ou Fastify quando houver necessidade de dominio complexo, filas, workers, IA e integracoes.

Banco:

- PostgreSQL;
- Prisma ORM;
- Neon.

Arquivos:

- Cloudinary para imagens, videos e arquivos de usuario.

Deploy:

- Vercel para frontend.
- Render para backend dedicado quando necessario.

Busca:

- PostgreSQL Full Text Search no inicio.
- Meilisearch no futuro se o volume justificar.

Cache:

- Upstash Redis futuramente.

Observabilidade:

- Sentry.
- Logs estruturados.
- Umami ou Vercel Analytics.

Pagamentos futuros:

- Stripe.
- Mercado Pago.

## 9. Ordem profissional de execucao

### Fase 0: Fundacao documental

Objetivo: nao perder contexto e transformar a ideia em material implementavel.

Entregas:

- README.
- Contexto original preservado.
- Plano mestre.
- Prompt Lovable.
- Arquitetura inicial.
- Backlog por fases.
- Lista de APIs e entidades.

### Fase 1: MVP visual com Lovable

Objetivo: gerar base navegavel e bonita.

Escopo:

- landing ou entrada direta no app;
- login;
- cadastro;
- dashboard;
- perfil;
- biblioteca de doencas;
- pagina de doenca;
- caso clinico interativo;
- questoes;
- flashcards;
- comunidade inicial;
- tema escuro;
- responsividade mobile-first.

### Fase 2: Codex organiza e endurece o codigo

Objetivo: transformar output do Lovable em projeto profissional.

Entregas:

- arquitetura de pastas;
- componentes reutilizaveis;
- rotas;
- design system;
- lint;
- formatacao;
- testes iniciais;
- dados mockados organizados;
- README tecnico.
- estrutura PWA inicial;
- app icon e favicon proprios;
- remocao de qualquer branding do Lovable.

### Fase 3: Banco e autenticacao

Entregas:

- Neon;
- Prisma;
- schema inicial;
- auth;
- perfis;
- progresso;
- doencas;
- casos;
- questoes;
- flashcards;
- seed.

### Fase 4: Deploy

Entregas:

- GitHub;
- Vercel;
- Render se houver backend separado;
- variaveis de ambiente;
- Cloudinary;
- pipeline de build;
- ambientes preview e production.
- instalacao como PWA no iPhone para testes reais.

### Fase 5: IA e simulacoes

Entregas:

- tutor socratico;
- paciente simulado;
- preceptor;
- interpretador de caso;
- logs de sessoes;
- limites de uso;
- seguranca;
- custos monitorados.

### Fase 6: App iOS/Android

Objetivo: transformar a experiencia web em app instalavel com caminho profissional.

Ordem:

1. validar primeiro como PWA no iPhone;
2. ajustar navegacao, gestos, safe areas, teclado, offline parcial e performance;
3. empacotar com Capacitor se fizer sentido;
4. testar localmente no iPhone com Xcode;
5. distribuir por TestFlight se houver conta Apple Developer;
6. avaliar publicacao na App Store depois que produto e conteudo estiverem maduros.

## 10. APIs e dominios que o projeto devera ter

### Produto e usuarios

- Auth API.
- Users API.
- Profiles API.
- Settings API.
- Privacy API.
- Follows API.
- Progress API.
- XP API.
- Achievements API.

### Conteudo medico

- Diseases API.
- Specialties API.
- Topics API.
- Lessons API.
- Media API.
- Articles API.
- Guidelines API.
- References API.
- Search API.

### Aprendizado

- Clinical Cases API.
- Case Sessions API.
- Questions API.
- Attempts API.
- Flashcards API.
- Reviews API.
- Notes API.
- Highlights API.
- Mind Maps API.

### Simulacao clinica

- Virtual Hospital API.
- Patient Simulation API.
- Orders API.
- Lab Results API.
- Imaging Results API.
- Prescriptions API.
- SOAP Notes API.
- Differential Diagnosis API.

### Comunidade

- Feed API.
- Posts API.
- Comments API.
- Reactions API.
- Groups API.
- Study Clubs API.
- Reports API.
- Moderation API.

### IA

- Tutor Agent API.
- Patient Agent API.
- Preceptor Agent API.
- Examiner Agent API.
- Radiology Agent API.
- Pathology Agent API.
- Prompt Templates API.
- AI Session Logs API.

## 11. Regras de seguranca e etica

- O produto e educacional e nao substitui atendimento medico.
- Discussao de casos reais deve exigir anonimização.
- Dados sensiveis devem seguir LGPD.
- Conteudo gerado por IA deve ser revisado e marcado como assistido por IA.
- Condutas clinicas devem indicar necessidade de diretrizes atualizadas.
- Uploads de imagens devem ter termos e controles de privacidade.
- Perfis publicos devem ser configuraveis.

## 12. O que nao pode ser esquecido

- O usuario aprende melhor por investigacao.
- A profundidade deve ser de faculdade/residencia.
- O produto deve ser divertido, mas nao infantil.
- O celular e a plataforma principal.
- O produto deve funcionar muito bem como site no desktop, mas a experiencia principal e de app no celular.
- A primeira rota de app sera PWA; a rota nativa futura sera Capacitor/TestFlight/App Store.
- O Hospital Virtual e o diferencial mais forte.
- O Lovable deve receber um prompt menor, focado em MVP visual.
- O Codex deve receber os documentos completos.
- A stack familiar do usuario deve ser preservada: PostgreSQL, Prisma, Neon, Cloudinary, Vercel, Render.
- Alternativas melhores podem ser usadas, desde que baratas/gratuitas e justificadas.
