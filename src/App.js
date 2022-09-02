import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header';
import Home from './Pages/Home';
import Curd from './Pages/Curd';
import Create from './Pages/Create';
import Update from './Pages/Update';

function App() {
  return (
    <div className="App">
         <Header></Header>
        
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/curd' element={<Curd></Curd>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/update' element={<Update></Update>}></Route>
        </Routes>
    </div>
  );
}

export default App;
