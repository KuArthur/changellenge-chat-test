import './App.scss';

import User from "./Components/User/User";
import UserLogo from "./img/user1.png"

function App() {
  return (
    <div className="App">
      <User img_url = {UserLogo}
            name = "Иван Иванов" 
      />
    </div>
  );
}

export default App;
