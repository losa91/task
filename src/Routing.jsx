import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
import CustomerDetailsPage from "./pages/CustomerDetailsPage";
import { Layout } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<CustomersPage />} />
      <Route path="/customers/:customerId" element={<CustomerDetailsPage/>} />
    </Route>
  )
);

export const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
