import React from "react";
import { Row, Col } from "antd";
import AppFeature from "./appFeature/AppFeature";
import { FaGift, FaTruckMoving, FaMoneyBillAlt, FaUserClock } from "react-icons/fa"
import "./appFeatures.css";

const AppFeatures = () => {
  return (
    <Row className="app__features">
      <Col span={6}>
        <AppFeature icon={<FaGift size={48} style={{color:"#79B4B7"}}/>} title="BONUS PLUS" desc="Get a bonus plus for buying more that three products" />
      </Col>
      <Col span={6}>
        <AppFeature icon={<FaTruckMoving size={48} style={{color:"#79B4B7"}}/>} title="FREE SHIPPING" desc="Free shipping on all orders over $99" />
      </Col>
      <Col span={6}>
        <AppFeature icon={<FaMoneyBillAlt size={48} style={{color:"#79B4B7"}}/>} title="MONEY BACK GUARANTEE" desc="100% money back guarantee" />
      </Col>
      <Col span={6}>
        <AppFeature icon={<FaUserClock size={48} style={{color:"#79B4B7"}}/>} title="ONLINE SUPPORT 24/7" desc="Call us: 02 3555 65454 55" />
      </Col>
    </Row>
  );
};

export default AppFeatures;
