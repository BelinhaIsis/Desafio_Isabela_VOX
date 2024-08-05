import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../support/pages/loginPage';
import ProductsPage from '../support/pages/productsPage';
import CartPage from '../support/pages/cartPage';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();

Given('que o usuário está autenticado', () => {
  loginPage.visit();
  loginPage.fillUsername('standard_user');
  loginPage.fillPassword('secret_sauce');
  loginPage.submit();
  cy.url().should('include', '/inventory.html');
});

And('ele está na página de produtos', () => {
  productsPage.verifyOnProductsPage();
});

When('ele adiciona o produto {string} ao carrinho', (productName) => {
  productsPage.addProductToCart(productName);
});

Then('o produto {string} é exibido no carrinho', (productName) => {
  productsPage.goToCart();
  cartPage.verifyProductInCart(productName);
});

Given('ele adicionou o produto {string} ao carrinho', (productName) => {
  productsPage.addProductToCart(productName);
  productsPage.goToCart();
  cartPage.verifyProductInCart(productName);
});

When('ele remove o produto {string} do carrinho', (productName) => {
  cartPage.removeProductFromCart(productName);
});

Then('o carrinho está vazio', () => {
  cartPage.verifyCartIsEmpty();
});
