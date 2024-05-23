describe('Validations Exercice 6: ', () => {
    beforeEach(() => {
        cy.visit("/Exercice6");
    })
    describe('Exercice 6 Validation', () => {
        it('Returns 8 on calculate 5 + 3', () => {
            cy.contains('5').click()
            cy.contains('+').click()
            cy.contains('3').click()
            cy.contains('=').click()
            cy.get('#display').should('contain.value', '8')
        })
        it('Returns 6 on calculate 10 - 4', ()=>{
            cy.contains('1').click()
            cy.contains('0').click()
            cy.contains('-').click()
            cy.contains('4').click()
            cy.contains('=').click()
            cy.get('#display').should('contain.value', '6')
        })
        it('Returns  14 on calculate 7 * 2', ()=>{
            cy.contains('7').click()
            cy.contains('*').click()
            cy.contains('2').click()
            cy.contains('=').click()
            cy.get('#display').should('contain.value', '14')
        })
        it('Returns 4 on calculate 12 / 3', ()=>{
            cy.contains('1').click()
            cy.contains('2').click()
            cy.contains('/').click()
            cy.contains('3').click()
            cy.contains('=').click()
            cy.get('#display').should('contain.value', '4')
        })
        it('Returns empty on clic on C', ()=>{
            cy.contains('1').click()
            cy.contains('2').click()
            cy.contains('/').click()
            cy.contains('3').click()
            cy.contains('=').click()
            cy.contains('C').click()
            cy.get('#display').should('contain.value', '')
        })
        it('BONUS:: Returns \'Division by zero is not allowed\' on calculate 12 / 0', ()=>{
            cy.contains('1').click()
            cy.contains('2').click()
            cy.contains('/').click()
            cy.contains('0').click()
            cy.contains('=').click()
            cy.get('#display').should('contain.value', 'Division by zero is not allowed')
        })
    })

    })
