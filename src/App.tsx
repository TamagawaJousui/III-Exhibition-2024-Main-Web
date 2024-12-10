import "./App.css";
import { lazy } from "react";
import Header from "./component/Header";
const HeroArea = lazy(() => import("./component/HeroArea"));
const Concept = lazy(() => import("./component/Concept"));
const Works = lazy(() => import("./component/Works"));
const Access = lazy(() => import("./component/Access"));
const Announce = lazy(() => import("./component/Announce"));
const Members = lazy(() => import("./component/Members"));
const Archives = lazy(() => import("./component/Archives"));

function App() {
  return (
    <>
      <Header />
      <div className="bg-gradient grid w-max grid-flow-row md:grid-flow-col">
        <HeroArea />
        <Concept />
        <Works />
        <Access />
        <Announce />
        <Members />
        <Archives />
      </div>
    </>
  );
}

export default App;
