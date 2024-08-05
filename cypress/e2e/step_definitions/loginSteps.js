import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../support/pages/loginPage';

const loginPage = new LoginPage();

Given('que o usuário está na página de login', () => {
  loginPage.visit();
});

When('ele insere o nome de usuário {string} e a senha {string}', (username, password) => {
  loginPage.fillUsername(username);
  loginPage.fillPassword(password);
  loginPage.submit();
});

Then('ele é redirecionado para a página de produtos', () => {
  cy.url().should('include', '/inventory.html');
});

Then('uma mensagem de erro é exibida', () => {
  cy.get('[data-test="error"]').should('be.visible');
});
