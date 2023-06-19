import React, { useState} from "react";
import { TeamOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout as AntLayout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Content, Footer, Sider } = AntLayout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <div>
      <Link to={"/"}>Customers</Link>
    </div>,
    "customers",
    <TeamOutlined />
  ),
];

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["customers"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <AntLayout>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>Made by Loza</Footer>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
