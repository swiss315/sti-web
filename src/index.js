import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CookiesProvider } from "react-cookie";
import 'bootstrap/dist/css/bootstrap.min.css';
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import Store, {persistor} from "./service/Constant/store.ts";
import {ToastProvider} from "./service/context/NotificationContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <CookiesProvider>
          <Provider store={Store}>
              <PersistGate persistor={persistor}>
                  <ToastProvider>
                      <App/>
                  </ToastProvider>
              </PersistGate>
          </Provider>
      </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
