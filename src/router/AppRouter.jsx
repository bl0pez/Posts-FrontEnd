import { Routes, Route } from 'react-router-dom';
import { PostsLayout } from '../posts/layout/PostsLayout';
import { Post, Posts } from '../posts';

export const AppRouter = () => {

  

  return (
    <Routes>

      <Route path='/feed/' element={<PostsLayout />} >
        <Route path='posts' element={<Posts />} />
        <Route path='post/:id' element={<Post />} />
      </Route>


    </Routes>
  )
}
