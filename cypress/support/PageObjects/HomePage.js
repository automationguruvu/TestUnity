class HomePage{
    Home(){
        return cy.get('#home')
    }
    RequestQuotation(){
        return cy.get('#newquote')
    }
    RetrieveQuotation(){
        return cy.get('#retrieve')
    }
    Profile(){
        return cy.get('#profile')
    }
    EditProfile(){
        return cy.get('#editprofile')
    }
    LogOut(){
        return cy.get('input[value="Log out"]')
    }
}
export default HomePage;