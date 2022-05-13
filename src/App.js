import React, { Component, lazy } from "react";
const Index = lazy(() => import("./components/Index"));
class App extends Component {
  render() {
    return <Index />;
  }
}

export default App;
