import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../Firebase";
import "./SyllabusList.css";
import { Link } from "react-router-dom";

export default function SyllabusList() {
  const [syllabuses, setSyllabuses] = useState([]);

  useEffect(() => {
    const syllabusRef = ref(db, "syllabus"); // make sure path matches your DB

    onValue(syllabusRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.values(data);
        setSyllabuses(list);
      } else {
        setSyllabuses([]);
      }
    });
  }, []);

  return (
    <div className="syllabus-list-container">
      <h2 className="syllabus-list-title">Syllabus List</h2>
      <Link to="/dashboard/syllabuss/register">
        <button className="add-btn pt-2 ps-4 pe-4 pb-2 border-0 text-bold rounded-3">
          ADD
        </button>
      </Link>

      {syllabuses.length === 0 ? (
        <p className="no-data">No syllabuses found</p>
      ) : (
        <table className="syllabus-table">
          <thead>
            <tr>
              <th>Subject Name</th>
              <th>Class</th>
              <th>Download</th>
            </tr>
          </thead>

          <tbody>
            {syllabuses.map((s, index) => (
              <tr key={index}>
                <td>{s.subjectName}</td>
                <td>{s.className}</td>
                <td>
                  {s.fileURL ? (
                    <a href={s.fileURL} target="_blank" rel="noopener noreferrer">
                    <button className="add-btn border-0 rounded-3 p-2 ">  Download</button>
                    </a>
                  ) : (
                    "No file"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
