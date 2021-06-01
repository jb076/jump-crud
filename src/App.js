import './App.css';
import UserView from './components/UserView';

// const baseUri = '';
// async function deleteUser (userId) {
//   const uri = `${baseUri}/${userId}`;
//   // return axios.delete(uri);
// } 


function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to Jump Crud</header>
      <UserView />
    </div>
  );
}

export default App;








