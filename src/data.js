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
];
