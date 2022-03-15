import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalCSS from './style/globalStyle'

ReactDOM.render(
    <>
      <GlobalCSS/>
      <App/>
    </>,
  document.getElementById('root')
);
