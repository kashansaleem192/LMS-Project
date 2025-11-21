import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../Firebase";
import "./StudentList.css";
import { Link } from "react-router-dom";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const studentRef = ref(db, "students");

    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.values(data);
        setStudents(list);
      }
    });
  }, []);

  return (
    <div className="student-list-container">
      <h2 className="student-list-title">Student List</h2>
     <Link to="/dashboard/students/register" > <button className="add-btn pt-2 ps-4 pe-4 pb-2 border-0 text-bold rounded-3"> ADD </button></Link>

      {students.length === 0 ? (
        <p className="no-data">No students found</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Class</th>
              <th>Gender</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s, index) => (
              <tr key={index}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.roll}</td>
                <td>{s.class}</td>
                <td>{s.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
