import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import { ModalProvider } from "./components/context/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ModalProvider>
  </React.StrictMode>
);
