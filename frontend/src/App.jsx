import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Auth/Login';
import SingUp from './Pages/Auth/SingUp';

import Dashboard from './Pages/Admin/Dashboard';
import ManageTask from './Pages/Admin/ManageTask';
import CreateTask from './Pages/Admin/CreateTask';
import ManageUser from './Pages/Admin/ManageUser';

import UserDashboard from './Pages/User/UserDashboard';
import MyTask from './Pages/User/MyTask';
import ViewTaskDetails from './Pages/User/ViewTaskDetails';

import PrivetRoute from './routes/PrivetRoute';

function App() {
  return (
    <>
      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />

        {/* Admin Protected Routes */}
        <Route element={<PrivetRoute allowedRoles={['admin']} />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/tasks" element={<ManageTask />} />
          <Route path="/admin/create-task" element={<CreateTask />} />
          <Route path="/admin/users" element={<ManageUser />} />
        </Route>

        {/* User Protected Routes */}
        <Route element={<PrivetRoute allowedRoles={['user']} />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/task" element={<MyTask />} />
          <Route path="/user/task-details/:id" element={<ViewTaskDetails />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
