import { Login } from "../Login/Login"
import { Register } from "../Register/Register"

const LoginService = () =>{
    return(
         { {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} }
    )
}