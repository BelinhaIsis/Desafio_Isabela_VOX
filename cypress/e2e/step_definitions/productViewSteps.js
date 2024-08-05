import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../support/pages/loginPage';
import ProductsPage from '../support/pages/productsPage';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

Given('que o usuário está autenticado', () => {
  loginPage.visit();
  loginPage.fillUsername('standard_user');
  loginPage.fillPassword('secret_sauce');
  loginPage.submit();
  cy.url().should('include', '/inventory.html');
});

When('ele acessa a página de produtos', () => {
  // Verificar se estamos na página de produtos
  productsPage.verifyOnProductsPage();
});

Then('ele vê uma lista de produtos disponíveis', () => {
  productsPage.getProductList().should('have.length.greaterThan', 0);
});
