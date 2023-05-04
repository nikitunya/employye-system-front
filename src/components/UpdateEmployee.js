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
                setEmployee(response.data);
            } catch(error){
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const cancel = (e) => {
        e.preventDefault(); 
        navigate('/employees');
    }

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(id, employee).then((response) => {
            console.log(response);
            navigate("/employees");
        }).catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className="flex items-center justify-center max-w-2xl shadow mx-auto border mt-10 p-4" style={{ overflowX: "hidden" }}>
    <div className="py-8 w-full">
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