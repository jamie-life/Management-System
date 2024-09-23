import React, {useEffect, useState} from 'react'
import {deleteDepartment, getAllDepartments} from "../src/services/DepartmentService.js";
import {Link, useNavigate} from "react-router-dom";

export const ListDepartmentComponent = () => {

    const [departments, setDepartments] = useState([])
    const navigator = useNavigate()

    useEffect(() => {
        listOfDepartments()
    }, []);


    function updateDepartment(id) {
        navigator(`/edit-department/${id}`)
    }

    function listOfDepartments() {
        getAllDepartments().then((response) => {
            console.log(response.data)
            setDepartments(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    function removeDepartment(id) {
        deleteDepartment(id).then((response) => {
            console.log(response.data)
            listOfDepartments()
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className={"container"}>
            <h2 className={"text-center"}>List of Departments</h2>
            <Link to={'/add-departments'} className={'btn btn-primary mb-2'}>Add Department</Link>
            <table className={'table table-striped table-bordered'}>
                <thead>
                    <tr>
                        <th>Department Id</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         departments.map( departments =>
                             <tr key = {departments.id}>
                                 <td>{departments.id}</td>
                                 <td>{departments.departmentName}</td>
                                 <td>{departments.departmentDescription}</td>
                                 <td>
                                     <button onClick={() => updateDepartment(departments.id)} className={'btn btn-info'}>Update</button>
                                     <button onClick={() => removeDepartment(departments.id)} className={'btn btn-danger'}
                                     style={{marginLeft: '10px'}}>Delete</button>
                                 </td>
                             </tr>

                         )
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ListDepartmentComponent