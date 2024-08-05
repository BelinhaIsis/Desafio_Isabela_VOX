class ConfirmationPage {
    verifyOrderConfirmation() {
      cy.contains('h2', 'THANK YOU FOR YOUR ORDER').should('be.visible');
    }
  }
  
  export default ConfirmationPage;
  