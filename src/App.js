import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout, login } from './features/userSlice';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* app body */}
      {!user ? (
        <Login />
      ) : (

        <div className="app__body">

          {/* sidebar */}
          <Sidebar />
          {/* feed */}
          <Feed />

          {/* widgets */}
          <Widgets />
        </div>

      )}
    </div>
  );
}

export default App;
