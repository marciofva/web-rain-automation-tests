/// <reference types="Cypress" />

import LoginPage from '../../support/page_objects/loginpage'

const login = new LoginPage()

describe('Employer login', function () {

    beforeEach(function () {
        cy.visit('')
        login.accessEmployerArea()
        cy.fixture('employer_credentials').then(function (data) {
            globalThis.data = data
        })
        cy.title().should('eq', 'Rain')
    })

    it('Should not allow to login when inputting an invalid e-mail', () => {
        cy.employerLoginWithInvalidEmail(
            data.invalid_email.email,
            data.invalid_email.password)
    })

    it('Should not allow to login when inputting a blank e-mail', () => {
        cy.employerLoginWithInvalidEmail(
            data.blank_email.email,
            data.blank_email.password)
    })

    it('Should display an error message when inputting invalid credentials', () => {
        cy.submitEmployerLoginWithInvalidCredentials(
            data.invalid_credentials.email,
            data.invalid_credentials.password)
    })
})
