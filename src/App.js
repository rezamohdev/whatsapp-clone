import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Link } from 'react-router-dom/cjs/react-router-dom';
import Header from './Header';
import UserCard from './UserCard';
import ChatPanel from './ChatPanel';
import chats from './chats';
import HomePage from './HomePage';

function App() {

  const goToHomePage = () => {
    // this.props.history.push('/');
    this.props.history.push('/home')
    console.log('key ecs');


  }
  const handleEscapePress = (e) => {
    if (e.key === "Escape") {
      goToHomePage();
      console.log('key ecs');

    }
  }
  return (
    <div className="App">
      <div className='sidebar'>
        <Header />
        <ul>
          {chats.map((chat) => (
            <li key={chat.id} className='list'>
              <Link to={`/chats`} className="link" >
                <UserCard time={chat.time} userName={chat.username} seen={true} delivered={true} attach={chat.attach} message={chat.message} />
              </Link>
            </li>
          )
          )}
        </ul>
      </div>
      <Switch>
        <Route exact path='/chats' >
          <ChatPanel onEscapePress={handleEscapePress} />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
