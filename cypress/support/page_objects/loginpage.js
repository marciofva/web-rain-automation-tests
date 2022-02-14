/// <reference types="Cypress" />

const employerBtn = 'a[title="Employers Access"]'
const emailInput = '#field-2'
const passwordInput = '#field-3'
const submitBtn = 'button[type="submit"]'
const toastNotification = 'div.notification.open'

class LoginPage {

    accessEmployerArea() {
        return cy.get(employerBtn).click()
    }

    submitLogin(email, password) {
        this.fillEmail(email)
        this.fillPassword(password)
        this.getSubmitBtn().click()
        return this
    }

    fillEmail(email) {
        cy.get(emailInput).click().type(email)
        return this
    }

    fillPassword(password) {
        cy.get(passwordInput).click().type(password)
        return this
    }

    getSubmitBtn() {
        return cy.get(submitBtn)
    }

    getToastNotification() {
        return cy.get(toastNotification)
    }
}
export default LoginPage
