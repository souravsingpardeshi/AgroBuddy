import { Fade } from "react-awesome-reveal";
import './App.css';
import Banner from "./component/Banner";
import Menu from "./component/Menu";
function App() {
  return (
    <div className="App">
     <Banner/>
     <Fade>
     <Menu/>
    </Fade>
    </div>
  );
}

export default App;
