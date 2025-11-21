import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../Firebase";
import "./SubjectList.css";
import { Link } from "react-router-dom";

export default function SubjectList() {
  const [subjects, setsubjects] = useState([]);

  useEffect(() => {
    const subjectRef = ref(db, "subjects");

    onValue(subjectRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.values(data);
        setsubjects(list);
      }
    });
  }, []);

  return (
    <div className="subject-list-container">
      <h2 className="subject-list-title">subject List</h2>
     <Link to="/dashboard/subjects/register" > <button className="add-btn pt-2 ps-4 pe-4 pb-2 border-0 text-bold rounded-3"> ADD </button></Link>

      {subjects.length === 0 ? (
        <p className="no-data">No subjects found</p>
      ) : (
        <table className="subject-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Group</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((s, index) => (
              <tr key={index}>
                <td>{s.subjectname}</td>
                <td>{s.class}</td>
                <td>{s.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
