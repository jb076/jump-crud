import { useEffect, useState } from 'react';
import './App.css';
import { getUsers, deleteUser } from './services/dataService';


function UserDelete({ user }) {
  let removeUser =  () => {
    console.log('woot');
    // deleteUser(user.id);
  }
  return (
    <button onClick={ removeUser }>Remove Me</button>
  )
}

function UserDisplay ({ user }) {
  console.log(user);
  return (
    <div> 
      <span>{ user }</span>
      <UserDelete user = { user } />
    </div>
  )
}

function UserEdit ({ user }) {}


function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then((result) => {
        setUsers(result);
      })
  });

  return (
    <div className="App">
      { users.map(user => <UserDisplay user={ user } />) }
    </div>
  );
}

export default App;
