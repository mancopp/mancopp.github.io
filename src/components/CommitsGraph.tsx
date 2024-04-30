import { CommitCard } from "./CommitCard";
import "./CommitsGraph.scss";

import { commits } from "../data/commits";
import { Branch, branches } from "../data/branches";

export const CommitsGraph = () => {
  commits.forEach((commit, index) => {
    commit.branch.lastCommitId = index;
  });

  branches.sort((a, b) => (b.lastCommitId ?? 0) - (a.lastCommitId ?? 0));

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
    "--branch-color": `${props.branch.color}`,
    width: `${(props.branch.order ?? 1) * 30}px`,
    height:
      props.branch.lastCommitId &&
      ` ${calculateBranchHeight(props.branch.lastCommitId, 400, 40, 100)}px`,
  } as React.CSSProperties;

  return (
    <div
      className={`branch-line branch-line-${props.branch.name}`}
      style={style}
    ></div>
  );
};
