import { PostsProvider } from './contexts/PostsContext';

export const App = () => {
  return (
    <PostsProvider>
      <div>App</div>
    </PostsProvider>
  )
}

