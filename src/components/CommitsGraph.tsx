import { useEffect } from "react";
import { CommitCard } from "./CommitCard";
import "./CommitsGraph.scss";

enum Branches {
  UNIVERSITY = "UNI",
  JOB = "JOB",
  PERSONAL = "PER",
}

export type Commit = {
  title: string;
  branch: Branches;
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

  const commits: Commit[] = [
    {
      title: "Uni blah",
      branch: Branches.UNIVERSITY,
    },
    {
      title: "Uni blah blah",
      branch: Branches.UNIVERSITY,
    },
    {
      title: "Job blah",
      branch: Branches.JOB,
    },
    {
      title: "Uni blah blah blah",
      branch: Branches.UNIVERSITY,
    },
    {
      title: "Personal blah",
      branch: Branches.PERSONAL,
    },
  ];

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
      <div className="branch-line-uni"></div>
    </div>
  );
};
