import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import EditUser from './features/users/EditUser'
import NewUserForm from './features/users/NewUserForm'
import UsersList from './features/users/UsersList'
import Form1sList from './features/form1/Form1sList'
import Form2sList from './features/form2/Form2sList'
import Form3sList from './features/form3/Form3sList'
import EditForm1 from './features/form1/EditForm1'
import EditForm2 from './features/form2/EditForm2'
import EditForm3 from './features/form3/EditForm3'
import NewForm1 from './features/form1/NewForm1'
import NewForm2 from './features/form2/NewForm2'
import NewForm3 from './features/form3/NewForm3'
import Prefetch from './features/auth/PreFetch'
import PersistLogin from './features/auth/PersistLogin'
import RequireAuth from './features/auth/RequireAuth'
import { ROLES } from './config/roles'
import useTitle from './hooks/useTitle'

function App() {
  useTitle('Self Tax Assessment Tool')
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

    {/* protected routes */}
    <Route element={<PersistLogin />}>  
      <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>  
        <Route element={<Prefetch />}>  
          <Route path="dash" element={<DashLayout />}>

            <Route index element={<Welcome />} />
            
            <Route element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />}>  
              <Route path="users">
                <Route index element={<UsersList />} />
                <Route path=":id" element={<EditUser />} />
                <Route path="new" element={<NewUserForm />} />
              </Route>
            </Route>
            
            <Route path="form1s">
              <Route index element={<Form1sList />} />
              <Route path=":id" element={<EditForm1 />} />
              <Route path="new" element={<NewForm1 />} />
            </Route>

            <Route path="form2s">
              <Route index element={<Form2sList />} />
              <Route path=":id" element={<EditForm2 />} />
              <Route path="new" element={<NewForm2 />} />
            </Route>

            <Route path="form3s">
              <Route index element={<Form3sList />} />
              <Route path=":id" element={<EditForm3 />} />
              <Route path="new" element={<NewForm3 />} />
            </Route>

          </Route>{/* End Dash */}
        </Route>
      </Route>
    </Route>{/* End protected routes */}

      </Route>
    </Routes>
  );
}

export default App;