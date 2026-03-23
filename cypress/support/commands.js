/*Desta forma é possível criar um comando que preenche os campos, declarando-os  
Cypress.Commands.add('fillMandatoryFielsAndSubmit', () => {
   cy.get('#firstName').type('Karla')
   cy.get('#lastName').type('Leone')
   cy.get('#email').type('leonekarla001@gmail.com')
   cy.get('#phone').type(219999999)
   cy.get('#support-type > :nth-child(2)').click()
   cy.get('[for="phone-checkbox"]').click()
   cy.get('#open-text-area').type('Teste.') 
   cy.contains('button', Enviar).click()

})
/*Desta forma é possível criar um comando que preenche os campos, utilizando uma variável que lê um objeto
com os dados informados
Cypress.Commands.add('fillMandatoryFielsAndSubmit', data => {
   cy.get('#firstName').type(data.firstName)
   cy.get('#lastName').type(data.lastName)
   cy.get('#email').type(data.email)
   cy.get('#phone').type(data.phone)
   cy.get('#open-text-area').type(data.openTextArea) 
   cy.contains('button', Enviar).click()

})*/
/*Desta forma é possível criar um comando que preenche os campos com dados setados*/
Cypress.Commands.add('fillMandatoryFielsAndSubmit', (data = {
   firstName: 'Jonh',
   lastName: 'Souza',
   email: 'jonh@gmail.com',
   phone: '219997776',
   openTextArea: 'Teste dados setados.' 
}) => {
   cy.get('#firstName').type(data.firstName)
   cy.get('#lastName').type(data.lastName)
   cy.get('#email').type(data.email)
   cy.get('#phone').type(data.phone)
   cy.get('#open-text-area').type(data.openTextArea) 
   cy.contains('button', 'Enviar').click()
})