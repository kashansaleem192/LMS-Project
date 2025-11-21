import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  // Object to hold open/close status of multiple dropdowns
  const [dropdownOpen, setDropdownOpen] = useState({
    students: false,
    teachers: false,
    class: false,
    syllabus: false,
    admissions: false,
    exams: false,
    subjects: false,
    school : false,
    fees: false,

  });

  // Single toggle function
  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <nav className="side-bar">
      <ul>
        
        {/* Students Dropdown */}
      <li> <h2 className="p-1">🎓 LMS</h2></li>
        <li>
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("students")}
          >
            Students <span>{dropdownOpen.students ? "▲" : "▼"}</span>
          </button>
          <ul
            className={`dropdown-menu ${
              dropdownOpen.students ? "open" : ""
            }`}
          >
            <li>
              <Link to="/dashboard/students/register">Student Registration</Link>
            </li>
            <li>
              <Link to="/dashboard/students/list">Students List</Link>
            </li>
          </ul>
        </li>

        {/* Teachers Dropdown */}
        <li>
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("teachers")}
          >
            Teachers <span>{dropdownOpen.teachers ? "▲" : "▼"}</span>
          </button>
          <ul
            className={`dropdown-menu ${
              dropdownOpen.teachers ? "open" : ""
            }`}
          >
            <li>
              <Link to="/dashboard/teachers/add">Add Teacher</Link>
            </li>
            <li>
              <Link to="/dashboard/teachers/list">Teacher List</Link>
            </li>
          </ul>
        </li>

        {/* Subject Dropdown */}
        <li>
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("subjects")}
          >
          Subjects <span>{dropdownOpen.subjects ? "▲" : "▼"}</span>
          </button>
          <ul
            className={`dropdown-menu ${
              dropdownOpen.subjects ? "open" : ""
            }`}
          >
            <li>
              <Link to="/dashboard/subject/add">Subjects Add</Link>
            </li>
            <li>
              <Link to="/dashboard/subject/list">Subjects List</Link>
            </li>
          </ul>
        </li>
{/* Syllabus Dropdown */}
             <li>
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("syllabus")}
          >
            Syllabus <span>{dropdownOpen.syllabus ? "▲" : "▼"}</span>
          </button>
          <ul
            className={`dropdown-menu ${
              dropdownOpen.syllabus ? "open" : ""
            }`}
          >
            <li>
              <Link to="/dashboard/syllabus/add">Add Syllabus</Link>
            </li>
            <li>
              <Link to="/dashboard/syllabus/list">Syllabus List</Link>
            </li>
          </ul>
        </li>
{/* School Dropdown */}
             <li>
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("school")}
          >
            School <span>{dropdownOpen.school ? "▲" : "▼"}</span>
          </button>
          <ul
            className={`dropdown-menu ${
              dropdownOpen.school ? "open" : ""
            }`}
          >
            <li>
              <Link to="/dashboard/teachers/add">Teacher Registration</Link>
            </li>
            <li>
               <Link to="/dashboard/teachers/list">Teacher List</Link>
            </li>
             <li>
               <Link to="/dashboard/teachers/add">Student Registration</Link>
            </li>
            <li>
              <Link to="/dashboard/students/list">Students List</Link>
            </li>
          </ul>
        </li>
{/* Class Dropdown */}
             <li>
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("class")}
          >
           Class  <span>{dropdownOpen.class? "▲" : "▼"}</span>
          </button>
          <ul
            className={`dropdown-menu ${
              dropdownOpen.class? "open" : ""
            }`}
          >
            <li>
              <Link to="/dashboard/class/add">Class Form</Link>
            </li>
            <li>
              <Link to="/dashboard/class/list">Class List</Link>
            </li>
          </ul>
        </li>
{/* Fees Dropdown */}
             <li>
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("fees")}
          >
            fees <span>{dropdownOpen.fees ? "▲" : "▼"}</span>
          </button>
          <ul
            className={`dropdown-menu ${
              dropdownOpen.fees ? "open" : ""
            }`}
          >
            <li>
              <Link to="/dashboard/fees/structure"> Fees Structure</Link>
            </li>
            <li>
              <Link to="/dashboard/fees/form">Fees Submission</Link>
            </li>
          </ul>
        </li>
{/* Admission Dropdown */}
             <li>
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("admissions")}
          >
            Admissions <span>{dropdownOpen.admissions ? "▲" : "▼"}</span>
          </button>
          <ul
            className={`dropdown-menu ${
              dropdownOpen.admissions ? "open" : ""
            }`}
          >
            <li>
              <Link to="/dashboard/class/add"> Admission Form</Link>
            </li>
            
          </ul>
        </li>
{/* Exam Dropdown */}
             <li>
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("exams")}
          >
            Exam <span>{dropdownOpen.exams ? "▲" : "▼"}</span>
          </button>
          <ul
            className={`dropdown-menu ${
              dropdownOpen.exams ? "open" : ""
            }`}
          >
            <li>
              <Link to="/dashboard/exam/schedule">Exam Schedule</Link>
            </li>
            <li>
              <Link to="/dashboard/exam/result">Exam Result</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
