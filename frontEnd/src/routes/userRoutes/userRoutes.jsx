import ForgotPassword from "../../Components/user/forgotPassword";
import Home from "../../Components/user/Home";
import NewPassword from "../../Components/user/Newpassword";
import UserLogin from "../../Components/user/userLogin";
import UserSignup from "../../Components/user/userSignup";


const userRoutes=[
    {path:"/user/signup",element:<UserSignup/>},
    {path:"/user/login",element:<UserLogin/>},
    {path:"/user/home",element:<Home/>},
    {path:"/user/forgot_password",element:<ForgotPassword/>},
    {path:"/user/new_password",element:<NewPassword/>}
]


export default userRoutes