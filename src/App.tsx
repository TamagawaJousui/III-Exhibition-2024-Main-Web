import "./App.css";
import HeroArea from "./component/HeroArea";
import Concept from "./component/Concept";
import Works from "./component/Works";
import Access from "./component/Access";
import Announce from "./component/Announce";
import Members from "./component/Members";
import Archives from "./component/Archives";

function App() {
  return (
    <div className="grid w-max bg-gradient grid-flow-row md:grid-flow-col md:auto-cols-max ">
      <HeroArea />
      <Concept />
      <Works />
      <Access />
      <Announce />
      <Members />
      <Archives />
    </div>
  );
}

export default App;
