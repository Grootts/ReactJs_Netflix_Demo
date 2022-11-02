import './App.css';
import Contents from './components/Contents/Contents';
import Intro from './components/Intro/Intro';
import Menu from './components/Menu/Menu';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
 <div>
  
<Navbar/>
<Intro/>
<Contents/>
<Menu/>
<MovieDetail/>
 </div>
  );
}

export default App;
