import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Register from './Components/Register';
import AddItem from './Components/AddItem';
import EditItem from './Components/EditItem';
import MyBuckets from './Components/MyBuckets';
import SingleItem from './Components/SingleItem';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={MyBuckets}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/addItem' exact component={AddItem}/>
          <Route path='/updateItem' exact component={EditItem}/>
          <Route path='/myItem' exact component={SingleItem}/>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
