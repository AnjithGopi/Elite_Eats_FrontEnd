import RiderDashboard from "../../Components/rider/riderDashboard";
import RiderLogin from "../../Components/rider/riderLogin";
import RiderSignup from "../../Components/rider/riderSignup";

const riderRoutes = [
  { path: "/rider/signup", element: <RiderSignup /> },
  { path: "/rider/login", element: <RiderLogin /> },
  { path: "rider/dashboard", element: <RiderDashboard /> },
];

export default riderRoutes;
