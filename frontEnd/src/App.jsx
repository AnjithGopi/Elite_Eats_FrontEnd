import { createBrowserRouter, RouterProvider } from "react-router-dom";
import userRoutes from "./routes/userRoutes/userRoutes";
import adminRoutes from "./routes/adminRoutes/adminRoutes";
import vendorRoutes from "./routes/restaurentRoutes/vendorRouts";
import riderRoutes from "./routes/riderRoutes/riderRoutes";

function App() {
  const router = createBrowserRouter([...userRoutes,...adminRoutes,...vendorRoutes,...riderRoutes]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
