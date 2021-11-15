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
import Navigation from './Components/Navigation';
import { useState } from 'react';

function App() {

  const [links, setLinks] = useState(true);
  
  const firstLinks = () => {
          setLinks(true)
  }
  const secondLinks = () => {
          setLinks(false)
  }

  return (
    <div className="App">
      <Router>
        <Navigation links={links}/>
        <Switch>
        <Route path='/login' exact component={() => <Login firstLinks={firstLinks}/>} />
          <Route path='/register' exact component={() => <Register firstLinks={firstLinks}/>} />
          <Route path='/' exact component={() => <MyBuckets secondLinks={secondLinks}/>} />
          <Route path='/myItem' exact component={() => <SingleItem secondLinks={secondLinks}/>} />
          <Route path='/addItem' exact component={() => <AddItem secondLinks={secondLinks}/>} />
          <Route path='/updateItem' exact component={() => <EditItem secondLinks={secondLinks}/>} />
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
