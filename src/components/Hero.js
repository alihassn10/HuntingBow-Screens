import React from "react";
import { useGlobalContext } from "../Context";
import styled from "styled-components";
import hero from "../assets/hero.jpeg";
import { Button } from "react-bootstrap"; 
const Hero = () => {
    const {closeSubmenu}=useGlobalContext()

  return (
    <HeroContainer >
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Explore our hunting products and accessories.</p>
        <Button className="shop-now-btn" variant="danger">
          Shop Now
        </Button>
      </div>
      <img src={hero} alt="das" className="hero-img" />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  flex-direction: column; /* Added to stack elements vertically */
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  text-align: center;
  position: relative; /* Ensure the z-index works as expected */

  .hero-content {
    z-index: 1;
  }

  .hero-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5; /* Adjust opacity as desired */
  }

  .shop-now-btn {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: opacity 0.3s;
  }

  .shop-now-btn:hover {
    opacity: 0.8;
  }
`;

export default Hero;
