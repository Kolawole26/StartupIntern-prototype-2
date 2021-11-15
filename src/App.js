import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './MyPages/Login';
import Register from './MyPages/Register';
import MyBuckets from './MyPages/MyBuckets';
import SingleItem from './MyPages/SingleItem';
import AddItem from './MyPages/AddItem';
import EditItem from './MyPages/EditItem';
import Footer from './Components/Footer';
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
