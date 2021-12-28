import React from "react";

import styled from "styled-components";
function About() {
  return (
    <Wrapper id="about">
      <article className="about">
        <h1>Who am i?</h1>
        <div className="underline"></div>
        <div className="description">
          <p>안녕하십니까 , 리액트 개발자 지망생 변호연이라고 합니다.</p>
          <p>저는 독학으로 리액트를 약 5개월가량 공부하였고 ,</p>
          <p>
            돈보다는 실력을 기를수 있는 , 더 나아가서 풀스택 개발자로 성장 할 수
            있는 회사에서 일을 하고 싶습니다.
          </p>
          <p>
            저는 더욱 더 높은 실력을 추구하며 , 항상 어떻게 발전 할수 있는지를
            고민합니다.
          </p>
          <p>
            사람과 사람사이의 관계를 중시하며 , 커뮤니케이션의 중요성을
            인지하고있습니다.
          </p>
          <p>
            끊임없는 반복의 힘을 믿고있습니다 , 포기하지않으면 해결됨을
            겪었습니다.
          </p>
          <p>인생의 모토는 끈기 , 칠전팔기 , 근성 입니다.</p>
          <p>한 곳에서 오래 일하며 배우는것을 희망합니다.</p>
        </div>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  background-color: #fafafa;
  min-height: 100vh;
  .about {
    text-align: center;
    h1 {
      padding-top: 1rem;
      font-size: 2.6rem;
    }
    .description {
      text-align: center;
      margin: 5.5rem auto;
      font-size: 1.8rem;
      line-height: 2;
    }
    .underline {
      width: 6rem;
      height: 0.2rem;
      background-color: #000;
      margin: 0.7rem auto 1rem auto;
    }
  }

  @media screen and (max-width: 1200px) {
    .about {
      h1 {
        font-size: 3rem;
      }
      .underline {
        margin: 0.4rem auto 2rem auto;
      }
      .description {
        font-size: 1.6rem;
        margin: 0;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    /*About component*/
    .about {
      h1 {
        font-size: 3rem;
      }
      .underline {
        margin: 0.4rem auto 2rem auto;
      }
      .description {
        font-size: 1.6rem;
        margin: 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .about {
      h1 {
        font-size: 2rem;
      }
      .underline {
        margin: 0.4rem auto 0.8rem auto;
      }
      .description {
        font-size: 1.1rem;
        margin: 0;
      }
    }
  }
  @media screen and (max-width: 280px) {
    /*About component*/
    .about {
      h1 {
        font-size: 1.5rem;
      }
      .underline {
        margin: 0.4rem auto 0.8rem auto;
        height: 0.05rem;
      }
      .description {
        font-size: 1.1rem;
        margin: 0;
      }
    }
  }
`;
export default About;
