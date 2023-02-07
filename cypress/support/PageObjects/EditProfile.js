class EditProfile{
    Title() {
        return cy.get('#user_title')
    }
    Surname() {
        return cy.get('#user_surname')
    }
    FirstName() {
        return cy.get('#user_firstname')
    }
    Phone(){
        return cy.get('#user_phone')
    }
    DateOfBirthYear(){
        return cy.get('#user_dateofbirth_1i')
    }
    DateOfBirthMonth(){
        return cy.get('#user_dateofbirth_2i')
    }
    DateOfBirthDay(){
        return cy.get('#user_dateofbirth_3i')
    }
    LicenseTypeFull(){
        return cy.get('#user_licencetype_t')
    }
    LicenseTypeProvisional(){
        return cy.get('#user_licencetype_f')
    }
    LicensePeriod(){
        return cy.get('#user_licenceperiod')
    }
    Occupation(){
        return cy.get('#user_occupation_id')
    }
    Street(){
        return cy.get('#user_address_attributes_street')
    }
    City(){
        return cy.get('#user_address_attributes_city')
    }
    Country(){
        return cy.get('#user_address_attributes_county')
    }
    PostalCode(){
        return cy.get('#user_address_attributes_postcode')
    }
    UpdateUser(){
        return cy.get('input[value="Update User"]')
    }
    
}
export default EditProfile;