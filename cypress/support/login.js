Cypress.Commands.add('visitarPaginaLogin', () => {
  cy.visit('/login/index.php')
  cy.wait(1500)
  cy.url().should('include', '/login/index.php')
  cy.get('input#username').should('be.visible')
  cy.get('input#password').should('be.visible')
})

Cypress.Commands.add('realizarLogin', (usuario, senha) => {
  cy.get('input#username').type(usuario)
  cy.get('input#password').type(senha, { log: false })
  cy.get('button#loginbtn').click()
})

Cypress.Commands.add('validarLoginComSucesso', () => {
  cy.contains('Hi, Admin!').should('contain.text', 'Hi, Admin!')
})

Cypress.Commands.add('validarErroLogin', () => {
  cy.get('.alert-danger, .loginerrors').should('be.visible')
  cy.get('.alert-danger, .loginerrors').should(
    'contain.text',
    'Nome de usuário ou senha errados. Por favor tente outra vez.',
  )
})

Cypress.Commands.add('alterarIdiomaParaPtBr', () => {
  cy.get('#action-menu-toggle-0').click()
  cy.get('[data-lang="pt_br"]').scrollIntoView().click()
})

Cypress.Commands.add('validarIdiomaPtBr', () => {
  cy.get('html').invoke('attr', 'lang').then((atributoIdioma) => {
      expect(atributoIdioma.toLowerCase()).to.contain('pt-br')
  })
})
