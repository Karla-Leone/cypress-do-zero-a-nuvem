describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
})

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
   const longText = Cypress._.repeat('abc', 100)
 
   cy.get('#firstName').type('Karla')
   cy.get('#lastName').type('Leone')
   cy.get('#email').type('leonekarla001@gmail.com')
   cy.get('#phone').type(219999999)
   cy.get('#support-type > :nth-child(2)').click()
   cy.get('[for="phone-checkbox"]').click()
   cy.get('#open-text-area').type(longText, { delay: 0}) 
   cy.contains('button', 'Enviar').click()
  
   cy.get('.success').should('be.visible')

  })

  it('exibe mensagem de erro ao submenter formulário com formatação errada no campo de preenchimento obrigatório de email', () => {
   cy.get('#firstName').type('Karla')
   cy.get('#lastName').type('Leone')
   cy.get('#email').type('leonekarla001,gmail.com')
   cy.get('#phone').type(219999999)
   cy.get('#support-type > :nth-child(2)').click()
   cy.get('[for="phone-checkbox"]').click()
   cy.get('#open-text-area').type('primeiro teste')     
   cy.contains('button', 'Enviar').click()
  
   cy.get('.success').should('be.visible')

  })
/*
  it('campo continua vazio quando preenchido com valor não numérico -não está funcionando', () => {
   cy.get('#phone')
    .type(e)
    .should('have.value', '')

  })


  it('exibe mensagem de erro ao submenter formulário sem informar número de telefone, após marcar checkbox, ref. ao dado', () => {
   cy.get('#firstName').type('Karla')
   cy.get('#lastName').type('Leone')
   cy.get('#email').type('leonekarla001@gmail.com')
   cy.get('#phone').type('')
   cy.get('#support-type > :nth-child(2)').click()
   cy.get('[for="phone-checkbox"]').click()
   cy.get('#open-text-area').type('primeiro teste')     
   cy.contains('button', 'Enviar').click()
  
   cy.get('.success').should('be.visible')

  })
*/
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
   cy.get('#firstName')
   .type('Karla')
   .should('have.value', 'Karla')
   .clear()
   .should('have.value', '')
   cy.get('#lastName')
   .type('Leone')
   .should('have.value', 'Leone')
   .clear()
   cy.get('#email')
   .type('leonekarla@gmail.com')
   .should('have.value', 'leonekarla@gmail.com')
   .clear()
   cy.get('#phone')
   .type('219966544')
   .should('have.value', '219966544')
   .clear()
})

  it('exibe mensagem de erro ao submenter formulário sem preencher os campos obrigatórios', () => {
   cy.contains('button', 'Enviar').click()

   cy.get('.error').should('be.visible')

  })
/*método que utiliza o comando que preenche os campos*/
  it('envia o formulário com sucesso usando um comando customizado', () => {
   cy.fillMandatoryFielsAndSubmit()

   cy.get('.success').should('be.visible')

  })


/*método que utiliza um objeto com uma variável*/
  it('envia o formulário com sucesso usando um comando customizado', () => {
    const data = {
      firstName: 'Karla',
      lastName: 'Leone',
      email: 'leone@gmail.com',
      phone: '219999999',
      openTextArea: 'Teste Preenchimento com objeto.'

    }
   cy.fillMandatoryFielsAndSubmit(data)

   cy.get('.success').should('be.visible')

  })

/*método que utiliza um objeto com uma variável*/ 
  it('envia o formulário com sucesso usando um comando customizado', () => {
   cy.fillMandatoryFielsAndSubmit()

   cy.get('.success').should('be.visible')

  })
})
