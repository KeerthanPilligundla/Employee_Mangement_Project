
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponents from './components/ListEmployeeComponents';

function App() {
  return (
    <div>
       <HeaderComponent/>
        <div className="container">
          <ListEmployeeComponents />
        </div>
       <FooterComponent/>
    </div>
   

  );
}

export default App;
