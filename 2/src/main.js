import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./main.scss";

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
        React.createElement(App),
        document.getElementById("mount")
    );
});