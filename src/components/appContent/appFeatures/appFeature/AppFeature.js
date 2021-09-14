import { Card, Typography } from "antd";
import React from "react";
import "./appFeature.css";

const { Meta } = Card;

const AppFeature = ({ title, desc, icon }) => {
  return (
    <Card
      className="app__feature"
      hoverable
      style={{ width: 240 }}
      cover={icon}
    >
      <Meta
        title={
          <Typography.Title level={5} style={{ textAlign: "center" }}>
            {title}
          </Typography.Title>
        }
        description={
          <Typography.Paragraph
            ellipsis={{ rows: 1, expandable: true, symbol: "more" }}
            style={{ textAlign: "center" }}
          >
            {desc}
          </Typography.Paragraph>
        }
      />
    </Card>
  );
};

export default AppFeature;
