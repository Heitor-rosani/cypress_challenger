/// <reference types="Cypress" />

describe('Analising the site', () => {
  beforeEach(()=>{
    cy.login()
  })
  it('Sorting A-Z', ()=>{
    let sort_a_z_list = Cypress.env('list_elements').sort()
    cy.get('[data-test="product_sort_container"]').select('Name (A to Z)')
    let number_itens = Cypress.$('.inventory_item_name').length
    for (let index = 0; index < number_itens; index++) {
      cy.get('.inventory_item_name').eq(index).then((value) => {
        expect(value.text()).to.eql(sort_a_z_list[index])
       }) 
    }
 })

 it('Sorting Z-A', () => {
  let sort_z_a_list = Cypress.env('list_elements').reverse()
  cy.get('[data-test="product_sort_container"]').select('Name (Z to A)')
  let number_itens = Cypress.$('.inventory_item_name').length
  for (let index = 0; index < number_itens; index++) {
    cy.get('.inventory_item_name').eq(index).then((value) => {
      expect(value.text()).to.eql(sort_z_a_list[index])
     }) 
  }
 })
})
