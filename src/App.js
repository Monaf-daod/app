import React, { Suspense, lazy } from "react";
import CustomLoader from "./components/customLoader";
const Index = lazy(() => import("./components/Index"));
const App = () => {
  return (
    <Suspense fallback={<CustomLoader />}>
      <Index />
    </Suspense>
  );
};

export default App;
