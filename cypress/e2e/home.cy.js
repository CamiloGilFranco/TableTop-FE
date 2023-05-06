describe('The Home Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  it('login, user or password bad', () => {
    cy.get('.header-person-icon').click()
    cy.get('[name=email]').type('xxxxx@gmail.com')
    cy.get('[name=password]').type('test1234')
    cy.get('.log-in-main-form-button').click()
  })

  it('login sucessfully', () => {
    cy.get('.header-person-icon').click()
    cy.get('[name=email]').type('diegodag.24@gmail.com')
    cy.get('[name=password]').type('password23')
    cy.get('.log-in-main-form-button').click()
  })

  it('restaurant link', () => {
    cy.get('[name=searchButton]').type('fish')
    cy.get('.searchBar__button')
    cy.contains('Find a restaurant').click()
  })

  it('prueba de busqueda en carrucel', () => {
    cy.contains('Italian').should('have.length', 1)

  })

  it('restaurant redirection', () => {
    cy.contains('Sushi House').click()

  })
})