import AdminDash from "../../Components/admin/adminDash"
import AdminLogin from "../../Components/admin/adminLogin"
import Customerlist from "../../Components/admin/customerlist"


const adminRoutes=[
    {path:"/admin/login",element:<AdminLogin/>},
    {path:"/admin/dashboard",element:<AdminDash/>},
    {path:"/admin/customerlist",element:<Customerlist/>}
]


export default adminRoutes