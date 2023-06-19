import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useApp } from "./useApp";
import { addCustomers } from "../store/customerSlice";

export const useCustomer = () => {
  const { toggleIsLoading } = useApp();
  const dispatch = useDispatch();

  const fetchCustomers = async () => {
    try {
      toggleIsLoading(true);
      const response = await axios.get("/customers.json");
      dispatch(addCustomers(response.data));
    } catch (err) {
      console.log(err);
    } finally {
      toggleIsLoading(false);
    }
  };

  const customers = useSelector((state) => state.customer.data);
  return { customers, fetchCustomers };
};
