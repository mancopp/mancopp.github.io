import { useEffect } from "react";
import { CommitCard } from "./CommitCard";
import "./CommitsGraph.scss";

type Branch = {
  name: string;
  color: string;
  order: number;
  lastCommitId?: number;
};

export type Commit = {
  title: string;
  subtitle?: string;
  description?: string;
  branch: Branch;
};

export const CommitsGraph = () => {
  useEffect(() => {
    const getElementsInArea = () => {
      const viewportHeight = document.documentElement.clientHeight;

      const handleScroll = () => {
        const elements = document.querySelectorAll(".commit-card");
        elements.forEach((elm) => {
          const pos = elm.getBoundingClientRect();
          const topPerc = (pos.top / viewportHeight) * 100;
          const bottomPerc = (pos.bottom / viewportHeight) * 100;
          const middle = (topPerc + bottomPerc) / 2;
          const inViewport = middle > 40 && middle < 60;

          elm.classList.toggle("highlight", inViewport);
        });
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    };

    getElementsInArea();
  }, []);

  const branches: Branch[] = [
    {
      name: "university",
      color: "#449DD1",
      order: 3,
    },
    {
      name: "job",
      color: "#D1603D",
      order: 2,
    },
    {
      name: "personal",
      color: "#EEC643",
      order: 1,
    },
  ];

  const commits: Commit[] = [
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

  commits.forEach((commit, index) => {
    const b = commit.branch;
    b.lastCommitId = index;
  });

  return (
    <div className="commits-graph">
      <h1>Commits graph</h1>
      {commits.map((commit, index) => (
        <CommitCard
          key={index}
          commit={commit}
          isNextCommitSameBranch={
            index < commits.length - 1 &&
            commits[index + 1].branch === commit.branch
          }
        />
      ))}
      {branches
        .sort((a, b) => b.lastCommitId - a.lastCommitId)
        .map((branch, index) => (
          <BranchLine key={index} branch={branch} />
        ))}
    </div>
  );
};

const BranchLine = (props: { branch: Branch }) => {
  const calculateBranchHeight = (
    lastCommitId: number,
    commitHeight: number,
    gap: number = 0,
    offsetTop: number = 0
  ) => (lastCommitId + 1) * (commitHeight + gap) + 150 + offsetTop;

  const style = {
    borderLeft: `10px solid ${props.branch.color}`,
    borderBottom: `10px solid ${props.branch.color}`,
    width: `${props.branch.order * 30}px`,
    height:
      props.branch.lastCommitId &&
      ` ${calculateBranchHeight(props.branch.lastCommitId, 400, 40, 100)}px`,
  } as React.CSSProperties;

  return (
    <div className={`branch-line-${props.branch.name}`} style={style}></div>
  );
};
