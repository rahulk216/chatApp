import React,{useState,useEffect} from 'react';
import './App.css';
import Message from './Message';
import db from './Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';


function App() {

const [input, setinput] = useState('');
const [messages,setMessage] =useState([]);
const [username,setUsername]=useState('');


useEffect(() => {
  db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setMessage(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
  })
},[] )


useEffect(() => {
  setUsername(prompt("enter name"));
}, [])

const sendMessages=(event)=>{
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setinput('');
}


  return (
    <div>
       <h1>
        SOCIALITIS
       </h1>
       
       <h3>HEY {username}</h3>
       <form className='app_control'>
       <input className="butt" value={input} onChange={event=>setinput(event.target.value)} />
       <button type='submit' onClick={sendMessages}>Send</button>
       </form>
       <FlipMove>
       {
         messages.map(({id,message})=>(
           <Message key={id} username={username} message={message}/>
         ))
       }
       </FlipMove>
    </div>
  );
}

export default App;
