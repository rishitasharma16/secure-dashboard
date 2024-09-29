import React from "react";

function Label({text,htmlFor}) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium leading-6 text-white"
      >
        {text}
      </label>
    </>
  );
}

export default Label;
