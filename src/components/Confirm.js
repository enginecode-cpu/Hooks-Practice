import React from "react";

function Confirm({ confirmDelete }) {
  return <button onClick={confirmDelete}>Delete the word</button>;
}

export default Confirm;
