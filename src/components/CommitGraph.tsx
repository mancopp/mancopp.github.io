import { CommitCard } from "./CommitCard";
import "./CommitGraph.scss";

import { commits } from "../data/commits";
import { Branch, branches } from "../data/branches";
import { useState } from "react";

export const CommitGraph = () => {
  const [selectedBranches, setSelectedBranches] = useState(
    branches.map((branch) => branch.name)
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const remainingBranches = selectedBranches.filter(
      (branch) => branch !== value
    );

    if (!checked && remainingBranches.length === 0) {
      return;
    }

    if (checked) {
      setSelectedBranches((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedBranches((prevSelected) =>
        prevSelected.filter((branch) => branch !== value)
      );
    }
  };

  const filteredCommits = commits.filter((commit) =>
    selectedBranches.includes(commit.branch.name)
  );

  filteredCommits.forEach((commit, index) => {
    commit.branch.lastCommitId = index;
  });

  const filteredBranches = branches.filter((branch) =>
    selectedBranches.includes(branch.name)
  );

  filteredBranches.sort(
    (a, b) => (b.lastCommitId ?? 0) - (a.lastCommitId ?? 0)
  );

  filteredBranches.forEach((branch, index) => {
    branch.order = index + 1;
  });

  return (
    <>
      <Header
        branches={branches}
        filteredBranches={filteredBranches}
        handleCheckboxChange={handleCheckboxChange}
      />
      <div className="commit-graph">
        <h2>Mancopp: Commit Graph</h2>
        {filteredCommits.map((commit, index) => (
          <CommitCard
            key={index}
            commit={commit}
            isNextCommitSameBranch={
              index < filteredCommits.length - 1 &&
              filteredCommits[index + 1].branch === commit.branch
            }
          />
        ))}
        {filteredBranches.map((branch, index) => (
          <BranchLine key={index} branch={branch} />
        ))}
      </div>
    </>
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

// TODO: Hide when leaving commit-graph
const Header = (props: {
  branches: Branch[];
  filteredBranches: Branch[];
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="commit-graph-header">
      <div className="filter-branches-dropodwn">
        <div
          className="btn-content"
          onClick={() => setDropdownOpen((state) => !state)}
        >
          <img src="icons/fa-expand-more.svg" alt="expand" />
          <span>Filter branches</span>
        </div>
        <ul className={`checkbox-dropdown-list ${dropdownOpen ? "open" : ""}`}>
          {props.branches.map((branch) => (
            <li key={branch.name}>
              <label>
                <input
                  type="checkbox"
                  value={branch.name}
                  name="branch"
                  checked={props.filteredBranches.includes(branch)}
                  onChange={props.handleCheckboxChange}
                />
                {branch.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
