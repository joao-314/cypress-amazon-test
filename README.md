# README.md para o Projeto CYPRESS-AMAZON-TEST

## Cypress Amazon Test Automation  
Este é um projeto de automação de testes end-to-end (E2E) para o site da Amazon, utilizando Cypress, focado em validar o fluxo de adicionar um livro ("AI Engineering: Building Applications with Foundation Models") ao carrinho com filtros específicos (novo, em inglês, formato "Capa Comum"). A pipeline CI/CD foi configurada com GitHub Actions para execução automatizada e geração de relatórios.

---

## 1. Sobre o Projeto  
O `CYPRESS-AMAZON-TEST` automatiza testes de interface no site da Amazon, garantindo que os fluxos de busca, filtros, seleção de produtos e adição ao carrinho funcionem corretamente. Os testes são escritos em Cypress, com uma estrutura de página (Page Object Model) para melhor manutenção e escalabilidade.

### Principais Características  
- Testa o fluxo completo de busca, filtro e adição de um livro ao carrinho.  
- Utiliza o modelo Page Object para organização e reutilização de código.  
- Integração com GitHub Actions para CI/CD automatizado.  
- Geração de relatórios visuais (screenshots e vídeos) para depuração.  

---

## 2. Descrição dos Arquivos Principais 
- **`amazon-cart.cy.js`**: Contém o teste E2E para adicionar o livro "AI Engineering: Building Applications with Foundation Models" ao carrinho, aplicando filtros de condição ("Novo") e idioma ("Inglês"), e validando o autor ("Chip Huyen") e o formato ("Capa Comum").  
- **`AmazonPage.js`**: Implementa o modelo Page Object com seletores e ações para interagir com a página da Amazon (busca, filtros, seleção de livro, adição ao carrinho, validações).  
- **`cypress.config.js`**: Configuração do Cypress para o projeto, incluindo definições de ambiente e plugins.  
- **`ci-cd.yml`**: Arquivo de configuração da pipeline CI/CD no GitHub Actions para execução automatizada dos testes.  
- **`package.json`**: Lista as dependências do projeto, como Cypress e outras bibliotecas necessárias.  

---

## 3. Pré-requisitos  
Antes de configurar e executar o projeto localmente, certifique-se de ter instalado:  
- **Node.js** (versão 18 recomendada).  
- **npm** (gerenciado pelo Node.js).  
- **Git** (para clonagem do repositório).  

---

## 4. Configuração do Projeto  

### 4.1 Clonar o Repositório  
1. Clone o repositório do GitHub:  
   ```bash
   git clone https://github.com/joao-314/CYPRESS-AMAZON-TEST.git
   cd CYPRESS-AMAZON-TEST

### 4.2 Instalar Dependências
1. Clone o repositório do GitHub:  
   ```bash
   npm install

## 5. Executando os Testes Localmente

### 5.1 Executar Testes no Modo Interativo 
1. Abra o Cypress interativamente:
   ```bash
   npx cypress open

1. Selecione o teste amazon-cart.cy.js na interface gráfica do Cypress para executá-lo no modo interativo (com visualização no navegador).

### 5.2 Executar Testes no Modo Headless
1. Execute os testes em modo headless (sem interface gráfica):
   ```bash
   npx cypress run --browser chrome --headless

2. Os resultados, incluindo screenshots e vídeos, serão salvos nas pastas cypress/screenshots e cypress/videos.

## 6. Validação da Pipeline

### 6.1 Verificar o Disparo Automático dos Testes
1. Faça um push para o branch main ou abra um pull request para o branch main.

2. Acesse a aba "Actions" no GitHub para verificar se o pipeline foi acionado automaticamente.

### 6.2 Verificar Relatórios de Falhas
1. Simule uma falha nos testes (ex.: altere um seletor em AmazonPage.js ou amazon-cart.cy.js para um valor incorreto).

2. Verifique se as evidências dos testes falhos são enviadas como artefatos gerados na pipeline 

### 6.3 Verificar Paralelismo
1. Para executar os testes em paralelo, ajuste o ci-cd.yml para usar a ação oficial do Cypress:
    ```bash
    name: Run Cypress tests
    uses: cypress-io/github-action@v5
        with:
            browser: chrome
            headless: true
            record: true
            parallel: true
            group: "Cypress Tests"
         env:
            CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}

2. Verifique se os testes são executados em paralelo e se o tempo de execução é reduzido.
