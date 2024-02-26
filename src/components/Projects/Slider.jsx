import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
  {
    img: "./projects/Screenshot 2024-02-22 at 09.13.44.png",
    description: "Car Rental",
    disc: "Secure Car Rental at the Best Price Guaranteed Today",
    link:"https://usher-carrental.vercel.app/home"
  },
  {
    img: "./projects/Screenshot 2024-02-23 at 14.32.27.png",
    description: "Sub-Saharan Africa",
    disc: "One of the leading financial technology companies in Sub-Saharan Africa.",
    link:"https://usher-archs.vercel.app/"
  },
  {
    img: "./projects/Arete.png",
    description: "Arete",
    disc: "Equity investor supporting businesses from early to established stages, offering follow-on capital.",
    link:"https://usher-arete.vercel.app/"
  },
  {
    img: "./projects/Screenshot 2024-02-23 at 14.39.27.png",
    description: "EatWell",
    disc: "Come and eat well with our delicious & healthy foods. ",
    link:"https://usher-eatwell.vercel.app/"
  },
 


];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`