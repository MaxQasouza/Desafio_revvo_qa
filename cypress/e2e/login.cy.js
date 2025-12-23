describe('Login e configurações do Administrador', () => {
  beforeEach(() => {
    cy.visitarPaginaLogin()
  })

  it('Login com credenciais válidas', () => {
    cy.fixture('usuario').then(({ admin }) => {
      cy.realizarLogin(admin.username, admin.password)
      cy.validarLoginComSucesso()
    })
  })

  it('Validação de campo Usuário vazio', () => {
    cy.fixture('usuario').then(({ admin }) => {
      cy.realizarLogin(admin.usernameVazio, admin.password)
      cy.validarErroLogin()
    })
  })

  it('Validação de campo Senha vazia', () => {
    cy.fixture('usuario').then(({ admin }) => {
      cy.realizarLogin(admin.username, admin.passwordVazio)
      cy.get('button#loginbtn').click()
      cy.validarErroLogin()
    })
  })

  it('Alterar idioma para Português-Brasil', () => {
    cy.alterarIdiomaParaPtBr()
    cy.validarIdiomaPtBr()
  })

  it('Valida persistência do idioma para Português-Brasil após recarregar a página', () => {
    cy.alterarIdiomaParaPtBr()
    cy.reload()
    cy.validarIdiomaPtBr()
  })
})
