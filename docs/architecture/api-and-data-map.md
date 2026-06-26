# MedCase API and Data Map

Versao: 0.1  
Data: 2026-06-26

## 1. Objetivo

Este documento lista os dominios de API e as entidades principais que devem existir quando o MVP deixar de ser apenas visual e passar a ter banco, autenticacao, progresso e conteudo persistente.

## 2. Dominios de API

### Auth

Responsavel por:

- cadastro;
- login;
- logout;
- recuperacao de acesso;
- sessao;
- providers sociais futuros;
- roles e permissoes.

Entidades:

- User;
- Account;
- Session;
- VerificationToken;
- Role;
- Permission.

### Profile

Responsavel por:

- perfil academico;
- perfil medico;
- configuracoes publicas/privadas;
- foto;
- universidade;
- periodo;
- CRM;
- residencia desejada;
- badges e conquistas visiveis.

Entidades:

- Profile;
- MedicalSchool;
- SpecialtyInterest;
- Certificate;
- Publication;
- UserPrivacySettings.

### Medical Content

Responsavel por:

- doencas;
- especialidades;
- topicos;
- modulos;
- referencias;
- midia;
- curiosidades;
- mapas mentais.

Entidades:

- Specialty;
- Topic;
- Disease;
- DiseaseModule;
- DiseaseSymptom;
- DiseaseExam;
- DiseaseTreatment;
- DifferentialDiagnosis;
- MedicalCuriosity;
- Reference;
- MediaAsset.

### Clinical Cases

Responsavel por:

- casos interativos;
- sessoes de caso;
- perguntas de anamnese;
- exame fisico;
- exames solicitados;
- resultados;
- hipoteses;
- condutas;
- desfechos.

Entidades:

- ClinicalCase;
- CasePatient;
- CaseStep;
- CaseChoice;
- CaseExam;
- CaseResult;
- CaseDiagnosis;
- CaseTreatment;
- CaseSession;
- CaseSessionEvent;
- PreceptorFeedback.

### Questions

Responsavel por:

- questoes;
- alternativas;
- tentativas;
- explicacoes;
- filtros;
- erros recorrentes.

Entidades:

- Question;
- QuestionOption;
- QuestionExplanation;
- QuestionAttempt;
- QuestionTag;
- ExamBoard;

### Flashcards

Responsavel por:

- flashcards;
- decks;
- revisao espacada;
- cartoes criados por erro;
- cartoes gerados por IA.

Entidades:

- FlashcardDeck;
- Flashcard;
- FlashcardReview;
- SpacedRepetitionState;

### Progress and Gamification

Responsavel por:

- progresso;
- XP;
- niveis;
- sequencia;
- conquistas;
- badges;
- ranking pessoal;
- missoes.

Entidades:

- Progress;
- StudySession;
- XPEvent;
- Level;
- Achievement;
- Badge;
- DailyMission;
- WeeklyChallenge;
- Streak.

### Community

Responsavel por:

- feed;
- grupos;
- clubes de estudo;
- seguidores;
- posts;
- comentarios;
- reacoes;
- moderacao.

Entidades:

- Follow;
- Group;
- StudyClub;
- Post;
- Comment;
- Reaction;
- SavedPost;
- Report;
- ModerationAction.

### AI

Responsavel por:

- tutor;
- paciente simulado;
- preceptor;
- banca;
- radiologista;
- patologista;
- anatomista;
- farmacologista;
- logs;
- limites de uso.

Entidades:

- AiAgent;
- AiPromptTemplate;
- AiSession;
- AiMessage;
- AiUsage;
- AiFeedback;

### Files and Media

Responsavel por:

- upload;
- Cloudinary;
- imagens de perfil;
- imagens medicas;
- videos;
- anexos.

Entidades:

- MediaAsset;
- UploadIntent;
- MediaUsage;

## 3. Endpoints iniciais provaveis

```txt
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/me
PATCH  /api/me/profile

GET    /api/dashboard
GET    /api/search?q=

GET    /api/diseases
GET    /api/diseases/:slug
GET    /api/diseases/:slug/modules

GET    /api/cases
POST   /api/cases/:id/session
POST   /api/case-sessions/:id/choice
POST   /api/case-sessions/:id/diagnosis

GET    /api/questions
POST   /api/questions/:id/attempt

GET    /api/flashcards/due
POST   /api/flashcards/:id/review

GET    /api/progress
GET    /api/profile/:username

GET    /api/community/feed
POST   /api/community/posts

POST   /api/ai/tutor
POST   /api/ai/patient
POST   /api/ai/preceptor
```

## 4. Primeiro schema Prisma

O primeiro schema nao deve tentar cobrir todo o sonho do produto. Ele deve cobrir:

- usuario;
- perfil;
- doenca;
- caso;
- questao;
- flashcard;
- progresso;
- midia;
- sessao de caso.

Comunidade, IA avancada, grupos e multimidia pesada devem entrar depois que o MVP estiver navegavel e testado.

