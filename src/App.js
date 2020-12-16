
import './App.css';
import React, {useState} from 'react';

function App() {

  const [input,setInput] = useState('');
  const [messages,setMessages] = useState(['heloo','hi','dfndjdf']);
  console.log(input);
  console.log(messages);

  const sendMessage = (event) =>{
    // all the logic to send message goes
    event.preventDefault(); //prevent refreshing
    setMessages([...messages,input]);
    setInput('');

  }
  return (
    <div className="App">
     <h1>Messanger!</h1>

    <form>
     <input value={input} onChange={event =>setInput(event.target.value)} />
     <button type="submit" onClick={sendMessage}>Send Message</button>

     </form>
     
     {/* {message themselves} */}
     {
       messages.map(message =>(
         <p>{message}</p>
  ))
     }
    </div>
  );
}

export default App;
