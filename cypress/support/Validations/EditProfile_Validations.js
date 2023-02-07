import EditProfile from "../PageObjects/EditProfile"

const editProfile = new EditProfile();

class EditProfile_Validations{
    select_Title(text){
        editProfile.Title().select(text)
    }
    enter_Surname(text){
        editProfile.Surname().type(text)
    }
    enter_Firstname(text){
        editProfile.FirstName().type(text)
    }
    enter_PhoneNumber(text){
        editProfile.Phone().type(text)
    }
    select_DateOfBirth(text1,text2,text3){
        editProfile.DateOfBirthYear().select(text1)
        editProfile.DateOfBirthMonth().select(text2)
        editProfile.DateOfBirthDay().select(text3)
    }
    select_Licensetype(){
        editProfile.LicenseTypeFull().click()
    }
    select_Licenseperiod(text){
        editProfile.LicensePeriod().select(text)
    }
    select_Occupation(text){
        editProfile.Occupation().select(text)
    }
    enter_Street(text){
        editProfile.Street().type(text)
    }
    enter_City(text){
        editProfile.City().type(text)
    }
    enter_Country(text){
        editProfile.Country().type(text)
    }
    enter_Postcode(text){
        editProfile.PostalCode().type(text)
    }
    clickOn_UpdateUser(){
        editProfile.UpdateUser().click()
    }
}
export default EditProfile_Validations;