describe('Test de la fenêtre modale', () => {
  beforeEach(() => {
    cy.visit('components/modal.html')
  })

  it('ouvre la modale au clic sur "display"', () => {
    cy.get('button').contains('Display').click()
    cy.get('.fixed').should('be.visible') // la modale est affichée
  })

  it('ferme la modale au clic sur le fond noir', () => {
    cy.get('button').contains('Display').click()
    cy.get('.fixed').should('be.visible') // vérifie qu’elle est ouverte
    cy.get('.fixed').click('topLeft') // clic sur l’overlay
    cy.get('.fixed').should('not.be.visible') // modale masquée
  })

  it('contient un <h2> avec Lorem Ipsum', () => {
    cy.get('button').contains('Display').click()
    cy.get('.fixed h2').should('contain.text', 'Lorem Ipsum')
  })
})
