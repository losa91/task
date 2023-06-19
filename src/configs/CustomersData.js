import React from "react";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const customersTableColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "",
    dataIndex: "actions",
    key: "actions",
    render: (_, row) => {
      return (
        <Link to={`customers/${row.key}`}>
          <Button icon={<RightOutlined />} />
        </Link>
      );
    },
  },
];
