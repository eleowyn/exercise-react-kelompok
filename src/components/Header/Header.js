import Gen1 from "./Generations/gen1.js"
import Gen2 from "./Generations/gen2.js"
import Gen3 from "./Generations/gen3.js"
import Gen4 from "./Generations/gen4.js"
import Logo from "./Logo.js"

const Header = () => {
    return (
      // JSX components adalah function yang me return JSX
      <div>
        <Gen1> </Gen1>
        <Gen2> </Gen2>
        <Gen3> </Gen3>
        <Gen4> </Gen4>
        <Logo> </Logo>
      </div>
    );
  };

export default Header;