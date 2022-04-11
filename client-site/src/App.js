import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContextApi from './ContextApi/ContextApi';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';

function App() {
  return (
    <ContextApi>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </ContextApi>
  );
}

export default App;
