import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../Firebase";
import "./classList.css";
import { Link } from "react-router-dom";

export default function ClassList() {
  const [classs, setclasss] = useState([]);

  useEffect(() => {
    const classRef = ref(db, "classs");

    onValue(classRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.values(data);
        setclasss(list);
      }
    });
  }, []);

  return (
    <div className="class-list-container">
      <h2 className="class-list-title">class List</h2>
     <Link to="/dashboard/classs/register" > <button className="add-btn pt-2 ps-4 pe-4 pb-2 border-0 text-bold rounded-3"> ADD </button></Link>

      {classs.length === 0 ? (
        <p className="no-data">No classs found</p>
      ) : (
        <table className="class-table">
          <thead>
            <tr>
              <th>First Name</th>
               <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Qualification</th>
            </tr>
          </thead>

          <tbody>
            {classs.map((s, index) => (
              <tr key={index}>
                <td>{s.firstname}</td>
                <td>{s.lastname}</td>
                <td>{s.email}</td>
                <td>{s.phone}</td>
                <td>{s.class}</td>
                <td>{s.gender}</td>
                <td>{s.qualification}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
