import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Board from "./components/Board";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Board />
      </div>
    </Provider>
  );
}

export default App;
