import { Card, Button, Typography } from "antd";
import React from "react";
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartData,
  selectProductsData,
  selectWishData,
  setCartData,
  setWishData,
} from "../../../redux/reducers/productSlice";
import "./featuredProduct.css";

const { Meta } = Card;

const FeaturedProduct = ({ id, img, title, desc, loading }) => {
  let cartData = useSelector(selectCartData);
  let wishData = useSelector(selectWishData);
  const dispatch = useDispatch();
  const productData = useSelector(selectProductsData);
  const cartAction = () => {
    let newCartData = productData.filter((product) => product?.id === id);
    dispatch(setCartData([...cartData, newCartData]));
  };
  const wishlistAction = () => {
    let newWishlistData = productData.filter((product) => product?.id === id);
    dispatch(setWishData([...wishData, newWishlistData]));
  };
  return (
    <div className="featured__product">
      <Card
        loading={loading}
        style={{ width: 300 }}
        cover={<img alt="example" src={img} />}
        actions={[
          <Button onClick={cartAction}>Add to Cart</Button>,
          <Button onClick={wishlistAction}>Add to Wishlist</Button>,
        ]}
      >
        <Meta
          title={<Link to={`/product/${id}`}>{title}</Link>}
          description={
            <Typography.Paragraph
              ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
            >
              {desc}
            </Typography.Paragraph>
          }
        />
      </Card>
    </div>
  );
};

export default FeaturedProduct;
