import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useContext } from 'react';
const AddEmployee = () => {
    const { auth } = useAuth();
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({... employee, [e.target.name]: value}); // TODO: Check this
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response);
            navigate("/employees");
        }).catch((error) => {
            console.log(error);
        })
    }

    const clear = (e) => {
        e.preventDefault(); // Not refrest page
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: "",
        })
    }

  return (
    <div className="flex items-center justify-center max-w-2xl shadow mx-auto border mt-10 p-4" style={{ overflowX: "hidden" }}>
        <div className="py-8 w-full">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                <input type='text' 
                className='h-10 w-96 border mt-2 px-2 py-2'
                name='firstName'
                value={employee.firstName}
                onChange={(e) => handleChange(e)}></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                <input type='text' 
                className='h-10 w-96 border mt-2 px-2 py-2'
                name='lastName'
                value={employee.lastName}
                onChange={(e) => handleChange(e)}></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Email</label>
                <input type='email' 
                className='h-10 w-96 border mt-2 px-2 py-2'
                name='emailId'
                value={employee.emailId}
                onChange={(e) => handleChange(e)}></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'
                onClick={saveEmployee}>Save</button>
                <button 
                onClick={clear}
                className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>Clear</button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee;