import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import PrivateRouter from './components/PrivateRouter';
import PrivatePage from './pages/PrivatePage';
import NotFound from './pages/NotFound';

function App() {
  // function fetchMe() {
  //   userKit.getMe()
  //   .then(res=>res.json())
  //   .then(data => console.log(data))
  // }

  // function fetchCustomerList() {
  //   userKit.getCustomerList()
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // }

  return (
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRouter path="/private" component={PrivatePage}/>
        <Route to="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
