import React, { useEffect, useState} from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { useAuth } from './../../hooks/auth';

const LiveChatComponent = () => {
  const { user } = useAuth({ middleware: 'auth' });
 // console.log('USER',user?.name);
  // socket.join(user.name)

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`);
        setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

useEffect(() => {
  console.log('USER',user?.name);

  socket?.emit('username', user?.name)
}, [socket, user])

  return (
    <div className="App">
      <header className="app-header">
       Epihelp Chat
      </header>
      {socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );

}
export default LiveChatComponent;