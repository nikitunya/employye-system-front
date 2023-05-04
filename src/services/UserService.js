import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employee-system";

class UserService {
    login(user){
        return axios.post(EMPLOYEE_API_BASE_URL + "/authenticate", user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    register(user){
        return axios.post(EMPLOYEE_API_BASE_URL + "/register", user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export default new UserService();