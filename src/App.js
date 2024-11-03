import Hello from "./components/Hello"
import World from "./components/World"

const App = () => {
  return (
    // JSX components adalah function yang me return JSX
    <div>
      <h1>Hello, World!</h1>
      <Hello> </Hello>
      <World> </World>
    </div>
  );
};



export default App;