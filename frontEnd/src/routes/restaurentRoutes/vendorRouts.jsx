import RestaurentDashboard from "../../Components/restuarent/restaurentDashboard";
import RestaurentLogin from "../../Components/restuarent/restaurentLogin";
import RestuarentSignup from "../../Components/restuarent/restuarentSignup";


const vendorRoutes=[

    {path:"/restaurent/signup",element:<RestuarentSignup/>},
    {path:"/restaurent/login",element:<RestaurentLogin/>},
    {path:"/restaurent/dashboard",element:<RestaurentDashboard/>}
]


export default vendorRoutes