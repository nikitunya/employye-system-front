import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';
import useAuth from '../../hooks/useAuth';
import AuthContext from '../../context/AuthProvider';

function Login() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({... user, [e.target.name]: value});
    }

    const register = (e) => {
        e.preventDefault();
        navigate(`/register`);
    }

    const login = (e) => {
        e.preventDefault();
        UserService.login(user).then((response) => {
            const authToken = response.data.token;
            setAuth({user, authToken})
            navigate("/employees");
            console.log(111)
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
<div className="flex items-center justify-center max-w-2xl shadow mx-auto border mt-10 p-4" style={{ overflowX: "hidden" }}>
  <div className="py-8 w-full">
    <div className="font-thin text-2xl tracking-wider mb-8">
      <h1>Login</h1>
    </div>
    <div className="w-full mb-4">
      <label className="block text-gray-600 text-sm font-normal mb-2">Email</label>
      <input
        type="email"
        className="w-full h-10 border mt-2 px-2 py-2"
        name="email"
        value={user.email}
        onChange={(e) => handleChange(e)}
      />
    </div>
    <div className="w-full mb-4">
      <label className="block text-gray-600 text-sm font-normal mb-2">Password</label>
      <input
        type="password"
        className="w-full h-10 border mt-2 px-2 py-2"
        name="password"
        value={user.password}
        onChange={(e) => handleChange(e)}
      />
    </div>
    <div className="flex items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
      <button onClick={login} className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6 w-full md:w-auto">
        Login
      </button>
      <button onClick={(e) => register(e)} className="rounded text-white font-semibold bg-cyan-400 hover:bg-cyan-700 py-2 px-6 w-full md:w-auto">
        Register
      </button>
    </div>
  </div>
</div>
    )
}

export default Login;