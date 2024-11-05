import Header from "./components/Header/Header.js"

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
      <Header></Header>
      <Evolution> </Evolution>
      <TypeEffect> </TypeEffect>
      <logo> </logo>
    </div>
  );
};



export default App;
