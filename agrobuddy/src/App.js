
import './App.css';
import Home from "./Home";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Infopedia from "./Infopedia";
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route exact path="/about" element={<Infopedia/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
