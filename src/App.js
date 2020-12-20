
import './App.css';
import React, {useState,useEffect} from 'react';
import { FormControl,Button, InputLabel, Input } from '@material-ui/core';
import Message from './Message';

function App() {

  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([{username:'gd',text:'softop'},{username:'happy',text:'job'},{username:'copy',text:'good practice'}]);
  const [username,setUsername] = useState('');

   //useState = variable in react (peace of memory)
   //useEffect = run code on a condtion
 

  useEffect(() =>{
    //run code helpers
    // if its blank inside [], this code run once when  the app componenet loads
    setUsername(prompt('please enter your name'));
  }, [] ) //condition

  const sendMessage = (event) =>{
    // all the logic to send message goes
    event.preventDefault(); //prevent refreshing
    
    setMessages([...messages,{username:username,text:input}]);
    setInput('');


  }
  return (
    <div className="App">
     <h1>Messanger!</h1>
     <h2>Welcome {username}</h2>

    <form>

    <FormControl>
  <InputLabel>Enter a messages</InputLabel>
  <Input value={input} onChange={event =>setInput(event.target.value)}/>
  
     <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
</FormControl>

     

     </form>
     
     {/* {message themselves} */}
     {
       messages.map(message =>(
         <Message username={message.username} text={message.text}/>
        
  ))
     }
    </div>
  );
}

export default App;
