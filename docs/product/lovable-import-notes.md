# Lovable Import Notes

Versao: 0.1  
Data: 2026-06-26

## Origem

O Lovable gerou o prototipo visual inicial no repositorio:

```txt
https://github.com/skapefps/medcase-core
```

Esse repositorio foi usado como fonte visual para a branch:

```txt
codex/import-lovable-core
```

## Decisao

O prototipo do Lovable e um rascunho de interface. Ele nao define:

- arquitetura final;
- stack final;
- banco de dados;
- autenticacao;
- identidade visual final;
- logo;
- regras de negocio;
- profundidade medica;
- APIs;
- roadmap.

## Ajustes feitos ao importar

- Remocao de dependencia `@lovable.dev/vite-tanstack-config`.
- Remocao de telemetria/error reporting do Lovable.
- Remocao de arquivos de conexao Lovable.
- Normalizacao para npm com `package-lock.json`.
- Preservacao da documentacao oficial do MedCase.
- Validacao com build, lint e rotas locais.

## Proxima direcao

Usar o prototipo para avaliar:

- estrutura de telas;
- navegacao mobile;
- densidade visual;
- tema escuro;
- cards e componentes;
- primeira experiencia de dashboard/plantao/biblioteca.

Depois disso, Codex deve reorganizar e aprofundar tudo conforme o plano mestre do MedCase.
