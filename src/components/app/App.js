import React from "react";
import { BrowserRouter } from "react-router-dom";
import MediaQuery from "react-responsive";

import "../../css/index.css";

const App = props => (
  <BrowserRouter>
    <React.Fragment>
      <div className="container">
        <h1>App Starter</h1>
        <p>
          Use this document as a way to quickly start any new project.<br />
          All you get is this text and a mostly barebones HTML document.
        </p>
      </div>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
