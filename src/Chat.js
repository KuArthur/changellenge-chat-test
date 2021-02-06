import {React,useState,useEffect} from 'react';

import './Chat.scss';

import UsersList from "./Components/UsersList/UsersList"
import MessagesList from './Components/MesssagesList/MessagesList';
import Controller from './Components/Controller/Controller';
import api from './api/api';


function App() {
  const [text, setText] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedUserId, setUserId] = useState();

  useEffect(() => {
    const fetchUserList = async () => {
      const newUsers = await api.getUserList();
      setUsers(newUsers);
      setUserId(newUsers[0].id);
    }

    fetchUserList();
  }, []);
  
  useEffect(() => {
    const fetchMessages = async () => {
      if (typeof selectedUserId === 'undefined') return;
 
      const newMessages = await api.getUserHistory(selectedUserId);
      setMessages(newMessages);
    }

    fetchMessages();
    setText('');
  }, [selectedUserId])

  const handleTextChange = text => {
    setText(text);
  }

  const handleSendMessage = async () => {
    if (!text) return;

    await api.sendMessage(selectedUserId, text);

    const newMessages = await api.getUserHistory(selectedUserId);
    setMessages(newMessages);

    setText('');
  }

  const handleChangeUser = async (userId) => {
    if (selectedUserId === userId) return;

    setUserId(userId);
  }

  return (
    <div className= "Chat">
      <div className = "Chat--userList">
        <UsersList selectedUserId={selectedUserId} users={users} onUserSelect={handleChangeUser}/>
      </div>

      <div className = "Chat--messageControl">
        <MessagesList messages = {messages} />
        <Controller onTextChange = {handleTextChange}
                    onSendMessage = {handleSendMessage}
                    value = {text}      
        />
      </div>
    </div>
  );
}

export default App;
