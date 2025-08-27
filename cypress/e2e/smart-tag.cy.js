describe('Test du Smart Tag', () => {
  beforeEach(() => {
    cy.visit('components/smart-tag.html')
  })

  it('affiche le tag au survol du bouton "See more"', () => {
    // on cible la div contenant "See more"
    cy.contains('See more').trigger('mouseover')

    // on vérifie que le tag est visible
    cy.get('.absolute.top-11').should('be.visible')
  })

  it('fait disparaître le tag à la sortie du survol', () => {
    cy.contains('See more').trigger('mouseover')
    cy.contains('See more').trigger('mouseout')

    cy.get('.absolute.top-11').should('not.be.visible')
  })
})
