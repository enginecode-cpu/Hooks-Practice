import React from "react";
import useInput from "./libs/useInput";
import useTabs from "./libs/useTabs";
import useTitle from "./libs/useTitle";
import "./App.css";
import Input from "./components/Input";
import TabItem from "./components/TabItem";
import useClick from "./libs/useClick";
import Confirm from "./components/Confirm";
import useConfirm from "./libs/useConfirm";
import PreventLeave from "./components/PreventLeave";
import usePreventLeave from "./libs/usePreventLeave";

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

  const updaterTitle = useTitle("Loading...");
  setTimeout(() => {
    updaterTitle("Home");
  }, 5000);

  const sayHello = () => {
    subTitle.current.innerText = "say Hello";
  };
  const subTitle = useClick(sayHello);

  const deleteWord = () => {
    console.log("Deleting word");
  };
  const abort = () => {
    console.log("Aborted");
  };
  const confirmDelete = useConfirm("Are you sure?", deleteWord, abort);

  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <div className="useInput">
        <h1>Hello</h1>
        <Input {...name} />
      </div>
      <div className="useTabs">
        {content.map((section, index) => (
          <TabItem key={section.tab} onChangeItem={() => changeItem(index)}>
            {section.tab}
          </TabItem>
        ))}
        <div>{currentItem.content}</div>
      </div>
      <div className="useClick">
        <h2 ref={subTitle}>This is useClick</h2>
      </div>
      <div className="useConfirm">
        <Confirm confirmDelete={confirmDelete} />
      </div>
      <div className="usePreventLeave">
        <PreventLeave onProtect={enablePrevent} onUnprotect={disablePrevent} />
      </div>
    </div>
  );
}

export default App;
