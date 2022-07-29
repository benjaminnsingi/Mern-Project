import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import './App.css';
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import ListPage from "./pages/ListPage";
import Employees from "./components/employees/Employees";

function App() {

  return (
    <div className="App">
      <Router>
          <NavBar/>
          <Routes>
              <Route exact path="/" element={<ListPage/>}/>
              <Route  path="/employees/:id" exact element={<Employees/>} />
              <Route exact path="/add" element={<AddPage/>}/>
              <Route exact path="/edit-employee/:id" element={<EditPage/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
