import { Routes, Route } from 'react-router-dom';
import { PostsLayout } from '../posts/layout/PostsLayout';
import { Post, Posts } from '../posts';
import { AuthLayout } from '../auth/layouts/AuthLayout';
import { Login } from '../auth/pages/Login';

export const AppRouter = () => {

  return (
    <Routes>

      <Route path="/auth/" element={<AuthLayout />} >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<h1>Register</h1>} />
      </Route>

      <Route path='/feed/' element={<PostsLayout />} >
        <Route path='posts' element={<Posts />} />
        <Route path='post/:id' element={<Post />} />
      </Route>


    </Routes>
  )
}
