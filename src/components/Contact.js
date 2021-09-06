import React from "react";
import styled from "styled-components";
function Contact() {
  return (
    <Wrapper id="contact">
      <form
        action="https://formspree.io/f/xwkawznq"
        method="POST"
        className="form-control"
      >
        <h1 className="contact-heading">Contact me</h1>
        <div className="form-input">
          <input
            type="email"
            name="_replyto"
            placeholder="이메일을 적어주세요!"
          />
          <textarea
            name="message"
            placeholder="보내고싶으신 메세지를 적어주세요!"
          />
          <p>보내주신 메세지는 제 메일함으로 전송됩니다!</p>
        </div>
        <button type="submit">hire him!</button>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 30vh;
  min-height: 80vh;
  overflow: auto;
  .form-control {
    border: 5px solid #000;
    width: 50vw;
    height: 75vh;
    margin: 0 auto;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .contact-heading {
    margin: auto;
    font-size: 2.6em;
  }
  .form-input {
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: center;
    font-size: 1.2rem;
    width: 70%;
  }
  .form-input input {
    height: 2rem;
    font-family: "Klee One", cursive;
    font-size: 1rem;
    border-radius: 5px;
  }
  .form-input p {
    text-align: center;
  }
  button {
    margin: 5rem auto;
    width: 60%;
    font-size: 1.4rem;
    border: 1px solid #000;
    border-radius: 16px;
    box-shadow: none;
    background: none;
    cursor: pointer;
    transition: all 1 linear;
    height: 2rem;
  }
  button:hover {
    background-color: #000;
    color: #fff;
    border-radius: 25px;
  }
  .form-input textarea {
    width: 100%;
    height: 50%;
    margin: 2.5rem auto;
    border: 1px solid #000;
    border-radius: 5px;
    resize: none;
    font-family: "Klee One", cursive;
    font-size: 1rem;
    overflow: hidden;
  }
  @media screen and (max-width: 280px) {
    .form-control {
      width: 85vw;
    }
    .form-control .form-input textarea {
      padding: 1rem;
      margin: auto;
    }
    .form-control .contact-heading {
      font-size: 2rem;
    }
    .form-control .form-input p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .form-control {
      width: 85vw;
    }
    .form-control .form-input textarea {
      padding: 1.2rem;
      margin: auto;
    }
    .contact-heading {
      font-size: 1.3rem;
    }
    .form-input p {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .form-control {
      width: 85vw;
    }
    .form-control .form-input textarea {
      padding: 1.2rem;
      margin: auto;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    .form-control {
      width: 85vw;
    }
    .form-control .form-input textarea {
      padding: 1.2rem;
      margin: auto;
    }
  }
  @media screen and (max-height: 280px) {
    .form-control {
      height: 120vh;
      width: 85vw;
    }
    .contact-heading {
      display: block;
      font-size: 2rem;
      padding: 3.4rem;
    }
    .form-control .form-input textarea {
      padding: 2rem;
      margin: auto;
    }
    .form-input p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .form-control {
      width: 50vw;
      height: 80vh;
      margin: 4rem auto;
    }
    .form-input input {
      padding: 1.1rem;
    }
    .contact-heading {
      margin: 2rem auto;
      font-size: 2.6rem;
    }
    .form-control .form-input textarea {
      padding: 1.2rem;
      margin: 2.4rem auto;
    }
  }
  @media screen and (min-height: 319px) and (max-height: 414px) {
    .form-control {
      height: 100vh;
      width: 85vw;
    }
    .contact-heading {
      font-size: 2rem;
    }
    .form-control .form-input textarea {
      padding: 1.2rem;
      margin: auto;
    }
    .form-input p {
      font-size: 1rem;
    }
  }
`;
export default Contact;
