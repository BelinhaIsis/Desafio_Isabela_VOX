import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../support/pages/loginPage';
import ProductsPage from '../support/pages/productsPage';
import CartPage from '../support/pages/cartPage';
import CheckoutPage from '../support/pages/checkoutPage';
import ConfirmationPage from '../support/pages/confirmationPage';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const confirmationPage = new ConfirmationPage();

Given('que o usuário está autenticado', () => {
  loginPage.visit();
  loginPage.fillUsername('standard_user');
  loginPage.fillPassword('secret_sauce');
  loginPage.submit();
  cy.url().should('include', '/inventory.html');
});

And('ele adicionou o produto {string} ao carrinho', (productName) => {
  productsPage.addProductToCart(productName);
  productsPage.goToCart();
  cartPage.verifyProductInCart(productName);
});

When('ele procede para o checkout', () => {
  cartPage.proceedToCheckout();
});

And('ele preenche suas informações com {string} {string} e {string}', (firstName, lastName, postalCode) => {
  checkoutPage.fillCheckoutInformation(firstName, lastName, postalCode);
  checkoutPage.continueCheckout();
});

And('ele confirma a compra', () => {
  checkoutPage.finishCheckout();
});

Then('a página de confirmação de pedido é exibida', () => {
  confirmationPage.verifyOrderConfirmation();
});
