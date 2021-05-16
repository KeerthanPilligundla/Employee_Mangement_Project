 import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';
 
 class ListEmployeeComponents extends Component {
     constructor(props){
         super(props)

         this.state ={
             employees:[]
         }

         this.addEmployee = this.addEmployee.bind(this);
         this.updateEmployee=this.updateEmployee.bind(this);
         this.deleteEmployee=this.deleteEmployee.bind(this);
         this.viewEmployee=this.viewEmployee.bind(this);
     }
     componentDidMount(){
         EmployeeServices.getEmployees().then((res)=>{
             this.setState({
                 employees: res.data
             })
         })
     }
     addEmployee(){
         this.props.history.push('/addEmployee/-1')
     }

     viewEmployee(id){
         this.props.history.push(`/viewEmployee/${id}`)
     }

     deleteEmployee(id){
        EmployeeServices.deleteEmployee(id).then(res=>{
            this.setState({employees: this.state.employees.filter(employee =>employee.id !== id)})
        })
     }
 

     updateEmployee(id){
        this.props.history.push(`/addEmployee/${id}`)
     }
     render() {
         return (
             <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className="row">
                     <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee </button>
                 </div>
                 <div className="row">
                    <table className= "table table-striped tabel-bordered">
                        <thead>
                            <tr>
                                <th> Employee First Name </th>
                                <th> Employee Last Name </th>
                                <th> Employee Email Id </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key ={employee.id}>
                                            <td>
                                                {employee.firstName}
                                            </td>
                                            <td>
                                                {employee.lastName}
                                            </td>
                                            <td>
                                                {employee.emailId}
                                            </td>
                                            <td>
                                                <button onClick={()=>this.updateEmployee(employee.id)} className="btn btn-info">
                                                    Update
                                                </button>
                                                <button style={{marginLeft : "10px"}} onClick={()=>this.deleteEmployee(employee.id)} className="btn btn-danger">
                                                    Delete
                                                </button>
                                                <button style={{marginLeft : "10px"}} onClick={()=>this.viewEmployee(employee.id)} className="btn btn-info">
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    
                                )
                            }
                        </tbody>
                    </table>
                 </div>
             </div>
         );
     }
 }
 
 export default ListEmployeeComponents;