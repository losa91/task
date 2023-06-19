import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useApp } from "./useApp";
import { addTransactions } from "../store/transactionSlice";
import { month } from "../configs/dateData";

export const useTransaction = () => {
  const { toggleIsLoading } = useApp();
  const dispatch = useDispatch();

  const fetchTransactions = async () => {
    try {
      toggleIsLoading(true);
      const response = await axios.get("/transactions.json");
      dispatch(addTransactions(response.data));
    } catch (err) {
      console.log(err);
    } finally {
      toggleIsLoading(false);
    }
  };

  const computePoints = (transactions = []) => {
    const points = {};
    for (let i = 0; i < transactions.length; i++) {
      let transactionPoint = 0;
      if (transactions[i].amount > 100) {
        transactionPoint = (transactions[i].amount - 100) * 2;
      }
      if (transactions[i].amount >= 50) {
        if (transactions[i].amount / 100 >= 1) {
          transactionPoint += 50;
        } else {
          transactionPoint += (transactions[i].amount - 50) * 1;
        }
      }
      const computedMonth = new Date(
        Date.parse(transactions[i].date)
      ).getMonth();
      console.log(month[computedMonth]);
      if (points[month[computedMonth]]) {
        points[month[computedMonth]] += transactionPoint;
      } else {
        points[month[computedMonth]] = transactionPoint;
      }
    }

    return points;
  };

  const getTotalPoints = (computedPoints) => {
    let totalPoints = 0;
    Object.keys(computedPoints).map((month, index) => {
      totalPoints += computedPoints[month];
    });

    return totalPoints;
  };

  const transactions = useSelector((state) => state.transaction.data);
  return { transactions, fetchTransactions, computePoints, getTotalPoints };
};
