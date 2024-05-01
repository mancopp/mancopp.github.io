import { ReactTyped } from "react-typed";
import Lottie from "lottie-react";
import animationData from "../lotties/scroll-tip.json";
import "./Specimen.scss";

export const Specimen = () => {
  return (
    <div className="specimen">
      <div className="text">
        <h1 className="title">MANCOPP</h1>
        <span className="subtitle">
          <span>`FULL-STACK SOFTWARE ENGINEER AND </span>
          <ReactTyped
            strings={[
              "DESIGNER :)",
              "ARTIST :)",
              "MUSICIAN :)",
              "EDITOR :)",
              "NOVELIST :0",
            ]}
            typeSpeed={40}
            backSpeed={50}
            backDelay={2500}
            loop
          ></ReactTyped>
          <span>`</span>
        </span>
      </div>
      <Lottie className="scroll-tip" animationData={animationData} />
    </div>
  );
};
