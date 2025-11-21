import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../Firebase";
import "./TeacherList.css";
import { Link } from "react-router-dom";

export default function TeacherList() {
  const [teachers, setteachers] = useState([]);

  useEffect(() => {
    const teacherRef = ref(db, "teachers");

    onValue(teacherRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.values(data);
        setteachers(list);
      }
    });
  }, []);

  return (
    <div className="teacher-list-container">
      <h2 className="teacher-list-title">Teacher List</h2>
     <Link to="/dashboard/teachers/add" > <button className="add-btn pt-2 ps-4 pe-4 pb-2 border-0 text-bold rounded-3"> ADD </button></Link>

      {teachers.length === 0 ? (
        <p className="no-data">No teachers found</p>
      ) : (
        <table className="teacher-table">
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
            {teachers.map((s, index) => (
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
