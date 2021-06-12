import React, { useEffect, useState  } from 'react'; 
import './messenger.webp';
import './App.css';
import { Button ,InputLabel, Input} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('message').orderBy('timestamp','asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc =>({id: doc.id, message: doc.data() })))
    });
    
  }, [])
  
 useEffect(() => {
   //const username =prompt('Please enter your name')
   setUsername(prompt('Please enter your name')); 
   //run code here 
 }, [] ) //condition //if this is blank [],this code runs once when the app component loads

  const sendMessage = (event) => {
    event.preventDefault();
    window.scrollTo(0,999999999999);

    db.collection('message').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Messenger ! </h1>
      <h2>{username}</h2>


      <form className="app__form">
          
        <FormControl className="app__formcontrol">
            
           <Input className="app__input" placeholder="Enter a message" value={input} onChange= {event => setInput(event.target.value)} />
           
            <IconButton className="app__iconbutton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <EmojiEmotionsIcon /> <SendIcon />
            </IconButton>
        </FormControl>
      </form>
      <FlipMove>
            {
              messages.map(({id, message}) => (
                <Message key={id} username={username} message={message}/>
                
              ))
            }

      </FlipMove>
    
    </div>
  );
}

export default App
