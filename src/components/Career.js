import React from "react";
import styled from "styled-components";
function Career() {
  return (
    <Wrapper id="career">
      <article>
        <div className="career-list">
          <h1 className="heading-one">경력사항</h1>
          <div className="underline"></div>
        </div>
        <div className="heading">
          <h2>경력은 아직 없습니다.</h2>
          <h2>
            채용해주신다면 정말 열심히 배우고 성장하는 모습을 보여드리겠습니다.
          </h2>
        </div>
        <div className="description">
          <p>
            저는 무엇을 만드는것을 정말 좋아하며 , 개발의 매력은 컴퓨터를 통해
            무엇인가를 만들기때문에 손재주가 필요없이 훌륭한 결과물을 뽑을수
            있는것 이라고 생각합니다,
          </p>
          <p>
            저는 회사의 지원하게 된 동기가 , 단순히 돈이 목적이 아닌 저 자신의
            개발자로서 성장의 가능성을 보고 지원하였습니다,
          </p>
          <p>
            배움의 길에는 왕도가 없다지만 ,저는 평생의 기간을 놓고 본다면
            하루빨리 독학하는 방법을 터득하는것이 가장빠른길 이라고
            생각했습니다.
          </p>
          <p>
            그것이 가장 빠르게 저를 성장시킬수 있는 방법이라고 생각했습니다,
          </p>
          <p>
            아무리 주위에 좋은 선생님 혹은 좋은 선배 , 사수가 있다 한들 제가 못
            받아들여 터득하지 못한다면 아무 소용이 없다고 생각해 , 저 홀로
            터득하는 방법을 먼저 깨우쳤습니다.
          </p>
          <p>
            개발을 좋아한다면 , 개발이 일이아닌 항상 새로운것을 찾아다니는
            프로그래밍이라는 미지의 늪을 헤쳐 나가는 , 세상을 헤쳐나가는 훌륭한
            개발자 , 창업가가 될 수 있다고 생각합니다.
          </p>
          <p>
            어떤 각오도 되어있습니다 , 채용만해주신다면 열심히, 정말 열심히
            하겠습니다.
          </p>
        </div>
      </article>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  min-height: 100vh;
  background-color: #fafafa;
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .career-list {
    margin: 0 auto 2rem auto;
    text-align: center;
    font-size: 2rem;
    .heading-one {
      display: inline-block;
      margin-top: 4rem;
      font-size: 2.4rem;
    }
    .underline {
      width: 6rem;
      height: 0.2rem;
      background-color: #000;
      margin: 0.2rem auto 1rem auto;
    }
  }
  .heading {
    text-align: center;
    margin-bottom: 1.3rem;
    font-size: 1rem;
    h2 {
      font-weight: 300;
    }
  }

  .description {
    text-align: center;
    font-family: "Poppins", sans-serif;
    p {
      font-size: 1.5rem;
      line-height: 2.2;
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 4rem 2.2rem;
    .heading {
      font-size: 1.2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 1024px) {
    article {
      padding: 3rem 2rem;
    }
    .heading-one {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.6rem;
      line-height: 2.2;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 2rem;
    p {
      font-size: 1.3rem;
      line-height: 2;
    }
  }
  @media screen and (max-width: 360px) {
    padding: 2rem 1.1rem;
    p {
      font-size: 1rem;
      line-height: 2;
    }
  }
`;
export default Career;
