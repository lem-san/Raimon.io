import quickfire from '../assets/quickfire.png'
import website from '../assets/website.png'

const project = {
  en: [
    {
      id: 1,
      title: "Raimon.io (v1)",
      link: "https://raimon-io.netlify.app/",
      thumbnail: website,
      desc: "A personal portfolio site built in React and Tailwind.",
      technicalSkills: ["HTML", "React", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "QuickFire Vocabulary App",
      link: "https://quickfire.netlify.app/",
      thumbnail: quickfire,
      desc: "An ESL vocabulary drilling app built in React, aimed as a classroom tool for students to articulate vocabulary against various timed challenges.",
      technicalSkills: ["HTML & CSS", "React", "Google Cloud Services"]
    }
  ],
  ja: [
    {
      id: 1,
      title: "Raimon.io（v1）",
      link: "https://raimon-io.netlify.app/",
      thumbnail: website,
      desc: "ReactとTailwindで作成した個人ポートフォリオサイト。",
      technicalSkills: ["HTML", "React", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "QuickFire 語彙アプリ",
      link: "https://quickfire.netlify.app/",
      thumbnail: quickfire,
      desc: "Reactで作られたESL語彙ドリルアプリ。教室での使用を想定し、生徒がタイムチャレンジ形式で語彙を発音する練習ができるツールです。",
      technicalSkills: ["HTML & CSS", "React", "Google Cloud Services"]
    }
  ]
};

export default project;
