import React from "react";
import styled from "styled-components";
import { projectData } from "../data";
function Portfolio() {
  return (
    <Wrapper id="portfolio">
      <h1>Projects</h1>
      <div className="underline"></div>
      <>
        {projectData.map((item) => {
          const { id, img, name, description } = item;
          return (
            <article key={id}>
              <div className="data-div">
                <img src={img} alt={name} />
                <div className="image-overlay">
                  <div className="title">
                    <p className="image_description">{description}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  height: 80vh;
  overflow: auto;
  h1 {
    text-align: center;
    font-size: 2.6rem;
    margin: 0.5rem 0.7rem;
  }
  .data-div {
    text-align: center;
  }
  .data-div img {
    width: 35%;
    height: 20rem;
    border: 1px solid #000;
    margin: 2rem auto;
    border-radius: 10px;
    transition: transform 2s;
    position: relative;
    display: block;
    z-index: -1;
  }

  .data-div img:hover {
    opacity: 0.4;
    background-color: #000;
    cursor: pointer;
  }
  .underline {
    width: 6rem;
    height: 0.12rem;
    background-color: #000;
    margin: 0 auto 1rem auto;
  }
  @media screen and (max-width: 280px) {
    h1 {
      font-size: 2rem;
    }
    .data-div img {
      width: 55%;
      height: 30vh;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    h1 {
      font-size: 2rem;
    }
    .data-div img {
      width: 55%;
      height: 30vh;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    h1 {
      font-size: 2rem;
    }
    .data-div img {
      width: 55%;
      height: 30vh;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    h1 {
      font-size: 2rem;
    }
    .data-div img {
      width: 55%;
      height: 30vh;
    }
  }
  @media screen and (min-width: 1200px) {
    .data-div img {
      object-fit: cover;
    }
  }
`;

export default Portfolio;
