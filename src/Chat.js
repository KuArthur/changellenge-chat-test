import {React,useState} from 'react';

import './Chat.scss';

// import User from "./Components/User/User";
// import UserLogo from "./img/user1.png"
import UsersList from "./Components/UsersList/UsersList"
import MessagesList from './Components/MesssagesList/MessagesList';
import Controller from './Components/Controller/Controller';

import users from "./db/users.json";

function App() {
  
  const [text,setText] = useState('');
  const [message,setMessage] = useState([]);

  const handleTextChange = text => {
    setText(text);
  }

  const handleSendMessage = () => {
    if(!text) return;
    setMessage(message.concat(text));
    setText('');
  }

  const handleChangeUser = () => {

  }
  return (
    <div className="App">
      <div className = "App-1">
        <UsersList users = {users} />
        <MessagesList messages = {message} />
      </div>
      <Controller onTextChange = {handleTextChange}
                  onSendMessage = {handleSendMessage}
                  value = {text}      
      />  
    </div>
  );
}

export default App;
