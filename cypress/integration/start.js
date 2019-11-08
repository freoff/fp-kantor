describe('Test Cypress work', () => {
  it('Cypress should work', () => expect(true).to.equal(true));
});
describe('Application ', () => {
  it('should have correct title', done => {
    cy.visit(Cypress.env().applicationURL);
    cy.fixture('root').then(data => {
      cy.title({ log: true }).should('be.eq', data.applicationTitle);
      done();
    });
  });
});
