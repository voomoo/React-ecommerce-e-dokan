import { Layout } from "antd";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppContent from "./appContent/AppContent";
import AppFeatures from "./appContent/appFeatures/AppFeatures";
import AppFooter from "./appFooter/AppFooter";
import AppHeader from "./appHeader/AppHeader";
import AppSider from "./appSider/AppSider";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import Products from "./products/Products";
import SingleProduct from "./singleProduct/SingleProduct";

const App = () => {
  return (
    <Router>
      <Layout style={{ background: "white" }}>
        <AppHeader />

        <Layout>
          <AppSider />
          <Switch>
            <Route exact path="/">
              <AppContent />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/product/:id">
              <SingleProduct/>
            </Route>
          </Switch>
        </Layout>
        <Switch>
          <Route exact path="/">
            <AppFeatures />
            <FeaturedProducts sectionName="Featured Products" reverse={false} />
            <FeaturedProducts sectionName="Popular Products" reverse={true} />
          </Route>
        </Switch>
        <AppFooter />
      </Layout>
    </Router>
  );
};

export default App;
