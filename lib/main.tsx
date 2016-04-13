import React = require("react");
import ReactDOM = require("react-dom");

import url = require("url");

import * as defaults from "./defaults";
import App from "./app";

let defaultSketchJS = require("raw!./default-sketch.js") as string;

require("../css/style.css");

function start() {
  let qs = url.parse(window.location.search, true).query;
  let autoplay = (qs['autoplay'] === 'on');
  let initialContent = qs['sketch'] || defaultSketchJS;
  let p5version = qs['p5version'] || defaults.P5_VERSION;
  let previewWidth = parseInt(qs['previewWidth']);

  if (isNaN(previewWidth)) {
    previewWidth = defaults.PREVIEW_WIDTH;
  }

  initialContent = initialContent.replace(/\r\n/g, '\n').trim();

  ReactDOM.render(
    <App initialContent={initialContent}
         p5version={p5version}
         previewWidth={previewWidth}
         autoplay={autoplay} />,
    document.getElementById('app-holder')
  );
}

window.addEventListener('load', start);