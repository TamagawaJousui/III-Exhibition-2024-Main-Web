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
    <div className="bg-gradient grid snap-mandatory grid-flow-row overflow-auto md:snap-x md:grid-flow-col [@media_(min-height:900px)_and_(max-width:768px)]:h-svh [@media_(min-height:900px)_and_(max-width:768px)]:snap-y">
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
