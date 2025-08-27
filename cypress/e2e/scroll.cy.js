describe('Test du Scroll To Top', () => {
  beforeEach(() => {
    cy.visit('components/scroll-to-top.html')
  })

  it('affiche le bouton scroll-to-top en bas de page', () => {
    cy.scrollTo('bottom')
    cy.get('#scroll-to-top').should('be.visible')
  })

  it('retour en haut et disparition du bouton au clic', () => {
    cy.scrollTo('bottom')
    cy.get('#scroll-to-top').should('be.visible')
    cy.get('#scroll-to-top').click()

    // le bouton reste dans le DOM mais devient invisible
    cy.get('#scroll-to-top').should('not.be.visible')

    // on vérifie bien que la page est revenue en haut
    cy.window().its('scrollY').should('eq', 0)
  })
})
