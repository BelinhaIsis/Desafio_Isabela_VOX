
class ProductsPage {
    verifyOnProductsPage() {
      cy.url().should('include', '/inventory.html');
    }
  
    addProductToCart(productName) {
      cy.contains('.inventory_item', productName).find('button').click();
    }
  
    goToCart() {
      cy.get('.shopping_cart_link').click();
    }
  }
  
  export default ProductsPage;
  