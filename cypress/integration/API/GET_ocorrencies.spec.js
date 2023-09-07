/// <reference types="Cypress" />

describe('GET all occurrences', () => {
  it('Iterating by occurrences', () => {

    cy.request({
      method: 'GET',
      url: Cypress.env("baseUrlApi") + '/entries'
    })
    .then((response) => {
      let object_count = [];
      response.body.entries.forEach(element => {
        if(element['Category'] === 'Authentication & Authorization'){
          object_count.push(element);
        }
      });
      object_count.forEach((element) => {
        cy.log('-----------------------')
        cy.log(element['API'])
        cy.log(element['Description'])
        cy.log(element['HTTPS'])
        cy.log(element['Cors'])
        cy.log(element['Link'])
        cy.log(element['Category'])
        
        expect(element['Category']).to.eql('Authentication & Authorization')
      })
      cy.log(object_count)
      expect(response.status).to.equal(200);
    })
  })
})