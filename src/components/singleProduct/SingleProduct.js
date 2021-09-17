import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Divider,
  Button,
  Rate,
  Typography,
  Comment,
  Avatar,
} from "antd";
import { useParams } from "react-router-dom";
import "./singleProduct.css";
import { getSingleProduct } from "./helper";
import { FiUser } from "react-icons/fi";
import loadingimg from "../../images/loading.gif";

const SingleProduct = () => {
  const [singleData, setSingleData] = useState({});
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getSingleProduct(setSingleData, setLoader, id);
  }, [id]);
  console.log(singleData);
  const cartAction = () => {
    alert("cart action");
  };
  const wishlistAction = () => {
    alert("wishlist action");
  };
  console.log(singleData?.rating?.rate);
  return (
    <>
      {!loader ? (
        <div className="single__product">
          <Row className="container">
            <Col className="image__container" span={12}>
              <img
                width="70%"
                src={singleData?.image}
                alt={singleData?.title}
              />
            </Col>
            <Col span={12}>
              <h2>{singleData?.title}</h2>
              <h2>${singleData?.price}</h2>
              <h4>Category: {singleData?.category}</h4>
              <p>{singleData?.description}</p>
              <br />
              <Typography.Title level={2}>
                {singleData?.rating?.rate}/5
              </Typography.Title>
              <Rate disabled allowHalf value={singleData?.rating?.rate} />

              <br />
              <small>{singleData?.rating?.count} Ratings</small>
              <Divider dashed />
              <p>
                Availability: <b>In Stock</b>
              </p>
              <Row>
                <Button onClick={cartAction}>Add to Cart</Button>
                <Button onClick={wishlistAction}>Add to Wishlist</Button>,
              </Row>
            </Col>
          </Row>
          <div className="container comments__section">
            <Typography.Title level={3} className="comment__title">
              Comments & Reviews
            </Typography.Title>
            <Comment
              author={<a href="http://localhost:3000/product/19">Han Solo</a>}
              avatar={
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<FiUser />}
                />
              }
              content={
                <p>
                  Product is ok, But could be better <br />
                  <Rate disabled allowHalf value={4} />
                </p>
              }
              datetime={<span>24/11/2021</span>}
            />
            <Comment
              author={<a href="http://localhost:3000/product/19">Han Duo</a>}
              avatar={
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<FiUser />}
                />
              }
              content={
                <p>
                  Absolutely loved it, awesome stuff. Waiting for more <br />
                  <Rate disabled allowHalf value={5} />
                </p>
              }
              datetime={<span>24/11/2021</span>}
            />
            <Comment
              author={<a href="http://localhost:3000/product/19">Han Trio</a>}
              avatar={
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<FiUser />}
                />
              }
              content={
                <p>
                  Not good at all, didn't meet my expectation at all. <br />
                  <Rate disabled allowHalf value={2} />
                </p>
              }
              datetime={<span>24/11/2021</span>}
            />
            <Comment
              author={<a href="http://localhost:3000/product/19">Han ???</a>}
              avatar={
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<FiUser />}
                />
              }
              content={
                <p>
                  Totally hated it, not buying anything from here again. <br />
                  <Rate disabled allowHalf value={1} />
                </p>
              }
              datetime={<span>24/11/2021</span>}
            />
          </div>
        </div>
      ) : (
        <div className="single__loading">
          <img src={loadingimg} alt="" />
        </div>
      )}
    </>
  );
};

export default SingleProduct;
