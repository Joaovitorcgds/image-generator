import React from 'react';
import Main from './Main';
import Header from './components/Header';

import { createStore, combineReducers} from "redux";
import { Provider } from "react-redux";

import {bgColorReducer, 
        officeReducer,
        techReducer,
        colorTextReducer} from "./reducers/generateImageReducer"

const allReducers = combineReducers({
  bgColor: bgColorReducer,
  colorText: colorTextReducer,
  office: officeReducer,
  tech: techReducer
})

const store = createStore(allReducers)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Main/>
      </Provider>
    </div>
  );
}

export default App;
