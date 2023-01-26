import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyles from "./styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import store from "./state";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
