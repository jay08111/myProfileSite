import React from "react";
import styled from "styled-components";
import { projectData } from "../data";
function Projects() {
  return (
    <Wrapper id="portfolio">
      <h1>Projects</h1>
      <div className="underline"></div>
      <div className="grid">
        {projectData.map((item) => {
          const { id, img, name, description, url } = item;
          return (
            <article key={id}>
              <div className="data-div">
                <img src={img} alt={name} onClick={() => window.open(url)} />
                <p>{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  min-height: 100vh;
  padding: 5rem 0;
  overflow: hidden;
  h1 {
    text-align: center;
    font-size: 2.6rem;
    margin: 0.5rem 0.7rem;
  }
  .underline {
    width: 6rem;
    height: 0.2rem;
    background-color: #000;
    margin: 0 auto 1rem auto;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .data-div {
      text-align: center;
      img {
        width: 70%;
        height: 20rem;
        border: 1px solid #000;
        margin: 3rem auto;
        border-radius: 10px;
        z-index: -1;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 2.6rem;
    }
    .data-div img {
      width: 55%;
      height: 30vh;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 2rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      img {
        width: 55%;
        height: 30vh;
      }
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    .data-div img {
      width: 55%;
      height: 30vh;
    }
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
`;

export default Projects;
