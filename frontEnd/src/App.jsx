import { createBrowserRouter, RouterProvider } from "react-router-dom";
import userRoutes from "./routes/userRoutes/userRoutes";
import adminRoutes from "./routes/adminRoutes/adminRoutes";
import vendorRoutes from "./routes/restaurentRoutes/vendorRouts";
import riderRoutes from "./routes/riderRoutes/riderRoutes";
import landingRoutes from "./routes/LandingRoute";

function App() {
  const router = createBrowserRouter([
    ...userRoutes,
    ...adminRoutes,
    ...vendorRoutes,
    ...riderRoutes,
    ...landingRoutes,
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
