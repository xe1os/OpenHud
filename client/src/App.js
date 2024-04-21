import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react'
// import { GSISocket } from 'csgogsi-socket';

// const GSI = GSISocket("http://localhost:3001")
const socket = io.connect("http://localhost:3001")


function App() {
  const [message, setMessage] = useState("");
  const [messageRecieved, setMessageRecieved] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", {message})
  };

  useEffect(() => {
    socket.on('post_received', (data) => {
      setMessageRecieved(data);
    })
  }, [socket])

  // GSI.on('roundEnd', team => {
  //   console.log(`Team  ${team.name} win!`);
  // });
  // GSI.on('bombPlant', player => {
  //     console.log(`${player.name} planted the bomb`);
  // });

  return (
    <>
      <div className='App'>
        <input 
        onChange={(event) => {setMessage(event.target.value)}}
        placeholder='Message...'
        />
        <button onClick={sendMessage}>Send Message</button>
        <h1>Message:</h1>
        {messageRecieved}
        
      </div>
    </>
  );
}

export default App;
