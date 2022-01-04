  <div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://pastashop-hoyeoun.netlify.app/">
    <img src="./images/logo.png" alt="Logo" width="100" height="100">
  </a>

<h3 align="center">Profile Site</h3>

  <p align="center">
  주니어 개발자 변호연의 사진 , 각종 sns아이디 , 자기소개 , 경력사항 , contact를 할수 있는 웹사이트 입니다 .
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">
  
</div>
<p>React , Styled-components 를 이용해서 간단한 마크업 구현과 react-scroll 라이브러리를 이용한 프로필 사이트 입니다 . </p>

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- React
- Styled-components
- react-scroll

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

프로젝트 실행방법

```
npm install --global yarn

yarn start
```

### Installation

<ol>
<li>Clone the repo</li>

```
https://github.com/jay08111/myProfileSite.git
```

<li> Install yarn packages</li>

```
yarn install
```

</ol>

## Description

<p>전반적인 코드의 내용을 해석하고 , 제가 왜 이렇게 작성하였는지 , 어떤 문제들을 겪고 어떻게 해결하였는지 서술 해보도록 하겠습니다 . </p>
<ol>
<li>React^17.0.2</li>
facebook의 라이브러리인 React를 이용해서 개발 진행 하였습니다 . (Javascript)
<li>react-scroll^1.8.4</li>
클릭하면 해당 페이지로 이동애니메이션을 줄수 있는 라이브러리를 사용했습니다 .
<li>styled-components^5.3.1</li>
각 컴포넌트마다 css모듈화를 통해서 더욱더 정비성이 용이한 css를 작성하기 위해서 styled-components를 사 용했습니다 .
<li>react-icons^4.2.0</li>
아이콘 라이브러리 입니다.
</ol>

```
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
export const logoData = [
  {
    id: 1,
    url: "https://www.instagram.com/idk_imjustlazy/",
    icon: <FiInstagram />,
  },
  {
    id: 2,
    url: "https://www.facebook.com/profile.php?id=100006950972262",
    icon: <FiFacebook />,
  },
  {
    id: 3,
    url: "https://github.com/jay08111",
    icon: <AiFillGithub />,
  },
  {
    id: 4,
    url: "https://jay0811.tistory.com/",
    icon: <FaBlogger />,
  },
];
export const projectData = [
  {
    id: 1,
    img: `${process.env.PUBLIC_URL + "/profilepic.png"}`,
    name: "Profile Project",
    description: "제 프로필 프로젝트 입니다.",
    url: "https://whoami-hoyeoun.netlify.app/",
  },
  {
    id: 2,
    img: `${process.env.PUBLIC_URL + "/todoList.png"}`,
    name: "Todo list",
    description: "미니프로젝트 투두리스트 입니다.",
    url: "https://todo-list-hoyeoun.netlify.app/",
  },
  {
    id: 3,
    img: `${process.env.PUBLIC_URL + "/pastaShop.png"}`,
    name: "Pasta Shop",
    description: "바닐라 자바스크립트를 이용한 스파게티 레스토랑 입니다.",
    url: "https://pastashop-hoyeoun.netlify.app/",
  },
  {
    id: 4,
    img: `${process.env.PUBLIC_URL + "/theBar.png"}`,
    name: "The Bar",
    description: "리액트와 리덕스 툴킷을 이용한 바 사이트 입니다.",
    url: "https://thebar-react.netlify.app/",
  },
];

```

<p>항목을 추가하면 동적으로 렌더링을 시켜주기 위해 따로 js파일을 만들어서 export를 한후 , import 를 시켜준 후 useState([])에 넣어 map을 돌려서 display를 해줄때 사용했습니다.</p>

```
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

export default Contact;

```

<p>formspree라는 외부 라이브러리를 이용해 제 메일함에 메일을 보낼수 있는 form을 작성하였습니다.</p>

```
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
```

<p>new Date 객체를 이용해 년도가 바뀌면 동적으로 햇수가 바뀌도록 설정했습니다 .</p>

```
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
```

<p>navbar라는 state에 boolean값을 넣어서 scroll을 했을때 80이상 수치를 넘어서면 true로 바꾸는 함수를 만들었습니다 . 그럼으로써 navbar의 색과 기타 수치를 css로 바꿀 수 있습니다 </p>

## url

프로젝트 url: [https://whoami-hoyeoun.netlify.app/](https://whoami-hoyeoun.netlify.app/)

## 긴글 읽어주셔서 감사합니다

<p align="right">(<a href="#top">back to top</a>)</p>
