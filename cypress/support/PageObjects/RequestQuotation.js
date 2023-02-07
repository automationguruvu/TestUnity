class RequestQuotation{
    
    BreakDownCover() {
        return cy.get('#quotation_breakdowncover')
    }
    WindScreenRepair() {
        return cy.get('input[value="Yes"]')
    }
    Incidents() {
        return cy.get('#quotation_incidents')
    }
    Registration() {
        return cy.get('#quotation_vehicle_attributes_registration')
    }
    AnnualMileage() {
        return cy.get('#quotation_vehicle_attributes_mileage')
    }
    EstimatedValue() {
        return cy.get('#quotation_vehicle_attributes_value')
    }
    ParkingLocation() {
        return cy.get('#quotation_vehicle_attributes_parkinglocation')
    }
    StartOfPolicyYear() {
        return cy.get('#quotation_vehicle_attributes_policystart_1i')
    }
    StartOfPolicyMonth(){
        return cy.get('#quotation_vehicle_attributes_policystart_2i')
    }
    StartOfPolicyDate(){
        return cy.get('#quotation_vehicle_attributes_policystart_3i')
    }
    CalculatePremium() {
        return cy.get('input[value="Calculate Premium"]')
    }
    ResetForm() {
        return cy.get('input[value="Reset form"]')
    }
    SaveQuotation() {
        return cy.get('input[value="Save Quotation"]')
    }
    SavedQuotationNumber(){
        let Number;
        cy.get('body').should(function($text){
            Number=$text.text()  
        }).then(()=>cy.writeFile('cypress/fixtures/example.json',{Value:+Number}))
    }
}

export default RequestQuotation;