import axios from 'axios';

const Emp_Api_Base_url ="http://localhost:8080/api/v1/allEmployees";
class EmployeeService{

    getEmployees(){
        return axios.get(Emp_Api_Base_url);
    }
}

export default new EmployeeService()