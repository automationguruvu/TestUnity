///<reference types="cypress"/>

import HomePageValidations from "../support/Validations/HomePageValidations";
import LogInPageValidations from "../support/Validations/LoginPageValidations";
import RequestQuotationValidations from "../support/Validations/RequestQuotationValidations";
import EditProfile_Validations from "../support/Validations/EditProfile_Validations";
import RetrieveQuotation_Validations from "../support/Validations/RetrieveQuotation_Validations";

const loginPage_Validations = new LogInPageValidations();
const requestQuotation_Validations = new RequestQuotationValidations();
const homePage_Validations = new HomePageValidations();
const editProfile_Validations = new EditProfile_Validations();
const retrieveQuotation_Validations = new RetrieveQuotation_Validations();

var $regNumber

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log("err :" + err)
    console.log("runnable :" + runnable)
    return false
  })

before(function(){
    cy.fixture('TestunityData').then(function(data){
        this.data=data
    })
})

beforeEach(function(){
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
})

describe('Testunity',()=>{
    it('A. Login Failure',function(){
        loginPage_Validations.Email(this.data.Login_Failure.Email)
        loginPage_Validations.Password(this.data.Login_Failure.Password)
        loginPage_Validations.Login()
        loginPage_Validations.verifyLogin()
    })
    it('B. Login Success',function(){
        loginPage_Validations.Email(this.data.Login_success.Email)
        loginPage_Validations.Password(this.data.Login_success.Password)
        loginPage_Validations.Login()
        loginPage_Validations.LoggedIn()
    })
    it('C.Request Quotation',function(){
        loginPage_Validations.Email(this.data.Request_Quotation.Email)
        loginPage_Validations.Password(this.data.Request_Quotation.Password)
        loginPage_Validations.Login()
        loginPage_Validations.LoggedIn()
        
        homePage_Validations.clickOn_RequestQuoatation()
        requestQuotation_Validations.selectBreakdownCover(this.data.Request_Quotation.BreakdownCover)
        requestQuotation_Validations.selectWindScreenRepair()
        requestQuotation_Validations.enterIncidents(this.data.Request_Quotation.incidents)
        requestQuotation_Validations.enterRegistrationNumber(this.data.Request_Quotation.Registration)
        requestQuotation_Validations.enterAnnualMileage(this.data.Request_Quotation.Annualmileage)
        requestQuotation_Validations.enterEstimatedValue(this.data.Request_Quotation.Estimatedvalue)
        requestQuotation_Validations.selectParkingLocation(this.data.Request_Quotation.ParkingLocation)
        requestQuotation_Validations.selectStartOfPolicy(this.data.Request_Quotation.Year,this.data.Request_Quotation.Month,this.data.Request_Quotation.Day)
        requestQuotation_Validations.clickOn_SaveQuotation()
        requestQuotation_Validations.save_RequestQuotationNumber()
    })
    it('D. Retrieve Quotation',function(){
        loginPage_Validations.Email(this.data.Retrieve_Quotation.Email)
        loginPage_Validations.Password(this.data.Retrieve_Quotation.Password)
        loginPage_Validations.Login()
        loginPage_Validations.LoggedIn()

        homePage_Validations.clickOn_RetrieveQuotation()
        cy.readFile('cypress/fixtures/RegNumber.json').then(function(data){
            $regNumber=data
        }).then(()=>retrieveQuotation_Validations.enter_RetrieveQuotationNumber($regNumber.Value))
        retrieveQuotation_Validations.clickOn_Retrieve()
    })
    it('E. profile',function(){
        loginPage_Validations.Email(this.data.Profile.Email)
        loginPage_Validations.Password(this.data.Profile.Password)
        loginPage_Validations.Login()
        loginPage_Validations.LoggedIn()

        homePage_Validations.clickOn_Profile()
    })
    it('F. Edit profile',function(){
        loginPage_Validations.Email(this.data.Edit_Profile.Email)
        loginPage_Validations.Password(this.data.Edit_Profile.Password)
        loginPage_Validations.Login()
        loginPage_Validations.LoggedIn()

        homePage_Validations.clickOn_EditProfile()
        editProfile_Validations.select_Title(this.data.Edit_Profile.Title)
        editProfile_Validations.enter_Surname(this.data.Edit_Profile.Surname)
        editProfile_Validations.enter_Firstname(this.data.Edit_Profile.Firstname)
        editProfile_Validations.enter_PhoneNumber(this.data.Edit_Profile.Phone)
        editProfile_Validations.select_DateOfBirth(this.data.Edit_Profile.Year,this.data.Edit_Profile.Month,this.data.Edit_Profile.Day)
        editProfile_Validations.select_Licensetype()
        editProfile_Validations.select_Licenseperiod(this.data.Edit_Profile.Licenceperiod)
        editProfile_Validations.select_Occupation(this.data.Edit_Profile.Occupation)
        editProfile_Validations.enter_Street(this.data.Edit_Profile.Street)
        editProfile_Validations.enter_City(this.data.Edit_Profile.City)
        editProfile_Validations.enter_Country(this.data.Edit_Profile.Country)
        editProfile_Validations.enter_Postcode(this.data.Edit_Profile.PostCode)
        editProfile_Validations.clickOn_UpdateUser()
    })
    it('G. Logout',function(){
        loginPage_Validations.Email(this.data.LogOut.Email)
        loginPage_Validations.Password(this.data.LogOut.Password)
        loginPage_Validations.Login()
        loginPage_Validations.LoggedIn()

        homePage_Validations.clickOn_LogOut()
    })
})