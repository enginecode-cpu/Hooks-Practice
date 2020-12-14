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
import usePageLeave from "./libs/usePageLeave";
import useFadeIn from "./libs/useFadeIn";
import useNetwork from "./libs/useNetwork";
import useScroll from "./libs/useScroll";
import useFullscreen from "./libs/useFullscreen";
import useNotification from "./libs/useNotification";
import useAxios from "./libs/useAxios";

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

  const begForLife = () => {
    console.log("Pls don't leave");
  };

  usePageLeave(begForLife);

  const { el } = useFadeIn(3, 4);

  const handleNetworkChange = (online) => {
    console.log(online ? "We just went Online" : "We are Offline");
  };
  const isOnline = useNetwork(handleNetworkChange);

  const { y } = useScroll();

  const { element, triggerFull } = useFullscreen();

  const triggerNoti = useNotification("Why not use Macbook pro?");

  const { loading, data, error, refetch } = useAxios();
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
      <div className="useFadeIn">
        <h2 ref={el} style={{ opacity: 0 }}>
          This is useFadeIn
        </h2>
      </div>
      <div className="useNetwork">{isOnline ? "Online" : "Offline"}</div>
      <div className="useScroll">
        <h2 style={{ color: y === 0 ? "blue" : "red" }}>Hi</h2>
      </div>
      <div className="useFullscreen">
        <img
          ref={element}
          src="https://img1.daumcdn.net/thumb/C500x500.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/2YH6/image/-im-bnvX33JVTe800JHLMcNvmwc.png"
          alt="멋사"
          width="100"
        />
        <button onClick={triggerFull}>Fullscreen</button>
        <div className="useNotification">
          <button onClick={triggerNoti}>Hello</button>
        </div>
        <div className="useAxios">
          <h1></h1>
          <h2>{loading && "Loading"}</h2>
          <button onClick={refetch}>Refetch</button>
        </div>
      </div>
    </div>
  );
}

export default App;
