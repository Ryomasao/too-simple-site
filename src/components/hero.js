import React from "react"
import mv from "../images/main.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class Hero extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    }
    return (
      <Slider {...settings}>
        <div>
          <img src={mv} alt="mv" />
        </div>
        <div>
          <img src={mv} alt="mv" />
        </div>
      </Slider>
    )
  }
}

export default Hero
