import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({... user, [e.target.name]: value}); // TODO: Check this
    }

    const register = (e) => {
        e.preventDefault();
        navigate(`/register`);
    }

  return (
    <div className="flex items-center justify-center max-w-2xl shadow mx-auto border mt-10">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Login</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Email</label>
                <input type='email' 
                className='h-10 w-96 border mt-2 px-2 py-2'
                name='email'
                value={user.email}
                // onChange={(e) => handleChange(e)}
                ></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Password</label>
                <input type='password' 
                className='h-10 w-96 border mt-2 px-2 py-2'
                name='password'
                value={user.password}
                // onChange={(e) => handleChange(e)}
                ></input>
            </div>
            <div className='flex items-center justify-center h-14 w-full my-4 space-x-4 pt-4 flex-wrap'>
                <button 
                // onClick={}
                className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>Login</button>
                <button 
                onClick={(e) => register(e)}
                className='rounded text-white font-semibold bg-cyan-400 hover:bg-cyan-700 py-2 px-6'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Login