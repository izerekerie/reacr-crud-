import './App.css';
import {BrowserRouter as Router,Switch, Route,Link} from 'react-router-dom'
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';

import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalProvider} from './context/GlobalState';
function App() {
  return (
    <div style={{maxWidth:"30rem",margin:"4rem auto"}}>
      <GlobalProvider>
      <Router>
      
      <Switch>
      <Route path="/add" component={AddUser}></Route>
        <Route path="/edit/:id" component={EditUser}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
      </GlobalProvider>
     
  
    </div>
  );
}

export default App;
