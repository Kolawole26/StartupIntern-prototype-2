import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Footers from './components/Footers';
import Register from './Pages/Register';
import AddItem from './Pages/AddItem';
import MyBuckets from './Pages/MyBuckets';
import EditItem from './Pages/EditItem';
import SingleItem from './Pages/SingleItem';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MyBuckets/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/addItem' element={<AddItem/>}/>
          <Route path='/updateItem' element={<EditItem/>}/>
          <Route path='/singleItem' element={<SingleItem/>}/>
        </Routes>
        
      </Router>
      <Footers/>
    </div>
  );
}

export default App;
