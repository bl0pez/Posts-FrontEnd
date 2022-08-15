import { PostsProvider } from "./contexts/PostsContext";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <BrowserRouter>
      <PostsProvider>
        <AppRouter />
      </PostsProvider>
    </BrowserRouter>
  );
};
