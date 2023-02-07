import RequestQuotation from "../PageObjects/RequestQuotation";
import HomePage from "../PageObjects/HomePage";

const homePage = new HomePage();
const requestQuotation = new RequestQuotation();

class RequestQuotationValidations{
    clickOnRequestQuotation(){
        homePage.RequestQuotation().click()
    }
    selectBreakdownCover(text){
        requestQuotation.BreakDownCover().select(text)
    }
    selectWindScreenRepair(){
        requestQuotation.WindScreenRepair().click()
    }
    enterIncidents(text){
        requestQuotation.Incidents().type(text)
    }
    enterRegistrationNumber(text){
        requestQuotation.Registration().type(text)
    }
    enterAnnualMileage(text){
        requestQuotation.AnnualMileage().type(text)
    }
    enterEstimatedValue(text){
        requestQuotation.EstimatedValue().type(text)
    }
    selectParkingLocation(text){
        requestQuotation.ParkingLocation().select(text)
    }
    selectStartOfPolicy(text1,text2,text3){
        requestQuotation.StartOfPolicyYear().select(text1)
        requestQuotation.StartOfPolicyMonth().select(text2)
        requestQuotation.StartOfPolicyDate().select(text3)
    }
    clickOn_SaveQuotation(){
        requestQuotation.SaveQuotation().click()
    }
    save_RequestQuotationNumber(){
        var regNumber;
        cy.get('body').then($ele=>{
            regNumber=$ele.text().match(/(\d+)/).at(0);
            cy.log(regNumber)
        }).then(()=>cy.writeFile('cypress/fixtures/RegNumber.json',{Value: regNumber}))
    }
}

export default RequestQuotationValidations;