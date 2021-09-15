import { FiInstagram, FiFacebook } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
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
];
export const projectData = [
  {
    id: 1,
    img: `${process.env.PUBLIC_URL + "/profilepic.png"}`,
    name: "Profile Project",
    description: "제 프로필 프로젝트 입니다.",
    url: "https://friendly-noyce-3b504d.netlify.app/",
  },
  {
    id: 2,
    img: `${process.env.PUBLIC_URL + "/todoList.png"}`,
    name: "Todo list",
    description: "미니프로젝트 투두리스트 입니다.",
    url: "https://thirsty-curran-65c1de.netlify.app/",
  },
];
