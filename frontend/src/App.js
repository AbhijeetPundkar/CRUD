
import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser';
import Crud from './components/Crud';
import { BrowserRouter,Route,Routes } from 'react-router-dom';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Crud />} />
          <Route path='/all' element={<AllUser />} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/edit/:id'element={<EditUser />} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
