import React from 'react';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Login from './Pages/Auth/Login';
import SingUp from './Pages/Auth/SingUp';
import Dashboard from './Pages/Admin/Dashboard';
import ManageTask from './Pages/Admin/ManageTask';
import CreateTask from './Pages/Admin/CreateTask';
import ManageUser from './Pages/Admin/ManageUser';

import UserDashboard from './Pages/User/UserDashboard';
import MyTask from './Pages/User/MyTask';
import ViewTaskDetails from './Pages/User/ViewTaskDetails';


function App() {

  return (
    <div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/singup" element={<SingUp/>} />

            {/* Admin router----------------------------------------- */}
            <Route element={<PrivetRoute allowedRoles={["admin"]}/>} />
              <Route path='/admin/dashboard' element={<Dashboard/>} />
              <Route path='/admin/tasks' element={<ManageTask/>} />
              <Route path='/admin/craete-task' element={<CreateTask/>} />
              <Route path='/admin/users' element={<ManageUser/>} />

            {/* user router----------------------------------------- */}
            <Route element={<PrivetRoute allowedRoles={["user"]}/>} />
              <Route path='/user/dashboard' element={<UserDashboard/>} />
              <Route path='/user/task' element={<MyTask/>} />
              <Route path='/user/task-details/:id' element={<ViewTaskDetails/>} />
                          
          </Routes>
        </Router>
    </div>
  )
}

export default App
