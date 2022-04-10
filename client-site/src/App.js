import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
