class CartPage {
    verifyProductInCart(productName) {
      cy.contains('.cart_item', productName).should('be.visible');
    }
  
    removeProductFromCart(productName) {
      cy.contains('.cart_item', productName)
        .find('button')
        .click();
    }
  
    verifyCartIsEmpty() {
      cy.get('.cart_item').should('not.exist');
    }
  }
  
  export default CartPage;
  