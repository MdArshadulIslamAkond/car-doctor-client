import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./Routes/Routes.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={routers} />
      </AuthProvider>
    </StrictMode>
    ,
  </div>
);
