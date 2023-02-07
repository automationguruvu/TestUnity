import RetrieveQuotation from "../PageObjects/RetrieveQuotation"

const retrieveQuotation = new RetrieveQuotation();

class RetrieveQuotation_Validations{

    enter_RetrieveQuotationNumber(text){
        retrieveQuotation.IdentificationNumber().type(text)
    }
    clickOn_Retrieve(){
        retrieveQuotation.Retrieve().click()
    }
}
export default RetrieveQuotation_Validations;