/// <reference types="Cypress" />

describe('Quicksight Visual Regression Test', () => {
  
    it('Navigate to dashboard', () => {
      cy.visit(
        'https://p2ydjsiuqd.execute-api.ap-southeast-1.amazonaws.com/dev/generate-embed'
      );
      cy.wait(20000);
    });
  });
  