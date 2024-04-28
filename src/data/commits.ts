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
      "Adventure game I am working on while building framework based on Godot 4. Creating architecture that allows future users not to worry about handling complex state which is often present in games of point-and-click adventure genre. During this project I have learned a lot about caching and general lower level optimization.",
    imageFileName: "blue-venom-cover.jpeg",
    branch: branches[2],
  },
  {
    title: "PROJECT FLOW",
    subtitle: "MAR 2024 - PRESENT",
    description:
      "Adventure game I am working on while building framework based on Godot 4. Creating architecture that allows future users not to worry about handling complex state which is often present in games of point-and-click adventure genre. During this project I have learned a lot about caching and general lower level optimization.",
    imageFileName: "blue-venom-cover.jpeg",
    branch: branches[0],
  },
  {
    title: "EMETH ABSTRACT",
    subtitle: "MAR 2024 - PRESENT",
    description:
      "Adventure game I am working on while building framework based on Godot 4. Creating architecture that allows future users not to worry about handling complex state which is often present in games of point-and-click adventure genre. During this project I have learned a lot about caching and general lower level optimization.",
    imageFileName: "blue-venom-cover.jpeg",
    branch: branches[0],
  },
  {
    title: "SMARTBEES",
    subtitle: "SEP 2023 - APR 2024",
    description:
      "Adventure game I am working on while building framework based on Godot 4. Creating architecture that allows future users not to worry about handling complex state which is often present in games of point-and-click adventure genre. During this project I have learned a lot about caching and general lower level optimization.",
    imageFileName: "job.svg",
    branch: branches[1],
  },
  {
    title: "SSTE",
    subtitle: "JUL 2023 - AUG 2023",
    description:
      "Adventure game I am working on while building framework based on Godot 4. Creating architecture that allows future users not to worry about handling complex state which is often present in games of point-and-click adventure genre. During this project I have learned a lot about caching and general lower level optimization.",
    imageFileName: "blue-venom-cover.jpeg",
    branch: branches[0],
  },
  {
    title: "CHECKOUT",
    subtitle: "JUL 2023",
    description:
      "Adventure game I am working on while building framework based on Godot 4. Creating architecture that allows future users not to worry about handling complex state which is often present in games of point-and-click adventure genre. During this project I have learned a lot about caching and general lower level optimization.",
    imageFileName: "blue-venom-cover.jpeg",
    branch: branches[2],
  },
  {
    title: "PASSWORD MANAGER",
    subtitle: "MAY 2023 - JUN 2023",
    description:
      "Adventure game I am working on while building framework based on Godot 4. Creating architecture that allows future users not to worry about handling complex state which is often present in games of point-and-click adventure genre. During this project I have learned a lot about caching and general lower level optimization.",
    imageFileName: "blue-venom-cover.jpeg",
    branch: branches[0],
  },
  {
    title: "GAME WEBSITE",
    subtitle: "FEB 2023 - MAR 2023",
    description:
      "Adventure game I am working on while building framework based on Godot 4. Creating architecture that allows future users not to worry about handling complex state which is often present in games of point-and-click adventure genre. During this project I have learned a lot about caching and general lower level optimization.",
    imageFileName: "job.svg",
    branch: branches[1],
  },
  {
    title: "MOTION CANVAS",
    subtitle: "JUN 2022 - PRESENT",
    description:
      "Adventure game I am working on while building framework based on Godot 4. Creating architecture that allows future users not to worry about handling complex state which is often present in games of point-and-click adventure genre. During this project I have learned a lot about caching and general lower level optimization.",
    imageFileName: "motion-canvas.svg",
    branch: branches[2],
  },
  {
    title: "ECO CITY",
    subtitle: "JUN 2021 - MAY 2022",
    description:
      "Adventure game I am working on while building framework based on Godot 4. Creating architecture that allows future users not to worry about handling complex state which is often present in games of point-and-click adventure genre. During this project I have learned a lot about caching and general lower level optimization.",
    imageFileName: "job.svg",
    branch: branches[1],
  },
  {
    title: "BLUE VENOM",
    subtitle: "TIMELESS",
    description:
      "Adventure game I am working on while building framework based on Godot 4. Creating architecture that allows future users not to worry about handling complex state which is often present in games of point-and-click adventure genre. During this project I have learned a lot about caching and general lower level optimization.",
    imageFileName: "blue-venom-cover.jpeg",
    branch: branches[2],
  },
];
