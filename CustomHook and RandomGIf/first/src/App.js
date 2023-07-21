import "./App.css";
import Random from "./component/Random";
import Tag from "./component/Tag";
function App() {
  return (
<div className="bg-[#262626] bg-scroll w-full min-h-screen flex flex-col items-center p-2">
  <h2 className="bg-[#ffffff] w-11/12 text-center  rounded-xl text-[#149ECA]  font-bold  text-3xl mt-3 max-w-[1080px]">
    Random Gifs
  </h2>
<div className="w-full flex flex-col  items-center mt-7  justify-between gap-7">
  <Random/>
  <Tag/>
</div>

</div>
  );
}

export default App;
