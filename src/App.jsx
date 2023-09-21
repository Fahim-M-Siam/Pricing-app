// @ts-nocheck
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Priceoptions from "./components/PriceOptions/Priceoptions";
import Linechart from "./components/LineChart/Linechart";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Priceoptions></Priceoptions>
      <Linechart></Linechart>
    </>
  );
}

export default App;
