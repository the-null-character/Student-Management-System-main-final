import React, { useState } from "react";
import "./Attendance.css";
import Header from "./header";
import Swal from "sweetalert2";


const AttendancePage = () => {

  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", present: false },
    { id: 2, name: "Jane Smith", present: false },
    { id: 3, name: "Alex Johnson", present: false },
    { id: 4, name: "Michael Brown", present: false },
    { id: 5, name: "Emily Davis", present: false },
    { id: 6, name: "William Wilson", present: false },
    { id: 7, name: "Olivia Thompson", present: false },
    { id: 8, name: "James Anderson", present: false },
    { id: 9, name: "Sophia Clark", present: false },
    { id: 10, name: "Benjamin Martinez", present: false },
    { id: 11, name: "Ava Garcia", present: false },
    { id: 12, name: "Jacob Rodriguez", present: false },
    { id: 13, name: "Isabella Lee", present: false },
    { id: 14, name: "Ethan Hall", present: false },
    { id: 15, name: "Mia Hernandez", present: false },
    { id: 16, name: "Daniel Young", present: false },
    { id: 17, name: "Charlotte Lewis", present: false },
    { id: 18, name: "Alexander Walker", present: false },
    { id: 19, name: "Amelia Turner", present: false },
    { id: 20, name: "Matthew Scott", present: false },
    { id: 21, name: "Harper Hill", present: false },
    { id: 22, name: "Joseph Green", present: false },
    { id: 23, name: "Abigail Adams", present: false },
    { id: 24, name: "David Baker", present: false },
    { id: 25, name: "Ella King", present: false },
    { id: 26, name: "Andrew Cook", present: false },
    { id: 27, name: "Victoria Phillips", present: false },
    { id: 28, name: "Christopher Bell", present: false },
    { id: 29, name: "Sofia Rogers", present: false },
    { id: 30, name: "Jack Morgan", present: false },
    // Add more students as needed
  ]);

  const handleRefreshClick = () => {
    window.location.reload();
  }


  const handleAttendanceChange = (id) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, present: !student.present };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const handleAttendanceSubmit = () => {

    Swal.fire({
      title: "Attendance Saved!",
      icon: "success",
      timer: 1500,
      showConfirmButton: false
    });
  };

  return (
    <div> 
        <Header />
        <div className="attendance-page">
      <h1>Attendance</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <label className="attendance-checkbox">
                  <input
                    type="checkbox"
                    checked={student.present}
                    onChange={() => handleAttendanceChange(student.id)}
                  />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

        <button onClick={handleRefreshClick}> 
            Clear
        </button>

        <button onClick={handleAttendanceSubmit}>
            Submit
        </button>
      
    </div>
    </div>
    
  );
};

export default AttendancePage;
