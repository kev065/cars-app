import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import './App.css'
import Search from "./Components/Search";
import CarList from "./Components/CarList";

function App() {
  
  const [searchTerm, setSearchTerm] = useState("")

  // const components = [<Home />, <About />, <Recipe />];

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/cars"}>Car List</Link>
            </li>
          </ul>
        </nav>

        {/* <hr /> */}

        <Search onSearch={setSearchTerm} />

        <Routes>
        <Route exact path = "/" Component={Home} />
        <Route exact path = "/about" Component={About} />
        <Route exact path = "/cars" Component={CarList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
