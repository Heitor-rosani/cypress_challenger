/// <reference types="Cypress" />

describe('Analising the site', () => {
  beforeEach(()=>{
    cy.login()
  })
  it.only('Sorting A-Z', ()=>{
    cy.get('[data-test="product_sort_container"]').select('Name (A to Z)')
    let item_list = [] 
    cy.create_list('.inventory_item_name', item_list)
    cy.log(item_list[0])
 })

 it('Sorting Z-A', () => {
  cy.get('[data-test="product_sort_container"]').select('Name (Z to A)')
  let item_list = [] 
  cy.create_list('.inventory_item_name', item_list)
  cy.log(item_list)
 })
})
