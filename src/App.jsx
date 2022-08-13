import { PostsProvider } from "./contexts/PostsContext";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <PostsProvider>
        <div>App</div>
      </PostsProvider>
    </BrowserRouter>
  );
};
