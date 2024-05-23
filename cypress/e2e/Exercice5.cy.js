describe('Validations Exercice 5: ', () => {
    beforeEach(() => {
        cy.visit("/Exercice5");
    })
    it('Should have label on each input of the form', () => {
        cy.get('form').find('input').each((input) => {
            cy.wrap(input).should('have.attr', 'id').then((id) => {
                cy.get('label[for="' + id + '"]').should('exist').and('not.be.empty');
            });
        });
    })
    it('Have an alt attribute on each image', () => {
        cy.get('img').each((img) => {
            cy.get('img').should('have.attr', 'alt').then((alt) => {
                expect(alt).not.to.be.undefined;
                expect(alt).not.to.be.empty;
            });
        })
    })
    it('Have a title attr in link', () => {
        cy.get('a').each((link) => {
            cy.get(link).should('have.attr', 'title').then((title) => {
                expect(title).not.to.be.undefined;
                expect(title).not.to.be.empty;
            })
        })
    })
})
