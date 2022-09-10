import { Outlet } from 'react-router-dom';
import { PostsProvider } from '../../contexts/PostsContext';
import { Header } from '../components/header/Header';

export const PostsLayout = () => {
  return (
    <PostsProvider>
      <Header />
      <Outlet />
    </PostsProvider>
  )
}
