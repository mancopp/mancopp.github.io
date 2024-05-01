import { Branch, branches } from "./branches";

export interface Commit {
  title: string;
  subtitle?: string;
  description?: string;
  imageFileName: string;
  branch: Branch;
}

export const commits: Commit[] = [
  {
    title: "MANCOPP",
    subtitle: "APR 2024 - PRESENT",
    description:
      "Personal static portfolio website, hosted with the help of GitHub Pages. Built with React.js, in fact, you are looking at it right now. Wonderful, isn't it? :D",
    imageFileName: "mancopp-com.png",
    branch: branches[2],
  },
  {
    title: "PROJECT FLOW",
    subtitle: "MAR 2024 - PRESENT",
    description:
      "Project Management Web Solution, an artifact of Team Project university course. I am working on it with my colegue. So far, my contributions include initializing dockerized Symfony project with MySQL database, architecting database, creating UI/UX mockups, configuring Tailwind and managing front-end/back-end dependencies.",
    imageFileName: "project-flow.png",
    branch: branches[0],
  },
  {
    title: "EMETH ABSTRACT",
    subtitle: "MAR 2024 - PRESENT",
    description:
      "Adventure game I am working on along with building framework based on Godot 4. Framework-wise I am creating architecture that allows future users not to worry about handling complex state which is often present in games of point-and-click adventure genre. During this project I have learned a lot about caching and general lower level optimization.",
    imageFileName: "emeth-abstract.png",
    branch: branches[0],
  },
  {
    title: "SMARTBEES",
    subtitle: "SEP 2023 - APR 2024",
    description:
      "Full-time developer at a software house. As a part of the job, I communicated with clients, making technical planning and estimation of solutions. Developed an efficient front-end in Vue.js, learned about SEO and web site performance optimization. Navigated and operated on different stage environments using Linux SSH CLI. Demonstrated ability to quickly adapt to new projects and environments.",
    imageFileName: "job.svg",
    branch: branches[1],
  },
  {
    title: "SSTE",
    subtitle: "JUL 2023 - AUG 2023",
    description:
      "University-lead Internship. During this period, I designed and developed a robust navigational layout for commercial website in React.js. I had to quickly learn the way of using the REST API to fetch data from the backend and display it in React App.",
    imageFileName: "job.svg",
    branch: branches[0],
  },
  {
    title: "CHECKOUT",
    subtitle: "JUL 2023",
    description:
      "Web application built using Laravel, Vue.js, and Tailwind CSS to provide a user-friendly checkout form. The form allows customers to input various details related to their account, personal data, delivery address, and choose delivery and payment methods. Also users have the option to apply discount codes to avail discounts. The form validates user inputs both on the frontend and backend.",
    imageFileName: "checkout.png",
    branch: branches[2],
  },
  {
    title: "PASSWORD MANAGER",
    subtitle: "MAY 2023 - JUN 2023",
    description:
      "Java Swing desktop application that allows users to securely store passwords for different accounts and services. The app follows an object-oriented programming (OOP) approach and employs the Model-View-Controller (MVC) architecture. User information and password records are encrypted for enhanced security. Users can choose between two encryption algorithms: AES or Blowfish.",
    imageFileName: "password-manager.png",
    branch: branches[0],
  },
  {
    title: "GAME WEBSITE",
    subtitle: "FEB 2023 - MAR 2023",
    description:
      "Build back-end for a game website based on Apache in vanilla PHP. Suggested the architecture to fulfill clients needs and implemented it while communicating with the front-end developer. Learned the ways to implement commerce system and used the Stripe API to handle microtransactions.",
    imageFileName: "job.svg",
    branch: branches[1],
  },
  {
    title: "MOTION CANVAS",
    subtitle: "JUN 2022 - PRESENT",
    description:
      "Actively contributing to open source TypeScript library for creating animated videos. Communicating with community and maintainers on Discord. Improving documentation, helping out with issues and creating my own component library for MotionCanvas",
    imageFileName: "motion-canvas.svg",
    branch: branches[2],
  },
  {
    title: "ECO CITY",
    subtitle: "JUN 2021 - MAY 2022",
    description:
      "Part-time trainee job at air quality monitoring company. Received basic HTML, CSS and JavaScript knowledge and followed best UI/UX practices. Learned about Git and team work tools. Maintained company website.",
    imageFileName: "job.svg",
    branch: branches[1],
  },
  {
    title: "BLUE VENOM",
    subtitle: "TIMELESS",
    description:
      "Worked on concept music album featuring six tracks, each having it's own symbol. From the beginning, it was a project, portraying struggles and challenges that a young artist is facing. Although, with time it morphed into something else (work in progress). No connection to Software Engineering, unfortunately :D",
    imageFileName: "blue-venom-cover.jpeg",
    branch: branches[2],
  },
];
