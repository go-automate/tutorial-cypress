context('manage product tests (CRUD)', () => {

  beforeEach(() => {
      cy.visit('')
    })

  it("creates a new product", () => {

      // Add a `fixture` function around our test steps
      cy.fixture('product').then((product) => {      

          cy.get('.mat-flat-button.mat-primary').click();

          cy.url().should('include', '/product-add');

          // Change this step to use our `product name' from the test data
          cy.get('#mat-input-0').type(product.name);

          // Change this step to use our `product description`
          cy.get('#mat-input-1').type(product.description);

          // Change this step to use our `product price`
          cy.get('#mat-input-2').type(product.price);

          cy.get('[type="submit"]').click();

          // Change this assertion so it checks against the `product name in the test data`.
          cy.get('h2').should('contain',product.name);

      })

  })  

})