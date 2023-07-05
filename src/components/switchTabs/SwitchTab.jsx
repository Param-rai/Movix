import React, { useState } from "react";
import "./style.scss";

const SwitchTab = ({ data, onTabChange }) => {
  const [active, setActive] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setActive(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, i) => (
          <span
            key={i}
            className={`tabItem ${active === i ? "active" : ""}`}
            onClick={() => activeTab(tab, i)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }}></span>
      </div>
    </div>
  );
};

export default SwitchTab;
