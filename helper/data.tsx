import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPhp,
  FaMagento,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMicrosoftword,
  SiTailwindcss,
  SiNativescript,
  SiFramer,
  SiGraphql,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiLaravel,
  SiNestjs,
  SiExpress,
  SiBootstrap,
} from "react-icons/si";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programing Languages",
        stage: "",
        icons: [<FaJs key={1} />, <FaPhp key={2} />],
      },
      {
        title: "Database",
        stage: "",
        icons: [
          <SiMysql key={3} />,
          <SiPostgresql key={4} />,
          <SiMongodb key={5} />,
          <SiMongoose key={6} />,
        ],
      },
      {
        title: "Web Framework",
        stage: "",
        icons: [
          <SiLaravel key={7} />,
          <SiNestjs key={8} />,
          <SiExpress key={9} />,
        ],
      },
      {
        title: "Css Framework",
        stage: "",
        icons: [<SiBootstrap key={10} />, <SiTailwindcss key={11} />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Senior Developer  - Cloudax",
        stage: "Feb 2024 - Present",
        icons: [],
      },
      {
        title: "Fullstack Developer - Freelance",
        stage: "May 2018 - Present",
        icons: [],
      },
      {
        title: "Web Developer  - Screenpages (Contract)",
        stage: "Jan 2023 - May 2023",
        icons: [],
      },
      {
        title: "Web Developer  - Corra (Contract)",
        stage: "Dec 2021 - Dec 2022",
        icons: [],
      },
      {
        title: "Web Developer  - Scandiweb (Contract)",
        stage: "May 2021 - June 2023",
        icons: [],
      },
      {
        title: "Fullstack Developer - Techclub Ng (Freelance)",
        stage: "Mar 2022 - Present",
        icons: [],
      },
      {
        title: "Fullstack Developer/Tutor - Techclub Ng",
        stage: "Feb 2020 - 2022",
        icons: [],
      },
      {
        title: "Intern - Linuxjobber",
        stage: "Nov 2019 - Feb 2020",
        icons: [],
      },
      {
        title: "Intern - Rich Technologies",
        stage: "Feb 2017 - December 2017",
        icons: [],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "BSc. Computer Science - University Of Benin",
        stage: "",
        icons: [],
      },
    ],
  },
];

export const baseUrl = "https://myspheet.vercel.app";
