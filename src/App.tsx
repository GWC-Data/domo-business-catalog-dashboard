import { Provider } from "react-redux";
import "./index.css";

import store from "./redux/store";
import TableDashboard from "./pages/TableDashboard";
function App() {
  return (
    <Provider store={store}>
      <TableDashboard />
    </Provider>
  );
}

export default App;
