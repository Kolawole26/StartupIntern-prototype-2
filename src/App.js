import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './MyPages/Login';
import Register from './MyPages/Register';
import MyBuckets from './MyPages/MyBuckets';
import SingleItem from './MyPages/SingleItem';
import AddItem from './MyPages/AddItem';
import EditItem from './MyPages/EditItem';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/' exact component={MyBuckets} />
          <Route path='/myItem' exact component={SingleItem} />
          <Route path='/addItem' exact component={AddItem} />
          <Route path='/updateItem' exact component={EditItem} />
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}


export default App;
