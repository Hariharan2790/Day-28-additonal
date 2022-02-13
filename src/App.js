
import './App.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Userlist } from './Userlist';
import Userform from './Userform';
import Productform from './Productform';
import Productlist from './Productlist';

function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />

          <div class="container-fluid">
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Userlist/>} />
            <Route path="/usersform" element={<Userform/>} />
            <Route path="/productform" element={<Productform/>} />
            <Route path="/product" element={<Productlist/>} />
            </Routes>
           
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
