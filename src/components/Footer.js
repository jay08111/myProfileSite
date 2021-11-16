import React from "react";
import styled from "styled-components";
import { AiTwotoneFire } from "react-icons/ai";
function Footer() {
  return (
    <Wrapper className="footer">
      <h3>
        Copyright &copy; {new Date().getFullYear()}
        <span className="copy-right"> made by hoYeoun byun</span>
      </h3>
      <span className="logo">
        <AiTwotoneFire />
      </span>
    </Wrapper>
  );
}
const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  width: 100vw;
  height: 5rem;
  h3 {
    font-size: 1.6rem;
    color: #fff;
  }
  .copy-right {
    text-transform: capitalize;
    color: hsl(22, 31%, 52%);
  }
  .logo {
    font-size: 2rem;
    color: hsl(22, 31%, 52%);
    display: flex;
    margin-left: 0.35rem;
  }
  @media screen and (max-width: 280px) {
    .copy-right {
      font-size: 1.4rem;
    }
    .logo {
      display: none;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    h3 {
      font-size: 1.58rem;
    }
    .logo {
      display: none;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    h3 {
      font-size: 2rem;
    }
    .logo {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    h3 {
      font-size: 2rem;
    }
    .logo {
      display: none;
    }
  }
`;
export default Footer;
