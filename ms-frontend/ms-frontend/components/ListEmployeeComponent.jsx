import React, {useEffect, useState} from 'react'
import {deleteEmployee, listEmployees} from "../src/services/EmployeeService.js";
import  {useNavigate} from "react-router-dom";
import {getAllDepartments} from "../src/services/DepartmentService.js";

const ListEmployeeComponent = () => {
    const [employees, setEmployee] = useState([])
    const [departments, setDepartments] = useState([])
    const navigator = useNavigate();

    const getDepartmentName = (departmentId) => {
        const department = departments.find(dept => dept.id === departmentId);
        return department ? department.departmentName : 'Unknown'; // Ensure it handles undefined case
    };

    useEffect(() => {
        getAllDepartments().then((response) => {
            // console.log(response.data);
            setDepartments(response.data);
        }).catch(error => {
            console.error(error)
        })
    }, [])

    useEffect(() => {
        getAllEmployees()
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployee(response.data);
        }).catch(error => {
            console.error(error)
        })
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {

        deleteEmployee(id).then((response) => {
            console.log(id + " Deleted")
            getAllEmployees()
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div className={'container'}>

            <h2 className={'text-center'}> List Of Employees</h2>
            <button className={'btn btn-primary mb-2'} onClick={addNewEmployee}>Add Employee</button>
            <table className={'table table-striped table-bordered'}>
                <thead>
                <tr>
                    <th> Employee ID</th>
                    <th> Employee First Name</th>
                    <th> Employee Last Name</th>
                    <th> Employee Email</th>
                    <th> Employee Department</th>
                    <th> Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{getDepartmentName(employee.departmentId)}</td>
                            <td>
                                <button className={'btn btn-info'} onClick={() => updateEmployee(employee.id)}>Update
                                </button>
                                <button className={'btn btn-danger'} onClick={() => removeEmployee(employee.id)}
                                        style={{marginLeft: '10px'}}
                                >Delete
                                </button>
                            </td>
                        </tr>)
                }
                <tr>

                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default ListEmployeeComponent

