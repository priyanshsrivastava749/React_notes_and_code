import { useState } from 'react'
import './App.css'
import Login_button from './components/login_button';
import Logout_button from './components/logout_button'

function App() {
  const [isLoggedin, Loggedin_status] = useState(true);
  // method1
  // if (isLoggedin == true) {
  //   return <Login_button />;
  // }
  // else {
  //   return <Logout_button />;
  // }
  // method2
  // return isLoggedin ? <Logout_button /> : <Login_button />;
  // method 3
  // return <div>{isLoggedin && <Logout_button />}</div>;
}

export default App
