
import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Ward from './pages/Ward';
import Home from './pages/Home';
import Layout from './pages/Layout';
function App() {
  
 
  return (
    <div className="App">
       
        <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/ward' element={<Ward/>}/>
          </Route>
        </Routes>
        </BrowserRouter>



    
    </div>
  );
}

export default App;
