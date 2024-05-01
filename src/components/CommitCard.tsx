import { Commit } from "../data/commits";
import "./CommitCard.scss";

export const CommitCard = (props: {
  commit: Commit;
  isNextCommitSameBranch: boolean;
}) => {
  const commit = props.commit;
  const overrideStyles = {
    "--color-primary": commit.branch.color,
    "--branch-offset-width": `${(commit.branch.order ?? 1) * 30}px`,
  } as React.CSSProperties;
  return (
    <div className="commit-card" style={overrideStyles}>
      <div className="commit-card__rect">
        <div className="content">
          <h3 className="title">{commit.title}</h3>
          <p className="subtitle">{commit.subtitle}</p>
          <p className="description">{commit.description}</p>
        </div>
        <img
          className="image"
          src={`/commits/${commit.imageFileName}`}
          alt={`${commit.title} cover image`}
        />
      </div>
      <div
        className={`commit-card__stripe ${
          props.isNextCommitSameBranch ? "connect-to-prev" : ""
        }`}
      ></div>
    </div>
  );
};
