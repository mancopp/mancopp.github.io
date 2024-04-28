import { Branch, branches } from "./branches";

export interface Commit {
  title: string;
  subtitle?: string;
  description?: string;
  branch: Branch;
}

export const commits: Commit[] = [
  {
    title: "PROJECT FLOW",
    subtitle: "Sep 2023 - Present",
    description:
      "Adventure game I am working on while building framework based on Godot 4. Creating architecture that allows future users not to worry about handling complex state which is often present in games of point-and-click adventure genre. During this project I have learned a lot about caching and general lower level optimization.",
    branch: branches[0],
  },
  {
    title: "Uni blah blah",
    branch: branches[0],
  },
  {
    title: "Job blah",
    branch: branches[1],
  },
  {
    title: "Uni blah blah blah",
    branch: branches[0],
  },
  {
    title: "Personal blah",
    branch: branches[2],
  },
];
