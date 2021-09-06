import React from "react";
import styled from "styled-components";
function Career() {
  return (
    <Wrapper id="career">
      <div>
        <h1 className="career-list">경력사항</h1>
      </div>
      <h1>경력은 아직 없습니다.</h1>
      <h1>채용해주신다면 열심히 하겠습니다..</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #fafafa;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 1rem auto;
  flex-wrap: wrap;
  div .career-list {
    margin: 2rem auto;
  }
`;
export default Career;
