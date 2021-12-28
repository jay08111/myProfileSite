import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

function Header() {
  const [navBar, setNavBar] = useState(false);
  useEffect(() => {
    changeBackGround();
  }, []);
  const changeBackGround = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackGround);
  return (
    <Wrapper className={navBar ? "active-nav" : "main-nav"}>
      <div className="logo">
        <Link
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="home"
        >
          Ho-Yeoun
        </Link>
      </div>
      <ul>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link"
        >
          about
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-link"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="career"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="nav-link"
        >
          career
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="nav-link"
        >
          contact
        </Link>
      </ul>
    </Wrapper>
  );
}
const Wrapper = styled.nav`
  .logo {
    display: flex;
    text-transform: uppercase;
    align-items: center;
    margin-right: 20rem;
    font-size: 1.8rem;
  }
  ul {
    display: flex;
    justify-content: space-around;
    width: 43%;
    align-items: center;
    list-style: none;
    font-size: 1.5rem;
  }
  .nav-link {
    cursor: pointer;
    padding: 0.4rem;
    &:hover {
      border-bottom: 1px solid #000;
      margin-top: 0.5rem;
    }
  }
  .home {
    position: absolute;
    left: 5%;
    cursor: pointer;
    font-size: 2.2rem;
  }
  @media screen and (max-width: 1200px) {
    .nav-link {
      font-size: 1.4rem;
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: 1024px) {
    .nav-link {
      font-size: 1.4rem;
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: 767px) {
    .nav-link {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: 280px) {
    .nav-link {
      font-size: 0.92rem;
      margin-top: 1rem;
    }
    .main-nav .logo .home {
      font-size: 1.4rem;
    }
  }
`;
export default Header;
