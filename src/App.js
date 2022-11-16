import React from 'react';
// import Login from './components/Login';
import Form from './components/Form';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import Render from './Render';




function App() {
  return (
<div className="App">
<Routes>
<Route path="/" element={<Render/>} /> 
<Route path="login" element={ <Login/> } />
<Route path="form" element={ <Form/> } />
</Routes>
</div>
)
}
export default App;
