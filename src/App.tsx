import React from 'react';
import {MainPage} from "./views/MainPage/MainPage";
require('./index.scss')

function App() {
  return (
      <div className={"wrapper"}>
        <MainPage></MainPage>
      </div>
  );
}

export default App;
