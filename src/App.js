import './App.css';
import Header from './Header';
import UserCard from './UserCard';
import ChatPanel from './ChatPanel';
import chats from './chats';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Header />
        {chats.map((chat) => (<UserCard time={chat.time} userName={chat.username} seen={true} delivered={true} attach={chat.attach} message={chat.message} />)
        )}
      </div>
      <ChatPanel />
    </div>
  );
}

export default App;
