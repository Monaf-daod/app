import React, { Fragment, useState, useEffect, lazy } from "react";
import { checkLoadImages } from "./utiliesFuctions";
const Index = lazy(() => import("./components/Index"));
const CustomLoader = lazy(() => import("./components/customLoader"));
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);
  return <Fragment>{loading ? <CustomLoader /> : <Index />}</Fragment>;
};

export default App;
