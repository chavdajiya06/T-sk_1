import ComponentA from './Components/ComponentA';
import { Provider } from "react-redux";
import {store} from './app/store.js';
import './App.css'

function App() {

  return (
    <>
      <Provider store={store}>
        <h1>React Text App</h1>
        <ComponentA/>
      </Provider>
    </>
  );
}

export default App
