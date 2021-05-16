import axios from 'axios';

const Emp_Api_Base_url ="http://localhost:8080/api/v1/employees";
class EmployeeService{

    getEmployees(){
        return axios.get(Emp_Api_Base_url);
    }
    
    createEmployee(employee){
        //console.log("hi")
        return axios.post(Emp_Api_Base_url,employee)
    }

    getByID(id){
        return axios.get(Emp_Api_Base_url+'/'+id)
    }

    updateEmployee(employee,id){
        return axios.put(Emp_Api_Base_url+'/'+id,employee);
    }

    deleteEmployee(id){
        return axios.delete(Emp_Api_Base_url+'/'+id);
    }
}

export default new EmployeeService()