
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Page/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Search from './components/Page/Search';

function App() {
  
  return (
 <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home/>}/> 
    <Route exact path='/search' element={<Search/>}/> 
  </Routes>
  </BrowserRouter>


 </div>
  );
}

export default App;
