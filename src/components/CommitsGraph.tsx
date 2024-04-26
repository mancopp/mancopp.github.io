import { useEffect } from "react";
import { CommitCard } from "./CommitCard";
import "./CommitsGraph.scss";

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

  return (
    <div className="commits-graph">
      <h1>Commits graph</h1>
      <CommitCard />
      <CommitCard />
      <CommitCard />
      <CommitCard />
      <CommitCard />
      <CommitCard />
      <CommitCard />
      <CommitCard />
      <CommitCard />
      <CommitCard />
      <CommitCard />
      <CommitCard />
      <CommitCard />
      <CommitCard />
    </div>
  );
};
