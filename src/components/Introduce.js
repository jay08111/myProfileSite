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
          {logoData.map(({ id, url, icon }) => (
            <span key={id} onClick={() => window.open(url)}>
              {icon}
            </span>
          ))}
        </div>
      </article>
      <article className="right">
        <img
          src={process.env.PUBLIC_URL + "/byunhoyeoun.jpg"}
          alt="me"
          className="profile-img"
        />
      </article>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  padding: 5rem 0;
  text-transform: capitalize;
  min-height: 100vh;
  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right .profile-img {
    width: 30vw;
    height: 70vh;
    object-fit: cover;
    border-radius: 20px;
    z-index: -1;
  }
  .left {
    flex: 1;
    text-align: center;
    margin: auto 0;
    font-size: 1.6rem;
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
    margin: 0 auto;
  }
  .logo span {
    color: #000;
    cursor: pointer;
    margin-top: 0.35rem;
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
    .right {
      display: flex;
      align-items: center;
    }
    .right .profile-img {
      height: 70vh;
      width: 40vw;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    .left {
      font-size: 1.5rem;
    }
    .right .profile-img {
      height: 70vh;
      width: 40vw;
    }
    .right {
      display: flex;
      align-items: center;
    }
  }
`;
export default Introduce;
