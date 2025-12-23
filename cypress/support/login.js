Cypress.Commands.add('visitarPaginaLogin', () => {
  cy.visit('/login/index.php')
  cy.wait(1500)
  cy.url().should('include', '/login/index.php')
  cy.get('input#username').should('be.visible')
  cy.get('input#password').should('be.visible')
})

Cypress.Commands.add('realizarLogin', (usuario, senha) => {
  if (usuario && usuario.trim() !== '') {
    cy.get('input#username').clear().type(usuario)
  } else {
    cy.get('input#username').clear()
  }
  if (senha && senha.trim() !== '') {
    cy.get('input#password').clear().type(senha, { log: false })
  } else {
    cy.get('input#password').clear()
  }
  cy.get('button#loginbtn').click()
})

Cypress.Commands.add('validarLoginComSucesso', () => {
  cy.contains('Hi, Admin!').should('contain.text', 'Hi, Admin!')
})

Cypress.Commands.add('validarErroLogin', () => {
  // Verifica se há mensagem de erro do servidor OU se ainda estamos na página de login
  // (validação HTML5 impede submissão quando campos required estão vazios)
  cy.get('body').then(($body) => {
    const hasServerError = $body.find('.alert-danger, .loginerrors').length > 0
    
    if (hasServerError) {
      // Mensagem de erro do servidor (quando campos têm valores mas estão incorretos)
      cy.get('.alert-danger, .loginerrors').should('be.visible')
      cy.get('.alert-danger, .loginerrors').should(
        'contain.text',
        'Nome de usuário ou senha errados. Por favor tente outra vez.',
      )
    }
  })
  
  // Sempre verifica que ainda estamos na página de login (não houve redirecionamento)
  // Isso valida tanto erro do servidor quanto validação HTML5 de campos vazios
  cy.url().should('include', '/login/index.php')
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
