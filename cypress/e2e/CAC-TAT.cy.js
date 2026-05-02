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
  
   cy.get('.error').should('be.visible')

  })

  it('campo continua vazio quando preenchido com valor não numérico -não está funcionando', () => {
   cy.get('#phone')
    .type('abc')
    .should('have.value', '')

  })

  it('exibe mensagem de erro ao submenter formulário sem informar número de telefone, após marcar checkbox, ref. ao dado', () => {
   cy.get('#firstName').type('Karla')
   cy.get('#lastName').type('Leone')
   cy.get('#email').type('leonekarla001@gmail.com')
   cy.get('#support-type > :nth-child(2)').click()
   cy.get('[for="phone-checkbox"]').click()
   cy.get('#open-text-area').type('primeiro teste')
     
   cy.contains('button', 'Enviar').click()
  
   cy.get('.error').should('be.visible')
 
  })

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

/*método para selecionar uma opção pelo Texto exibido tela*/
it('seleciona um produto (YouTube) por seu texto', () => {
  cy.get('#product').select('YouTube')
  .select('YouTube')
  .should('have.value', 'youtube')
})

/*método para selecionar uma opção pelo Valor no HTML*/
it('seleciona um produto (Mentoria) por seu valor', () => {
  cy.get('#product').select('mentoria')
  .select('mentoria')
  .should('have.value', 'mentoria')
})

/*método para selecionar uma opção pelo Índice no HTML*/
it('seleciona um produto (Blog) pelo Índice', () => {
  cy.get('#product')
  .select(1)
  .should('have.value', 'blog')
})


/*método para marcar um tipo de atendimento checkbox "Feedback"*/
it('marca o tipo de atendimento "Feedback"', () => {
  cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('be.checked')
})

/*método para marcar todos os tipos de atendimento radio*/
it('marca cada tipo de atendimento', () => {
/*seleciona todos genericamente*/
  cy.get('input[type="radio"]')
    .each(typeOfService => {
/*empacota e seleciona todos individualmente*/
      cy.wrap(typeOfService)
        .check()
        .should('be.checked')
    })  
  })

/*método para marcar todos os meios de contato checkbox genericamente*/
it('marca ambos checkboxes, depois desmarca o último', () => {
  cy.get('input[type="checkbox"]')
  .check()
/*desmarca o último checkbox selecionado*/
  .last()
  .uncheck()
  .should('not.be.checked')
})
})