import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'

export const AuthRouter = () => {
    return (
           <Routes>
             <Route path='/auth/' element={<AuthLayout />} >
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
                <Route path="*" element={<Navigate to="/auth/login" />} />
           </Routes>
    )
}
