import { createRoot } from "react-dom/client";
import App from "./view/App";
import store from "./store/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
