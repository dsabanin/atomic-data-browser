import React from "../../pkg/react.js";
function DateTime({date}) {
  return /* @__PURE__ */ React.createElement("div", {
    title: date.toISOString()
  }, date.toLocaleDateString());
}
export default DateTime;
