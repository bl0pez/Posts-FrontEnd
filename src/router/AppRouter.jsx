import { Routes, Route } from 'react-router-dom';
import { PostsLayout } from '../posts/layout/PostsLayout';
import { Posts } from '../posts/pages/Posts';

export const AppRouter = () => {
  return (
    <Routes>

      <Route path='/' element={<PostsLayout />} >
        <Route index element={<Posts />} />
      </Route>


    </Routes>
  )
}
