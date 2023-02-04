import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyles from "./styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import store from "./state";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import PostPage from "./views/PostPage";
import NotFound from "./views/NotFound";
import CreatePostFull from "./components/CreatePostFull";
import Profile from "./views/Profile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20 * 1000,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/submit",
    element: <CreatePostFull />,
  },
  {
    path: "/user/profile",
    element: <Profile />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
