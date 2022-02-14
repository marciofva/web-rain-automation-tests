/// <reference types="Cypress" />

describe('Blog scenarios', function () {

    beforeEach(() => {
        cy.visit('/blog')
        cy.title().should('eq', 'Blog')
    })

    context('Search for the lastest articles', () => {

        before(function () {
            cy.fixture('articles').then(function (data) {
                globalThis.data = data
            })
        })

        Cypress._.times(12, (i) => {
            it('Should find the article by title', () => {
                cy.accessArticle(data.article[i].title)
            })
        })
    })
})
