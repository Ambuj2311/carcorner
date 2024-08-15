
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Trending from './components/Trending';
import Upcoming from './components/Upcoming';
import Vintage from './components/Vintage';
import Contact from './components/Contact';
import { Routes,Route } from 'react-router';

function App() {
  return (
    <div className='row me-0'>
      <div className='col-sm-12 ms-0'>
        <Menu/>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/Trending' Component={Trending}></Route>
          <Route path='/Upcoming' Component={Upcoming}></Route>
          <Route path='/Vintage' Component={Vintage}></Route>
          <Route path='/Contact' Component={Contact}></Route>


        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
