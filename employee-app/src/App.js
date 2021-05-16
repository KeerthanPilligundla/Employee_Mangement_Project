import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import './App.css';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import ViewEmployeecComponenet from './components/ViewEmployeecComponenet';

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path="/" exact component={ListEmployeeComponents}></Route>
                <Route path="/allEmployees" component={ListEmployeeComponents}></Route>
                <Route path="/addEmployee/:id" component={CreateEmployeeComponent}></Route>
                <Route path="/viewEmployee/:id" component={ViewEmployeecComponenet}></Route>
              </Switch>
            </div>
          <FooterComponent/>          
        
      </Router>  
    </div>
   

  );
}

export default App;
