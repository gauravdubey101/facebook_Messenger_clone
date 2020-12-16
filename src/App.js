
import './App.css';
import React, {useState} from 'react';

function App() {

  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  console.log(input);

  const sendMessage = (event) =>{
    // all the logic to send message goes
    setMessages([...messages,input]);
  }
  return (
    <div className="App">
     <h1>Hello world!</h1>

     <input value={input} onChange={event =>setInput(event.target.value)} />
     <button onClick={sendMessage}>Send Message</button>

     {/* {input feild} */}
     {/* {button} */}
     {/* {message themselves} */}
    </div>
  );
}

export default App;
