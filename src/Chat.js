import {React,useState,useEffect} from 'react';

import './Chat.scss';

import UsersList from './Components/UsersList/UsersList'
import MessagesList from './Components/MesssagesList/MessagesList';
import Controller from './Components/Controller/Controller';
import Link from './Components/Link/Link';
import api from './api/api';


function App() {
  const [text, setText] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedUser, setUserId] = useState();

  useEffect(() => {
    const fetchUserList = async () => {
      const newUsers = await api.getUserList();
      setUsers(newUsers);
      setUserId(newUsers[0]);
    }

    fetchUserList();
  }, []);
  
  useEffect(() => {
    const fetchMessages = async () => {
      if (typeof selectedUser === 'undefined') return;
 
      const newMessages = await api.getUserHistory(selectedUser.id);
      setMessages(newMessages);
    }

    fetchMessages();
    setText('');
  }, [selectedUser])

  const handleTextChange = text => {
    setText(text);
  }

  const handleSendMessage = async () => {
    if (!text) return;

    await api.sendMessage(selectedUser.id, text);

    const newMessages = await api.getUserHistory(selectedUser.id);
    setMessages(newMessages);

    setText('');
  }

  const handleChangeUser = async (user) => {
    if (selectedUser.id === user.id) return;

    setUserId(user);
  }

  return (
    <div className= "Chat">
    <div className = "Chat--link-exit">
      <Link link = 'Выход' href = '#' />
    </div>
    <div className = "Chat--container">
       <div className = "Chat--userList">
        <UsersList selectedUser={selectedUser} users={users} onUserSelect={handleChangeUser}/>
      </div>

      <div className = "Chat--messageControl">
        <MessagesList messages = {messages} />
        <Controller onTextChange = {handleTextChange}
                    onSendMessage = {handleSendMessage}
                    value = {text}      
        />
      </div>
    </div>
     
    </div>
  );
}

export default App;
