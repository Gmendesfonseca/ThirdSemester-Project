describe('template spec', () => {
  it('Access the ', () => {
    cy.visit('http://localhost:5173')
    cy.get('.MuiFab-root').click()
  })
})
