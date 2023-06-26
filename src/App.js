import './App.css';
import Header from './Header';
import UserCard from './UserCard';
import ChatPanel from './ChatPanel';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Header />
        <UserCard time="6:30" userName="Reza Mohammadi" seen={true} delivered={true} attach="" message={"Hi my dear friend"} />
        <UserCard time="2:00" userName="John Doe" seen={true} delivered={true} attach="" message={"Hi my dear friend"} />
        <UserCard time="1:56" userName="Michael " seen={true} delivered={true} attach="" message={"Hi my dear friend"} />
        <UserCard time="12:00" userName="Lisa" seen={true} delivered={true} attach="voice" message={""} />
        <UserCard time="18:45" userName="Unkown user" seen={true} delivered={true} attach="" message={"Hi my dear friend"} />
      </div>
      <ChatPanel />
    </div>
  );
}

export default App;
