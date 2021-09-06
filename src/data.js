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
    img: `${process.env.PUBLIC_URL + "/ProfileSite.png"}`,
    name: "Profile Project",
    description: "제 프로필 프로젝트 입니다.",
  },
];
