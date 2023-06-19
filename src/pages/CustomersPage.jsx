import React, { useEffect } from "react";
import { Typography, Table } from "antd";
import { customersTableColumns } from "../configs/CustomersData";
import { useCustomer, useApp } from "../hooks";

const CustomersPage = () => {
  const { Title } = Typography;
  const { customers, fetchCustomers } = useCustomer();
  const { isLoading } = useApp();

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div>
      <Title level={2}>Customers list</Title>
      <Table
        columns={customersTableColumns}
        dataSource={customers}
        loading={isLoading}
      />
    </div>
  );
};

export default CustomersPage;
