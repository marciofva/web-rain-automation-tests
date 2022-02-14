// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
/// <reference types="Cypress" />
import BlogPage from '../support/page_objects/blogpage'
import LoginPage from '../support/page_objects/loginpage'

const blog = new BlogPage()
const login = new LoginPage()

Cypress.Commands.add('accessArticle', (title) => {
    blog.selectArticle(title)
        .getArticleHeader()
        .should('have.text', title)
})

Cypress.Commands.add('employerLoginWithInvalidEmail', (email, password) => {
    login.fillEmail(email)
        .fillPassword(password)
        .getSubmitBtn()
        .should('be.disabled')
})

Cypress.Commands.add('submitEmployerLoginWithInvalidCredentials', (email, password) => {
    login.submitLogin(email, password)
        .getToastNotification()
        .should('have.text', 'Could not sign in, invalid email or password')
})
