import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/authorization/Login';
import Register from './components/authorization/Register';
import EmployeeList from './components/EmployeeList';
import useAuth from './hooks/useAuth';
import PrivateRoutes from './context/PrivateRoutes';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee'
function App() {
  const { auth } = useAuth();
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Login />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoutes />}>
              <Route path='/employees' element={<EmployeeList />}></Route>
              <Route path='addEmployee' element={<AddEmployee />}></Route>
              <Route path="/editEmployee/:id" element={<UpdateEmployee />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;