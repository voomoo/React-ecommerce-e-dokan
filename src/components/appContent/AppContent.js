import React from "react";
import { Layout } from "antd";
import AppCarousel from "./appCarousel/AppCarousel";
import "./appContent.css";

const { Content } = Layout;


const AppContent = () => {
  return (
    <Content className="app__content">
      <AppCarousel/>
    </Content>
  );
};

export default AppContent;
