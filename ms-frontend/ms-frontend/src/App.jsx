import './App.css'
import ListEmployeeComponent from "../components/ListEmployeeComponent.jsx";
import HeaderComponent from "../components/HeaderComponent.jsx";
import FooterComponent from "../components/FooterComponent.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmployeeComponent from "../components/EmployeeComponent.jsx";
import ListDepartmentComponent from "../components/ListDepartmentComponent.jsx";
import DepartmentComponent from "../components/DepartmentComponent.jsx";

function App() {

  return (
      <>
          <BrowserRouter>
              <HeaderComponent/>
                  <Routes>
                      {/*// http:localhost:3000*/}
                      <Route path={'/'} element={<ListEmployeeComponent/>}></Route>
                      {/*// http://localhost:3000/employees*/}
                      <Route path={'/employees'} element={<ListEmployeeComponent/>}></Route>
                      {/*// http://localhost:3000/add-employees*/}
                      <Route path={'/add-employee'} element={<EmployeeComponent/>}></Route>
                      {/*// http://localhost:3000/edit-employees/id*/}
                      <Route path={'/edit-employee/:id'} element={<EmployeeComponent/>}></Route>
                      {/*// http://localhost:3000/departments*/}
                      <Route path={'/departments'} element={<ListDepartmentComponent/>}></Route>
                      {/*// http://localhost:3000/add-departments*/}
                      <Route path={'/add-departments'} element={<DepartmentComponent/>}></Route>

                      <Route path={'/edit-department/:id'} element={<DepartmentComponent/>}></Route>
                  </Routes>
              <FooterComponent/>
          </BrowserRouter>
      </>
  )
}

export default App
