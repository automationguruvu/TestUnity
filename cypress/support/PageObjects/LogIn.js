class LogIn{
    Email() {
        return cy.get('#email')
    }
    Password() {
        return cy.get('#password')
    }
    Login() {
        return cy.get("input.btn.btn-default")
    }
    LoginFailed(){
        return cy.get('#login-form span')
    }
    LoggedinSuccessfully(){
        return cy.get('div.content h4')
    }
}
export default LogIn;