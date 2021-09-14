import { Carousel, Button } from 'antd'
import React from 'react'
import "./appCarousel.css"

const AppCarousel = () => {
    return (
        <Carousel autoplay autoplaySpeed={3500}>
        <div className="carousel__slide">
          <h1 >
              Get Premium Watches at Affordable Price
          </h1>
          <Button size="large">Shop Now</Button>
        </div>
        <div className="carousel__slide">
          <h1 >
              Get Premium Watches at Affordable Price
          </h1>
          <Button size="large">Shop Now</Button>
        </div>
        <div className="carousel__slide">
          <h1 >
              Get Premium Watches at Affordable Price
          </h1>
          <Button size="large">Shop Now</Button>
        </div>
        <div className="carousel__slide">
          <h1 >
              Get Premium Watches at Affordable Price
          </h1>
          <Button size="large">Shop Now</Button>
        </div>
        
      </Carousel>
    )
}

export default AppCarousel
