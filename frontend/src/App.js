import "./App.css";
import Header from "./Components/header";
import AddStudent from "./Components/AddStudent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowStudents from "./Components/ShowStudent";
import ShowOne from "./Components/ShowOne";
import Update from "./Components/Update";
import Login from "./Components/Login";
import AboutPage from "./Components/About";
import AttendancePage from "./Components/Attendance";

function App() {
  return (
    <div className="content">
      

      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/get/:id" exact Component={Update} />
          <Route path="/getMarks" exact Component={ShowOne} />
          <Route path="/add" exact Component={AddStudent} />
          <Route path="/get" exact Component={ShowStudents} />
          <Route path="/attendance" element={<AttendancePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </Router>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p class="footer-text">© 2023 MANAV - Student Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>

    </div>
  );
}

export default App;
