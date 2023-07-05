
import './App.css';
import io from 'socket.io-client'
import { useState } from "react";
import Chat from "./Chat";
import Grow from '@mui/material/Grow';
import Zoom from '@mui/material/Zoom';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const socket = io.connect("http://localhost:3001");



function App() {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className='joinChatContainer'>
          <h3>QuickChat</h3>
          <input
            type="text"
            placeholder="Your Name..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <Zoom in={true} style={{ transitionDelay: true ? '250ms' : '0ms' }}>
          <button onClick={joinRoom}>Join The Room</button>
          </Zoom>
          </div>
          
      )
        : (
          <Chat socket={socket} username={username} room={room} />
        )}
    </div>
  );
}

export default App;
