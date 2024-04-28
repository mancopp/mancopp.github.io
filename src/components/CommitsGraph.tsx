import { useEffect } from "react";
import { CommitCard } from "./CommitCard";
import "./CommitsGraph.scss";

import { commits } from "../data/commits";
import { Branch, branches } from "../data/branches";

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

  // Assign lastCommitId to branches
  commits.forEach((commit, index) => {
    commit.branch.lastCommitId = index;
  });

  // Sort branches by lastCommitId in ascending order
  branches.sort((a, b) => (b.lastCommitId ?? 0) - (a.lastCommitId ?? 0));

  // Assign order to branches based on lastCommitId starting from 1
  branches.forEach((branch, index) => {
    branch.order = index + 1;
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
      {branches.map((branch, index) => (
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
    width: `${(props.branch.order ?? 1) * 30}px`,
    height:
      props.branch.lastCommitId &&
      ` ${calculateBranchHeight(props.branch.lastCommitId, 400, 40, 100)}px`,
  } as React.CSSProperties;

  return (
    <div className={`branch-line-${props.branch.name}`} style={style}></div>
  );
};
