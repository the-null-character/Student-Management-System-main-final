import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import './ShowStudent.css';
import Header from "./header";

export default function ShowStudents() {
  const [students, setStudents] = useState([

    {
      "_id": "64ace80d0662aca3acad7bc4",
      "name": "Alice Smith",
      "age": 24,
      "gender": "female",
      "mark1": 78,
      "mark2": 85,
      "mark3": 90,
      "grade": "B",
      "__v": 0
    },

    {
      "_id": "64ace80d0662aca3acad7bc4",
      "name": "Alice Smith",
      "age": 24,
      "gender": "female",
      "mark1": 78,
      "mark2": 85,
      "mark3": 90,
      "grade": "B",
      "__v": 0
    },
    {
      "_id": "64ace80d0662aca3acad7bc5",
      "name": "Bob Johnson",
      "age": 31,
      "gender": "male",
      "mark1": 92,
      "mark2": 88,
      "mark3": 95,
      "grade": "A",
      "__v": 0
    },
    {
      "_id": "64ace80d0662aca3acad7bc6",
      "name": "Emily Davis",
      "age": 27,
      "gender": "female",
      "mark1": 70,
      "mark2": 80,
      "mark3": 75,
      "grade": "C+",
      "__v": 0
    },

  ]);

  useEffect(() => {
    const getStudents = () => {
      axios
        .get("http://localhost:8070/student/get")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => alert(err.message));
    };
    getStudents();
  }, []);

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8070/student/delete/${id}`)
          .then((res) => {
            Swal.fire("Deleted!", res.data.status, "success");
            //update table after deleting
            const updatedStudents = students.filter(
              (student) => student._id !== id
            );
            setStudents(updatedStudents);
          })
          .catch((err) => {
            Swal.fire("Not Deleted!", err.message, "error");
          });
      }
    });
  };

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center" }}>All students</h1>
      <div className="container">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {students.map((item, count = 0) => (

            


            <tbody>
              <tr>
                <td style={{ color: "red" }}>{count + 1}</td>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>
                  <button>
                    <Link to={`/get/${item._id}`} className="button">
                    Update
                  </Link>
                  </button>
                  
                  {" "}
                  <button
                    type="button"
                    className="button"
                    onClick={() => deleteUser(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
