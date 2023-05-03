import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';
import Login from './components/authorization/Login';
import Register from './components/authorization/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          {/* <Route index element={<EmployeeList />}></Route> */}
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path='/employees' element={<EmployeeList />}></Route>
          <Route path='/addEmployee' element={<AddEmployee />}></Route>
          <Route path='/editEmployee/:id' element={<UpdateEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
