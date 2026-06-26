# MedCase Mobile and App Strategy

Versao: 0.1  
Data: 2026-06-26  
Status: Direcao inicial

## 1. Decisao principal

MedCase sera desenhado primeiro para celular. A experiencia primaria deve parecer um aplicativo, mesmo quando estiver rodando no navegador.

Ao mesmo tempo, o produto precisa funcionar bem no computador, porque muitos estudantes estudam com notebook, monitor externo, PDFs, cadernos digitais e aulas abertas ao lado.

Resumo:

- celular: experiencia principal;
- desktop: experiencia completa e produtiva;
- PWA: primeira forma de testar como app no iPhone;
- Capacitor: caminho futuro para app iOS/Android se precisarmos de app real;
- App Store/TestFlight: etapa posterior, nao primeira prioridade.

## 2. Por que PWA primeiro

PWA permite transformar o site em uma experiencia instalavel, com icone na tela inicial, manifest, tema, service worker e comportamento mais parecido com app.

Vantagens:

- custo inicial baixo;
- deploy unico no Vercel;
- funciona em celular e desktop;
- facilita testar rapido no iPhone do usuario;
- evita criar app nativo antes de validar produto;
- mantem uma base unica em Next.js.

Limitacoes:

- nem tudo que app nativo faz e possivel via navegador;
- recursos de notificacao, background, armazenamento e integracoes podem depender de suporte do iOS/Safari;
- experiencia de instalacao no iPhone ainda passa pelo fluxo de adicionar a tela de inicio;
- se quisermos App Store, TestFlight e integracoes nativas mais fortes, precisaremos empacotar depois.

## 3. Como testar no iPhone no inicio

Fase inicial:

1. publicar o site na Vercel;
2. abrir o dominio no Safari do iPhone;
3. usar "Adicionar a Tela de Inicio";
4. testar como se fosse app;
5. validar:
   - icone;
   - nome do app;
   - tela inicial;
   - navegacao inferior;
   - safe area do iPhone;
   - teclado;
   - scroll;
   - performance;
   - carregamento;
   - legibilidade;
   - gestos;
   - estados offline/parcialmente offline.

## 4. Requisitos mobile-first

Toda tela deve ser desenhada primeiro para celular:

- bottom navigation;
- botoes grandes o suficiente para toque;
- cards compactos;
- textos legiveis;
- evitar tabelas largas sem adaptacao;
- modais que funcionem em tela pequena;
- suporte a safe areas;
- loading rapido;
- cache inteligente;
- formularios confortaveis;
- fluxo curto para estudo rapido.

Exemplos:

- abrir dashboard em segundos;
- iniciar Plantao com um toque;
- revisar flashcards em fila rapida;
- responder questoes no onibus/fila/intervalo;
- consultar uma doenca antes de aula ou prova.

## 5. Requisitos desktop

Desktop nao sera secundario no sentido de qualidade, apenas nao sera a plataforma principal.

No computador, MedCase deve aproveitar:

- sidebar;
- colunas;
- paineis comparativos;
- tela dividida;
- mapas mentais maiores;
- visualizacao de exames;
- anotacoes;
- editor SOAP;
- revisao de casos longos;
- leitura de artigos;
- estudo em grupo.

## 6. Estrategia tecnica

### Fase 1: Web responsivo

- Next.js.
- Tailwind.
- shadcn/ui.
- layout mobile-first.
- desktop responsivo.

### Fase 2: PWA

- `manifest.webmanifest`;
- app name e short name;
- app icons;
- favicon proprio;
- theme color;
- background color;
- service worker;
- cache basico;
- pagina offline simples;
- metadados para iOS;
- teste real em iPhone.

### Fase 3: App empacotado

Se PWA for bom, talvez nao precisemos publicar app nativo imediatamente.

Se precisarmos de App Store, TestFlight, notificacoes mais previsiveis ou integracoes nativas, usar Capacitor:

- manter a base web;
- adicionar projeto iOS;
- testar no Xcode;
- rodar no iPhone;
- distribuir por TestFlight;
- publicar na App Store quando fizer sentido.

## 7. Identidade de app

Precisaremos criar:

- logo;
- app icon;
- favicon;
- splash screen;
- nome curto;
- cor da barra/sistema;
- imagem social/OG;
- screenshots de App Store se formos publicar.

O Lovable nao deve definir isso de forma final.

## 8. Ordem recomendada

1. Gerar MVP visual com Lovable apenas como referencia.
2. Codex reorganizar e aplicar identidade propria.
3. Implementar responsividade mobile-first.
4. Adicionar PWA.
5. Publicar na Vercel.
6. Testar no iPhone.
7. Ajustar experiencia real de uso.
8. So depois avaliar Capacitor/TestFlight/App Store.

