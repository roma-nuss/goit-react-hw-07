import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "modern-normalize";
import "./index.css";
import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
