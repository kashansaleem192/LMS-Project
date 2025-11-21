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


     {/* Teachers Registration inside Dashboard */}
        <Route
        path="/dashboard/subject/add"
        element={
          <DashBoard>
         <SubjectRegistration/>
          </DashBoard>
        }
        
      />
        {/* Teachers List inside Dashboard */}
      <Route
  path="/dashboard/subject/list"
  element={
    <DashBoard>
  <SubjectList/>
    </DashBoard>
  }
/>

    </Routes>
  )
}

export default App


