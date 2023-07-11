import React from "react";
import "./AboutPage.css";
import Header from "./header";

const AboutPage = () => {
  return (
    <div>
        <Header />
    <div className="about-page">
      <h1>About MANAV - School Management System</h1>
      <p>Welcome to our website!</p>
      <p>
        MANAV (Modernized Academic Network for Administrative Vision) is a
        comprehensive school management system developed by a team of talented
        individuals with a passion for revolutionizing the academic
        administration process. Derived from the Tamil word "Maanavar" meaning
        student, MANAV aims to provide a modernized and efficient platform for
        managing various aspects of educational institutions. Our team consists
        of four dedicated members who have collaborated to create this
        innovative solution:
      </p>

      <p>
        Our team consists of four dedicated members who have collaborated to create this
        innovative solution:
      </p>

      <table className="team-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Reg No.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Akshay S</td>
            <td>20MIS1097</td>
          </tr>
          <tr>
            <td>Akash C</td>
            <td>20MIS1073</td>
          </tr>
          <tr>
            <td>Sujapriya S</td>
            <td>20MIS1116</td>
          </tr>
          <tr>
            <td>Veenasree P</td>
            <td>20MIS1139</td>
          </tr>
        </tbody>
      </table>

      <p>
        Together, our team has poured their expertise and passion into creating
        MANAV - a dynamic and comprehensive school management system. MANAV aims
        to streamline administrative tasks, enhance communication channels,
        simplify student data management, and empower educational institutions
        with modern technology. 
      </p>

      <p>
        By leveraging the power of the MERN (MongoDB,
        Express.js, React.js, Node.js) stack, MANAV provides a scalable and
        adaptable solution that can be customized to meet the unique needs of
        schools, colleges, and universities. With features such as attendance
        tracking, grade management, student information management, and more,
        MANAV empowers educational institutions to focus on their core mission
        of nurturing young minds while leaving the administrative burdens to our
        advanced platform. 
      </p>

      <p>
        Welcome to the world of MANAV - a modernized academic
        network for administrative vision.
      </p>

      <br></br>

      <img src={require("./logo-r.png") } />
    </div>
    </div>
  );
};

export default AboutPage;
