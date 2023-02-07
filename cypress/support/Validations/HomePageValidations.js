import HomePage from "../PageObjects/HomePage";

const homepage = new HomePage();

class HomePageValidations{
    clickOn_Home(){
        homepage.Home().click()
    }
    clickOn_LogOut(){
        homepage.LogOut().click()
    }
    clickOn_EditProfile(){
        homepage.EditProfile().click()
    }
    clickOn_RetrieveQuotation(){
        homepage.RetrieveQuotation().click()
    }
    clickOn_RequestQuoatation(){
        homepage.RequestQuotation().click()
    }
    clickOn_Profile(){
        homepage.Profile().click()
    }
}
export default HomePageValidations;