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
        <li>
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("students")}
          >
            Students {dropdownOpen.students ? "▲" : "▼"}
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
            Teachers {dropdownOpen.teachers ? "▲" : "▼"}
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
          Subjects {dropdownOpen.subjects ? "▲" : "▼"}
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
            Syllabus {dropdownOpen.syllabus ? "▲" : "▼"}
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
            School {dropdownOpen.school ? "▲" : "▼"}
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
            Class{dropdownOpen.class? "▲" : "▼"}
          </button>
          <ul
            className={`dropdown-menu ${
              dropdownOpen.class? "open" : ""
            }`}
          >
            <li>
              <Link to="/dashboard/class/add">Add Class</Link>
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
            fees {dropdownOpen.fees ? "▲" : "▼"}
          </button>
          <ul
            className={`dropdown-menu ${
              dropdownOpen.fees ? "open" : ""
            }`}
          >
            <li>
              <Link to="/dashboard/fees/add">Add Fees</Link>
            </li>
            <li>
              <Link to="/dashboard/fees/list">Fees List</Link>
            </li>
          </ul>
        </li>
{/* Admission Dropdown */}
             <li>
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("admissions")}
          >
            Admissions {dropdownOpen.admissions ? "▲" : "▼"}
          </button>
          <ul
            className={`dropdown-menu ${
              dropdownOpen.admissions ? "open" : ""
            }`}
          >
            <li>
              <Link to="/dashboard/admissions/add">Add  Admissions</Link>
            </li>
            <li>
              <Link to="/dashboard/admissions/list">Admissions List</Link>
            </li>
          </ul>
        </li>
{/* Exam Dropdown */}
             <li>
          <button
            className="dropdown-btn"
            onClick={() => toggleDropdown("exam")}
          >
            Exam {dropdownOpen.exams ? "▲" : "▼"}
          </button>
          <ul
            className={`dropdown-menu ${
              dropdownOpen.exams ? "open" : ""
            }`}
          >
            <li>
              <Link to="/dashboard/exam/add">Add Exam</Link>
            </li>
            <li>
              <Link to="/dashboard/exam/list">Exam List</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
