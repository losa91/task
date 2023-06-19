import React, { useEffect, useState } from "react";
import { Typography, Table, Card } from "antd";
import { transactionsTableColumns } from "../configs/TransactionsData";
import { useTransaction, useApp } from "../hooks";

const CustomerDetailsPage = () => {
  const { Title } = Typography;
  const { transactions, fetchTransactions, computePoints, getTotalPoints } =
    useTransaction();
  const { isLoading } = useApp();
  const [computedPoints, setComputedPoints] = useState({});

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      setComputedPoints(computePoints(transactions));
    }
  }, [transactions]);

  return (
    <div>
      <Title level={2}>Transactions</Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 0",
        }}
      >
        <Card
          title="Total Points"
          bordered={false}
          style={{
            width: 250,
          }}
        >
          <p>{getTotalPoints(computedPoints)}</p>
        </Card>
        {Object.keys(computedPoints).map((month, index) => (
          <Card
            title={`Points in ${month}`}
            bordered={false}
            style={{
              width: 250,
            }}
          >
            <p>{computedPoints[month]}</p>
          </Card>
        ))}
      </div>

      <Table
        columns={transactionsTableColumns}
        dataSource={transactions}
        loading={isLoading}
      />
    </div>
  );
};

export default CustomerDetailsPage;
