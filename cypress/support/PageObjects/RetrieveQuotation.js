class RetrieveQuotation{
    IdentificationNumber() {
        return cy.get('input[placeholder="identification number"]')
    }
    Retrieve() {
        return cy.get('#getquote')
    }
    
}
export default RetrieveQuotation;