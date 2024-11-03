import Gen1 from "./components/Header/Generations/Gen1"
import Gen2 from "./components/Header/Generations/Gen2"
import Gen3 from "./components/Header/Generations/Gen3"
import Gen4 from "./components/Header/Generations/Gen4"

import Evolution from "./components/Home/Card-Info/Evolution"
import TypeEffect from "./components/Home/Card-Info/TypeEffect"
import logo from "./components/Home/Card-Info/logo"

import Search from "./components/Home/Searchh"

import Footer from "./components/Footer"


const App = () => {
  return (
    // JSX components adalah function yang me return JSX
    <div>
      <h1>Hello, World!</h1>
      <Gen1> </Gen1>
      <Gen2> </Gen2>
      <Gen3> </Gen3>
      <Gen4> </Gen4>
      <Evolution> </Evolution>
      <TypeEffect> </TypeEffect>
      <logo> </logo>
    </div>
  );
};



export default App;
