import React from 'react';
import { Link, Route, Switch } from "react-router-dom";

import Products from './components/products';



import Login from './Login/Login';

const App = () => {
  return(
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Products} />
    </div>
  )
}







export default App;
