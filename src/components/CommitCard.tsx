import { Commit } from "./CommitsGraph";
import "./CommitCard.scss";

const branchColors = {
  UNI: "blue",
  JOB: "red",
  PER: "green",
};

export const CommitCard = (props: {
  commit: Commit;
  isNextCommitSameBranch: boolean;
}) => {
  const commit = props.commit;
  const style = {
    "--color-primary": branchColors[commit.branch] || "black",
  } as React.CSSProperties;

  return (
    <div
      className={`commit-card ${props.isNextCommitSameBranch ? "last" : ""}`}
      style={style}
    >
      <div className="commit-card__content">
        <h2>{commit.title}</h2>
        <p>{commit.branch}</p>
        <p>{props.isNextCommitSameBranch.toString()}</p>
      </div>
    </div>
  );
};
