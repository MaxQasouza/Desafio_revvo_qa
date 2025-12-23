describe('Administração do site e Cadastro de Curso', () => {
  beforeEach(() => {
    cy.fixture('usuario').then(({ admin }) => {
      cy.visitarPaginaLogin()
      cy.realizarLogin(admin.username, admin.password)
    })
    cy.navegarParaPaginaCriarCurso()
  })

  it('Criar um curso com sucesso usando dados dinâmicos', () => {
    cy.preencherCamposObrigatoriosCurso()
    cy.preencherNumeroIdentificacaoCurso()
    cy.salvarCurso()
    cy.validarCursoCriado()
  })

  it('Validar que o campo "Número de identificação do curso" aceita apenas números', () => {
    cy.validarCampoNumeroIdentificacaoAceitaApenasNumeros()
  })

})
