# Desafio Revvo QA - Automação Cypress

Projeto de automação E2E em Cypress para o Moodle sandbox, utilizando Application Actions e padrões de qualidade para testes robustos e confiáveis.

## 📋 Índice

- [Stack Tecnológica](#stack-tecnológica)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Execução dos Testes](#execução-dos-testes)
- [Relatórios Allure](#relatórios-allure)
- [CI/CD](#cicd)
- [Configurações](#configurações)

## 🚀 Stack Tecnológica

- **Framework**: Cypress 13.13.0
- **Linguagem**: JavaScript (ES6+)
- **Padrão**: Application Actions
- **Relatórios**: Allure Reports
- **Geração de Dados**: Faker.js
- **CI/CD**: GitHub Actions

## 📁 Estrutura do Projeto

```
desafio_revvo_qa/
├── cypress/
│   ├── e2e/                    # Testes E2E
│   │   ├── login.cy.js         # Testes de login e configurações
│   │   └── criar_curso.cy.js   # Testes de criação de curso
│   ├── fixtures/                # Dados de teste
│   │   └── usuario.json        # Credenciais e dados de usuário
│   ├── support/                 # Comandos customizados e configurações
│   │   ├── e2e.js              # Configuração global e imports
│   │   ├── login.js            # Comandos relacionados ao login
│   │   └── curso.js            # Comandos relacionados a cursos
│   ├── screenshots/             # Screenshots de falhas
│   └── videos/                  # Vídeos das execuções
├── allure-results/              # Resultados do Allure (gerado)
├── allure-report/               # Relatório HTML do Allure (gerado)
├── .github/
│   └── workflows/
│       └── cypress.yml         # Workflow do GitHub Actions
├── cypress.config.js           # Configuração do Cypress
└── package.json                # Dependências e scripts
```

## ✅ Pré-requisitos

- Node.js LTS (versão 18 ou superior)
- npm ou yarn
- Git

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositório>
cd desafio_revvo_qa
```

2. Instale as dependências:
```bash
npm install
```

**Nota para Windows PowerShell**: Se encontrar erro de política de execução, use:
```powershell
npm.cmd install
```

## 🧪 Execução dos Testes

### Modo Interativo (GUI)
Abre a interface gráfica do Cypress para executar testes interativamente:
```bash
npm run cypress:open
```

### Modo Headless
Executa todos os testes em modo headless:
```bash
npm run cypress:run
```

### Executar com Allure
Executa os testes e gera dados para o relatório Allure:
```bash
npm run cypress:run:allure
```

## 📊 Relatórios Allure

### Gerar Relatório
Após executar os testes com Allure, gere o relatório HTML:
```bash
npm run allure:generate
```

### Abrir Relatório
Abre o relatório gerado no navegador:
```bash
npm run allure:open
```

### Gerar e Abrir Automaticamente
Gera e abre o relatório em um único comando:
```bash
npm run allure:serve
```

## 🔄 CI/CD

O projeto está configurado com GitHub Actions para execução automática de testes.

### Execução Automática
Os testes são executados automaticamente:
- Em push para branches `main`, `master` ou `develop`
- Em Pull Requests para essas branches
- **Diariamente às 8h da manhã (horário do Brasil)** via cron schedule

### Verificar Execuções
Acesse a aba **Actions** no GitHub para ver o histórico de execuções e baixar artefatos (screenshots, relatórios).

## ⚙️ Configurações

### Retry
Os testes estão configurados com **3 tentativas automáticas** em caso de falha:
- Aumenta a confiabilidade dos testes
- Reduz falsos positivos causados por instabilidades temporárias

### Ambiente
- **Base URL**: `https://sandbox.moodledemo.net`
- **Viewport**: 1366x768
- **Vídeos**: Habilitados
- **Screenshots**: Gerados automaticamente em caso de falha

### Variáveis de Ambiente
Para configurar a URL base via secret no GitHub Actions:
1. Vá em **Settings → Secrets → Actions**
2. Adicione `CYPRESS_BASE_URL` com a URL desejada

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run cypress:open` | Abre a interface gráfica do Cypress |
| `npm run cypress:run` | Executa testes em modo headless |
| `npm run cypress:run:allure` | Executa testes com Allure habilitado |
| `npm run allure:generate` | Gera relatório HTML do Allure |
| `npm run allure:open` | Abre relatório gerado |
| `npm run allure:serve` | Gera e abre relatório automaticamente |

## 🎯 Funcionalidades Testadas

### Login e Autenticação
- ✅ Login com credenciais válidas
- ✅ Validação de campo usuário vazio
- ✅ Validação de campo senha vazia
- ✅ Alteração de idioma para Português-Brasil
- ✅ Persistência do idioma após recarregar página

### Administração e Cursos
- ✅ Criação de curso com dados dinâmicos
- ✅ Validação de campos obrigatórios
- ✅ Validação de campo numérico (aceita apenas números)

## 🔧 Comandos Customizados

O projeto utiliza Application Actions através de comandos customizados do Cypress:

### Login
- `cy.visitarPaginaLogin()` - Navega para a página de login
- `cy.realizarLogin(usuario, senha)` - Realiza login
- `cy.validarLoginComSucesso()` - Valida login bem-sucedido
- `cy.validarErroLogin()` - Valida mensagem de erro de login
- `cy.alterarIdiomaParaPtBr()` - Altera idioma para Português-Brasil
- `cy.validarIdiomaPtBr()` - Valida idioma configurado

### Curso
- `cy.navegarParaPaginaCriarCurso()` - Navega para criação de curso
- `cy.preencherCamposObrigatoriosCurso()` - Preenche campos obrigatórios
- `cy.preencherNumeroIdentificacaoCurso()` - Preenche número de identificação
- `cy.salvarCurso()` - Salva o curso
- `cy.validarCursoCriado()` - Valida criação do curso
- `cy.validarCampoNumeroIdentificacaoAceitaApenasNumeros()` - Valida campo numérico

## 📌 Observações

- Os seletores foram escolhidos para serem resilientes (IDs nativos do Moodle)
- Dados de teste são gerados dinamicamente usando Faker.js
- Credenciais podem ser ajustadas em `cypress/fixtures/usuario.json`
- O código segue padrão sem ponto e vírgula (JavaScript moderno)
- Screenshots e vídeos são salvos automaticamente em caso de falha

## 📄 Licença

Este projeto é privado e desenvolvido para o Desafio Revvo QA.
