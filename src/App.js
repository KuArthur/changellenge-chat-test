import {React,useState} from 'react';

import './App.scss';

// import User from "./Components/User/User";
// import UserLogo from "./img/user1.png"
import UsersList from "./Components/UsersList/UsersList"
import MessagesList from './Components/MesssagesList/MessagesList';
import Input from './Components/Input/Input'

function App() {
  const [text,setText] = useState('');
  const [message,setMessage] = useState([]);

  const handleTextChange = text => {
    setText(text)
  }

  const handleSendMessage = () => {
    setMessage(message.concat(text))
    setText('')
  }

  return (
    <div className="App">
    <div className = "App-1">
      <UsersList />
      <MessagesList messages = {message} />
    </div>
    <Input  onTextChange = {handleTextChange}
            onSendMessage = {handleSendMessage}
            value = {text}      
    />  
    </div>
  );
}

export default App;
