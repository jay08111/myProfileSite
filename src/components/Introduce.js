import React from "react";
import styled from "styled-components";
import { logoData } from "../data";
function Introduce() {
  return (
    <Wrapper id="main">
      <article className="left">
        <div className="underline"></div>
        <h1>변호연 이라고 합니다.</h1>
        <h1>junior Front-end Web Developer</h1>
        <div className="logo">
          {logoData.map((items) => (
            <a href={items.url} key={items.id}>
              {items.icon}
            </a>
          ))}
        </div>
      </article>
      <article className="right">
        <img
          src={process.env.PUBLIC_URL + "/IMG_3927.JPG"}
          alt="me"
          className="profile-img"
        />
      </article>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  height: 30vh;
  min-height: 80vh;
  text-transform: capitalize;
  .right {
    flex: 1;
  }
  .right .profile-img {
    width: 30vw;
    height: 30vw;
    object-fit: cover;
    border-radius: 20px;
    margin: 5rem 7.2rem;
    z-index: -1;
  }
  .left {
    flex: 1;
    text-align: center;
    margin: auto 0;
  }
  .left h1 {
    margin-bottom: 0.5rem;
  }
  .underline {
    width: 6rem;
    height: 0.2rem;
    background-color: #000;
    margin: 0 auto 1rem auto;
  }
  .logo {
    display: flex;
    font-size: 2.5rem;
    justify-content: space-around;
    width: 30%;
    margin: auto;
  }
  .logo a {
    color: #000;
  }
  @media screen and (max-width: 280px) {
    .left {
      font-size: 1.2rem;
    }
    .right {
      display: none;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .right {
      display: none;
    }
    .left {
      font-size: 1.4rem;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .left {
      font-size: 1.4rem;
    }
    .right .profile-img {
      display: block;
      height: 30vh;
      width: 35vw;
      margin: 12rem 0 0 1rem;
    }
  }
  @media screen and (min-width: 812px) and (max-width: 850px) {
    .right {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    .left {
      font-size: 1.5rem;
    }
    .right .profile-img {
      display: block;
      height: 30vh;
      width: 35vw;
      margin: 17rem 0 0 1rem;
    }
  }
`;
export default Introduce;
