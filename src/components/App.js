import { Layout } from "antd";
import React from "react";
import AppContent from "./appContent/AppContent";
import AppFeatures from "./appContent/appFeatures/AppFeatures";
import AppFooter from "./appFooter/AppFooter";
import AppHeader from "./appHeader/AppHeader";
import AppSider from "./appSider/AppSider";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";

const App = () => {
  return (
    <Layout style={{background: "white"}}>
      <AppHeader/>
      <Layout>
        <AppSider/>
        <AppContent/>
      </Layout>
      <AppFeatures/>
      <FeaturedProducts sectionName="Featured Products" reverse={false}/>
      <FeaturedProducts sectionName="Popular Products" reverse={true}/>
      <AppFooter/>
    </Layout>
  );
};

export default App;
