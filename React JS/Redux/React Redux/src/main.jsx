import { createRoot } from "react-dom/client";
import App from "./view/App.jsx";

// importing store
import store from "./store/store.js";

// import Provider Component
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
