import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyles from "./styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import store from "./state";
import { Provider } from "react-redux";

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
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
