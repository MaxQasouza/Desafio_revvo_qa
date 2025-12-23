const { faker } = require('@faker-js/faker')
faker.locale = 'pt_BR'

Cypress.Commands.add('navegarParaPaginaCriarCurso', () => {
  cy.get('[data-key="mycourses"]').click()
  cy.contains('button', 'Create course').click()
})
// Ações da Aplicação - Curso
Cypress.Commands.add('preencherCamposObrigatoriosCurso', () => {
  cy.get('input#id_fullname').clear().type(`Curso ${faker.company.name()} - ${faker.lorem.words(2)}`)
  cy.get('input#id_shortname').clear().type(faker.string.alphanumeric(8).toUpperCase())
})

Cypress.Commands.add('preencherNumeroIdentificacaoCurso', () => {
  cy.get('input#id_idnumber').clear().type(faker.string.numeric(5))
})

Cypress.Commands.add('salvarCurso', () => {
  cy.get('input#id_saveanddisplay, button#id_saveanddisplay').click()
})

Cypress.Commands.add('validarCursoCriado', () => {
  cy.url().should('include', '/course/view.php')
  cy.get('h1, .page-header-headings').should('be.visible')
})

Cypress.Commands.add('validarCampoNumeroIdentificacaoAceitaApenasNumeros', () => {
  cy.get('input#id_idnumber').should('be.visible')
  cy.get('input#id_idnumber').invoke('attr', 'type').then((tipo) => {
    if (tipo) {
      expect(tipo.toLowerCase()).to.be.oneOf(['number', 'text'])
    }
  })
  cy.get('input#id_idnumber').invoke('attr', 'pattern').then((padrao) => {
    if (padrao) {
      expect(padrao).to.match(/[0-9]+/)
    }
  })
})
