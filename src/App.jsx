import "./App.css"
import SignIn from './Components/Login/SignIn'
import SignUp from './Components/SignUP/SignUp'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Screens/Home/Home'
import DashBoard from './Components/DashBoard/DashBoard'
import StudentRegistration from './Components/Students/StudentsRegistration'
import StudentList from "./Components/Students/StudentLIst"
import TeacherRegistration from "./Components/Teachers/TeacherRegistration"
import TeacherList from "./Components/Teachers/TeachersList"
import SubjectRegistration from "./Components/Subject/SubjectRegistration"
import SubjectList from "./Components/Subject/SubjectList"
import SyllabusRegistration from "./Components/Syllabus/Syllabus"
import SyllabusList from "./Components/Syllabus/SyllabusList"
import ClassRegistration from "./Components/Class/ClassForm"
import ClassList from "./Components/Class/ClassList"
import FeeStructureCards from "./Components/Fee/FeeStructure"
import FeeStructureCardsColumn from "./Components/Fee/FeeStructure"
import FeeSubmissionForm from "./Components/Fee/FeeSubmission"
import ExamSchedule from "./Components/Exam/ExamSchedule"
import ExamResult from "./Components/Exam/ExamResult"

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />

      {/* Dashboard Home */}
      <Route
        path="/dashboard"
        element={
          <DashBoard>
          <StudentList/>
          </DashBoard>
        }
      />

      {/* Student Registration inside Dashboard */}
      <Route
        path="/dashboard/students/register"
        element={
          <DashBoard>
            <StudentRegistration />
          </DashBoard>
        }

      />

        <Route
        path="/dashboard/students/list"
        element={
          <DashBoard>
          <StudentList/>
          </DashBoard>
        }
      />
        {/* Teachers Registration inside Dashboard */}
        <Route
        path="/dashboard/teachers/add"
        element={
          <DashBoard>
          <TeacherRegistration/>
          </DashBoard>
        }
        
      />
        {/* Teachers List inside Dashboard */}
      <Route
  path="/dashboard/teachers/list"
  element={
    <DashBoard>
  <TeacherList/>
    </DashBoard>
  }
/>


     {/*Subject Registration inside Dashboard */}
        <Route
        path="/dashboard/subject/add"
        element={
          <DashBoard>
         <SubjectRegistration/>
          </DashBoard>
        }
        
      />
        {/* Subject List inside Dashboard */}
      <Route
  path="/dashboard/subject/list"
  element={
    <DashBoard>
  <SubjectList/>
    </DashBoard>
  }
/>


     {/*SYllabus Registration inside Dashboard */}
        <Route
        path="/dashboard/syllabus/add"
        element={
          <DashBoard>
         <SyllabusRegistration/>
          </DashBoard>
        }
        
      />
        {/* Syllabus List inside Dashboard */}
      <Route
  path="/dashboard/syllabus/list"
  element={
    <DashBoard>
 <SyllabusList/>
    </DashBoard>
  }
/>

      <Route
        path="/dashboard/class/add"
        element={
          <DashBoard>
         <ClassRegistration/>
          </DashBoard>
        }
        
      />

      <Route
        path="/dashboard/class/list"
        element={
          <DashBoard>
         <ClassList/>
          </DashBoard>
        }
        
      />
           <Route
        path="/dashboard/fees/structure"
        element={
          <DashBoard>
         <FeeStructureCardsColumn/>
          </DashBoard>
        }
        
      />
            <Route
        path="/dashboard/fees/form"
        element={
          <DashBoard>
         <FeeSubmissionForm/>
          </DashBoard>
        }
        
      />
             <Route
        path="/dashboard/exam/schedule"
        element={
          <DashBoard>
        <ExamSchedule/>
          </DashBoard>
        }
        
      />
            <Route
        path="/dashboard/exam/result"
        element={
          <DashBoard>
         <ExamResult/>
          </DashBoard>
        }
        
      />

    </Routes>
  )
}

export default App


