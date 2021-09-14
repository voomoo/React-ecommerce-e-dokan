import React, { useState, useEffect } from "react";
import { Carousel, Divider, Card, Button, Typography } from "antd";
import FeaturedProduct from "./featuredProduct/FeaturedProduct";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./featuredProducts.css";
import { getProducts } from "./helper";
import { useDispatch } from "react-redux";
import { setProductsData } from "../../redux/reducers/productSlice";

const {Meta} = Card;

const FeaturedProducts = ({ sectionName, reverse }) => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(4);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts(setProducts, setLoader);
    dispatch(setProductsData(products));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loader]);

  useEffect(() => {
     setScreenWidth(window.innerWidth);
     console.log(screenWidth)

     const slidesToShowCount = () =>{
      if(screenWidth < 1440 && screenWidth > 1024){
        return 3;
      } else if (screenWidth < 1024 && screenWidth > 592){
        return 2;
      } else if (screenWidth < 592){
        return 1;
      } else{
        return 4;
      }
    }
    
    setSlides(slidesToShowCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window])

  

  const responsive = [
    {
      breakpoint: 1440,
      settings:{
        slidesToShow: 2,
      }
    }
  ]
  
  return (
    <div className="container featured__products">
      <Divider>{sectionName}</Divider>
      {loader ? (
        <Carousel
          
          autoplaySpeed={2500}
          autoplay
          slidesToShow={4}
          slidesToScroll={1}
          arrows
          nextArrow={<FaArrowCircleRight className="arrow__right" />}
          prevArrow={<FaArrowCircleLeft />}
          style={{ height: "400px" }}
        >
          <Card
            loading={loader}
            style={{ width: 300 }}
            actions={[
              <Button >Add to Cart</Button>,
              <Button >Add to Wishlist</Button>,
            ]}
          >
            <Meta
              title="Some Title"
              description={
                <Typography.Paragraph
                  ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                >
                  Some Description
                </Typography.Paragraph>
              }
            />
          </Card>
          <Card
            loading={loader}
            style={{ width: 300 }}
            actions={[
              <Button >Add to Cart</Button>,
              <Button >Add to Wishlist</Button>,
            ]}
          >
            <Meta
              title="Some Title"
              description={
                <Typography.Paragraph
                  ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                >
                  Some Description
                </Typography.Paragraph>
              }
            />
          </Card>
          <Card
            loading={loader}
            style={{ width: 300 }}
            actions={[
              <Button >Add to Cart</Button>,
              <Button >Add to Wishlist</Button>,
            ]}
          >
            <Meta
              title="Some Title"
              description={
                <Typography.Paragraph
                  ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                >
                  Some Description
                </Typography.Paragraph>
              }
            />
          </Card>
          <Card
            loading={loader}
            style={{ width: 300 }}
            actions={[
              <Button >Add to Cart</Button>,
              <Button >Add to Wishlist</Button>,
            ]}
          >
            <Meta
              title="Some Title"
              description={
                <Typography.Paragraph
                  ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                >
                  Some Description
                </Typography.Paragraph>
              }
            />
          </Card>
        </Carousel>
      ) : (
        <Carousel
          responsive={responsive}
          autoplaySpeed={2500}
          autoplay
          slidesToShow={slides}
          slidesToScroll={1}
          arrows
          nextArrow={<FaArrowCircleRight className="arrow__right" />}
          prevArrow={<FaArrowCircleLeft />}
          style={{ height: "400px" }}
        >
          {reverse
            ? products
                .reverse()
                .map((product) => (
                  <FeaturedProduct
                    key={product?.id}
                    id={product?.id}
                    img={product?.image}
                    title={product?.title}
                    desc={product?.description}
                    loading={loader}
                  />
                ))
            : products.map((product) => (
                <FeaturedProduct
                  key={product?.id}
                  id={product?.id}
                  img={product?.image}
                  title={product?.title}
                  desc={product?.description}
                  loading={loader}
                />
              ))}
        </Carousel>
      )}

      <Button style={{float:"right"}}>View all</Button>
    </div>
  );
};

export default FeaturedProducts;
