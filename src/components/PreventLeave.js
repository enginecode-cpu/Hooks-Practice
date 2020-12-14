import React from "react";

function PreventLeave({ onProtect, onUnprotect }) {
  return (
    <div>
      <button onClick={onProtect}>Protect</button>
      <button onClick={onUnprotect}>Unprotect</button>
    </div>
  );
}

export default PreventLeave;
