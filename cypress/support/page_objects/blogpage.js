/// <reference types="Cypress" />

const articleList = 'section > div > div > h3 > a'
const articleHeader = 'header > div > h1'

class BlogPage {

    selectArticle(title) {
        cy.get(articleList).filter(':contains("' + title + '")').click({ force: true })
        return this
    }

    getArticleHeader() {
        return cy.get(articleHeader)
    }
}
export default BlogPage
