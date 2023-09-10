import { Provider } from "react-redux";
import "../src/globalCss/globalCss.css";
import AppRoutes from "./routes";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
