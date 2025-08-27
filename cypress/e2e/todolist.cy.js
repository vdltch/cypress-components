describe('Test de la Todolist', () => {
  beforeEach(() => {
    cy.visit('components/to-do-list.html')
  })

  it('ajoute 4 todos et supprime la deuxième', () => {
    const todos = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4']

    todos.forEach(todo => {
      cy.get('input[type="text"]').type(todo)
      cy.get('button[type="submit"]').click()
    })

    cy.get('.flex.items-center.justify-between').should('have.length', 4)

    cy.get('.flex.items-center.justify-between').eq(1).find('button').click()

    cy.get('.flex.items-center.justify-between').should('have.length', 3)
  })
})
