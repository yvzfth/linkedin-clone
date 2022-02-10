import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => (
        setPosts(snapshot.docs.map(doc => (
          {
            id: doc.id,
            data: doc.data(),
          }
        )))
      ));
  }, [])

  const sendPost = (event) => {
    event.preventDefault();
    db.collection('posts').add({
      name: 'NAME',
      description: 'this is a test',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  }


  return (
    <div className="feed">
      <div class="feed__inputContainer">
        <div class="feed__input">
          <CreateIcon />
          <form action="">
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type='submit' >Send</button>
          </form>
        </div>
        <div class="feed__inputOptions">
          <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
          <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
          <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7fc15e' />
        </div>
      </div>
      {/* Posts */}
      {posts.map(({
        id,
        data: {
          name,
          description,
          message,
          photoUrl,
          timestamp }
      }) => (
        <Post
          key={id}
          name={name}
          description={description + ' ' + timestamp}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      {/* <Post name="Fatih" description="decription" message="hey its worked" /> */}

    </div>
  )
}

export default Feed