import Home from "../../Components/user/Home";
import UserLogin from "../../Components/user/userLogin";
import UserSignup from "../../Components/user/userSignup";


const userRoutes=[
    {path:"/user/signup",element:<UserSignup/>},
    {path:"/user/login",element:<UserLogin/>},
    {path:"/user/home",element:<Home/>}
]


export default userRoutes