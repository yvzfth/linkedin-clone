import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';

function App() {
  const user = useSelector(selectUser);


  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* app body */}
      {!user ? (
        <Login />
      ) : (

        <div class="app__body">

          {/* sidebar */}
          <Sidebar />
          {/* feed */}
          <Feed />

          {/* widgets */}

        </div>

      )}
    </div>
  );
}

export default App;
