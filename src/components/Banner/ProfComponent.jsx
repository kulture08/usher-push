import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Concilia Ndlovu</h1>
          <h3>UX/UI Designer and graphic designer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            iusto. Adipisci in qui officia provident tenetur sequi, deserunt
            corporis quos?
          </p>
          <button>Let's talk</button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img src="./projects/globe.svg" alt="profile" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 1025px) {
    height: 50vh;
    max-width: 100%;
  }
  @media (max-width: 840px) {
    /* width: 90%; */
    height: 50vh;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    height: 100vh;
    padding-top: 0rem;
  }
  @media (max-width: 400px) {
    height: 80vh;
    padding-top: 3rem;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
    width: 70%;

    @media (max-width: 1025px) {
      width: unset;
    }
    @media (max-width: 700px) {
      display: none;
    }
    @media (max-width: 400px) {
      display: block;
    }
    @media (max-width: 330px) {
      display: none;
    }
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
    @media (max-width: 780px) {
      margin-top: 1rem;
    }
    @media (max-width: 700px) {
      margin-top: 1rem;
    }
    @media (max-width: 400px) {
      margin-top: 2rem;
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 780px) {
    margin-top: 1rem;
  }
  @media (max-width: 700px) {
    display: none;
  }
  @media (max-width: 400px) {
    margin-top: 1rem;
    display: block;
  }
  p {
    font-size: 0.9rem;
    width: unset;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    @media (max-width: 400px) {
      margin-top: 1rem;
    }
    @media (max-width: 350px) {
      margin-top: 2.5rem;
    }
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 12rem;
    margin-top: 4rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 1025px) {
      width: 11rem;
      margin-top: 4rem;
    }
    @media (max-width: 780px) {
      width: 7rem;
      margin-top: 4rem;
    }
    @media (max-width: 690px) {
      width: 7rem;
      margin-top: -0;
    }

    @media (max-width: 600px) {
      display: none;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
