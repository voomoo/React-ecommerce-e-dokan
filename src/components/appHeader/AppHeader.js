import React from "react";
import { Layout, Typography, Row, Col, Form, Input, Button, Badge } from "antd";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./headerStyle.css";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Header className="app__header">
      <Row justify="center" align="center">
        <Col span={4}>
          <Title level={3} className="app__logo">
            e-Dokan
          </Title>
        </Col>
        <Col span={16}>
          <Row>
            <Form layout="inline" className="app__search">
              <Col span={20}>
                <Form.Item>
                  <Input size="large" placeholder="Search Item" />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item>
                  <Button size="large">Search</Button>
                </Form.Item>
              </Col>
            </Form>
          </Row>
        </Col>
        <Col span={4} style={{ textAlign: "right" }}>
          <Badge count={24} style={{ background: "#79B4B7" }}>
            <Button shape="circle" icon={<AiOutlineShoppingCart />} />
          </Badge>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
