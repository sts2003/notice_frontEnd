import React from "react";
import withSplitting from "../Lib/withSplittings";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { withResizeDetector } from "react-resize-detector";

const MM00 = withSplitting(() => import("../Routes/Client/MM/"));

const AppRouter = ({ width }) => {
  return (
    <Router>
      <Route exact path="/" component={MM00} />
    </Router>
  );
};

export default withResizeDetector(AppRouter);
