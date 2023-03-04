import './App.css';
import CounterWrap from './Components/Counter/CounterWrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route ,Routes } from 'react-router-dom'
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import NavBar from './Components/NavBar/NavBar';
import Details from './Components/Details/Details';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
function App() {
  
  return (
    <div className='w-100'>
      <Router>
          <NavBar/>
        <Routes>
          <Route path='/React-First-Projects/' element = {<Home/>}></Route>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/shop' element = {<Shop/>}></Route>
          <Route path='/counter' element = {<CounterWrap/>}></Route>
          <Route path='/about' element = {<About/>}></Route>
          <Route path='/shop/:id' element = {<Details/>}></Route>
          <Route path='/login' element = {<LogIn/>}></Route>
          <Route path='/register' element = {<Register/>}></Route>
          <Route path='*' element = {<Details/>}></Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
