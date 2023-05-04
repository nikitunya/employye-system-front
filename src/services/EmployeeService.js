import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employee-system"; // TODO: Maybe change

class EmployeeService {
  
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL + "/createEmployee", employee, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL + "/employees", {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + "/employees/" + id, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL + "/employees/" + id, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    updateEmployee(id, employee){
        return axios.put(EMPLOYEE_API_BASE_URL + "/employees/" + id, employee, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

export default new EmployeeService();