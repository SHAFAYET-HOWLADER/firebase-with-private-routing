import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home/>}>Home</Route>
         <Route path='/register' element={<Register/>}>Register</Route>
         <Route path='/products' element={<Products/>}>Register</Route>
         <Route path='/reviews' element={<Reviews/>}>Register</Route>
         <Route path='/login' element={<Login/>}>Login</Route>
       </Routes>
    </div>
  );
}

export default App;
