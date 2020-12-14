import React from "react";

function TabItem({ onChangeItem, children }) {
  return <button onClick={onChangeItem}>{children}</button>;
}

export default TabItem;
