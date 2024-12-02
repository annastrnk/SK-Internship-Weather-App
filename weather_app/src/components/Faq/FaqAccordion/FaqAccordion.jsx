import { useState } from "react";

export default function FaqAccordion({ title, answer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="normal-font">
      <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
        <div className="accordion-title">{title}</div>
        <img
          className={`accordion-icon ${isActive ? "rotate" : ""}`}
          src="../../../../public/images/arrow-up 1.svg"
          alt="Toggle"
        />
      </div>

      {isActive && <div className="accordion-content">{answer}</div>}
    </div>
  );
}
