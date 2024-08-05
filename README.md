# Projeto de Automação de Testes - Sauce Demo

## Objetivo
Criar um conjunto de testes automatizados para o site Sauce Demo.

## Requisitos
- Cypress
- JavaScript
- Git
- BDD

## Como Configurar o Ambiente
1. Clone o repositório.
2. Execute `npm install` para instalar as dependências.
3. Execute `npx cypress open` para abrir o Cypress.

## Estrutura dos Testes
- `cypress/integration/features`: Contém os arquivos .feature com os cenários de teste.
- `cypress/integration/step_definitions`: Contém as implementações dos passos dos testes.
- `cypress/pages`: Contém os arquivos Page Object.

## Como Executar os Testes
- Para executar os testes, use o comando `npx cypress run` ou abra a interface do Cypress com `npx cypress open`.
1. Configuração do Ambiente

Passos:
Acessar o site Sauce Demo: Abra o navegador e vá para https://www.saucedemo.com/v1/.
Configurar o ambiente de desenvolvimento:
Instalação do Node.js e npm: Certifique-se de ter o Node.js e npm instalados. Você pode baixá-los em Node.js.
Instalação do Cypress:
bash
Copy code
npm install cypress --save-dev
Configuração inicial do Cypress:
bash
Copy code
npx cypress open
Outras dependências:
Adicione dependências adicionais conforme necessário (e.g., cypress-cucumber-preprocessor para BDD).

## Contribuições
Sinta-se à vontade para contribuir com novos testes e melhorias.
