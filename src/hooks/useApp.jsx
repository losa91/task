import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsLoading as toggleIsLoadingActionCreator } from "../store/appSlice";

export const useApp = () => {
  const isLoading = useSelector((state) => state.app.isLoading);
  const dispatch = useDispatch();

  const toggleIsLoading = (flag) => {
    dispatch(toggleIsLoadingActionCreator(flag));
  };

  return { isLoading, toggleIsLoading };
};
