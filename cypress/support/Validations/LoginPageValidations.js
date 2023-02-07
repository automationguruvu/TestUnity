import LogIn from "../PageObjects/LogIn";

const login=new LogIn()

class LogInPageValidations{
    Email(text){
        login.Email().type(text)
    }
    Password(text){
        login.Password().type(text)
    }
    Login(){
        login.Login().click()
    }
    verifyLogin(){
        login.LoginFailed().contains('Enter your Email address and password correct')
    }
    LoggedIn(){
        login.LoggedinSuccessfully().contains('manojreddy.kandula21@gmail.com')
    }
}

export default LogInPageValidations;