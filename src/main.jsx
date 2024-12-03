import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import "./index.css";
import App from "./App.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    <ToastContainer/>
    </Provider>
  </BrowserRouter>
);
