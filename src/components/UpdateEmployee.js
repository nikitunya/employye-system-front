import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function UpdateEmployee() {
    const navigate = useNavigate();
    const { id } = useParams(); // get id
    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: "",
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({... employee, [e.target.name]: value}); // TODO: Check this
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                console.log(id);
                const response = await EmployeeService.getEmployeeById(id);
                console.log(response);
                setEmployee(response.data);
            } catch(error){
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const cancel = (e) => {
        e.preventDefault(); // Not refrest page
        navigate('/');
    }

    const updateEmployee = (e) => {
        e.preventDefault();
    }

  return (
    <div className="flex max-w-2xl shadow mx-auto border-br">
    <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
            <h1>Update Employee</h1>
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
            onClick={updateEmployee}>Update</button>
            <button 
            onClick={cancel}
            className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>Cancel</button>
        </div>
    </div>
</div>
  )
}

export default UpdateEmployee;