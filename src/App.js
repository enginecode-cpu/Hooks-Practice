import React from "react";
import useInput from "./libs/useInput";
import useTabs from "./libs/useTabs";
import "./App.css";

function App() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);

  const content = [
    {
      tab: "Section 1",
      content: "This is Section1",
    },
    {
      tab: "Section 2",
      content: "This is Section2",
    },
  ];

  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div>
      <div className="useInput">
        <h1>Hello</h1>
        <input value={name.value} onChange={name.onChange} />
      </div>
      <div className="useTabs">
        {content.map((section, index) => (
          <button key={section.tab} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </div>
  );
}

export default App;
