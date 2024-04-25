import "./UnderConstruction.css";

export const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <img
        className="stripe-border-top"
        src="/caution-border.svg"
        alt="caution-border"
      />
      <img
        className="stripe-border-bot"
        src="/caution-border.svg"
        alt="caution-border"
      />
      <img
        className="construction-sign"
        src="/construction-sign.png"
        alt="construction-sign"
      />
    </div>
  );
};
