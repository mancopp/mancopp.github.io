import { Commit } from "./CommitsGraph";
import "./CommitCard.scss";

export const CommitCard = (props: {
  commit: Commit;
  isNextCommitSameBranch: boolean;
}) => {
  const commit = props.commit;
  const overrideStyles = {
    "--color-primary": commit.branch.color,
    "--branch-offset-width": `${commit.branch.order * 30}px`,
  } as React.CSSProperties;
  return (
    <div className={"commit-card"} style={overrideStyles}>
      <div className="commit-card__rect">
        <div className="content">
          <h3 className="title">{commit.title}</h3>
          <p className="subtitle">{commit.subtitle}</p>
          <p className="description">{commit.description}</p>
        </div>
        <div className="image"></div>
      </div>
      <div
        className={`commit-card__stripe ${
          props.isNextCommitSameBranch ? "connect-to-prev" : ""
        }`}
      ></div>
    </div>
  );
};
