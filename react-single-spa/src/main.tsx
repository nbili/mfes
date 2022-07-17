import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import singleSpaReact from "single-spa-react";
import { registerApplication, start } from "single-spa";

const app = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter() {
    return document.getElementById("root") as HTMLDivElement;
  },
});

registerApplication({
  name: "react-app",
  app,
  activeWhen: ["/"],
  customProps: {
    authToken: "+ props is a token",
  },
});

start();
