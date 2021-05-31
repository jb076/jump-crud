import { useState, useEffect } from 'react';
import axios from 'axios';
import UserEdit from './UserEdit';
import UserList from './UserList';


const baseUri = 'http://localhost:8005/api/systemusers';

function UserView() {
    const [showEdit, setShowEdit] = useState(false);
    const [users, setUsers] = useState([]);
    
    async function addUser (userInfo) {
        let request;
        if (userInfo.id) {
            let uri = `${baseUri}/${userInfo.id}`    
            request = axios.put(uri, userInfo)
        } else {
            let uri = baseUri;
            request = axios.post(uri, userInfo);
        }
        request.then(() => {
            getUsers().then((results)=>{setUsers(results)})
        })
        
    }

    async function removeUser  (userInfo) {
        const uri = `${baseUri}/${userInfo.id}`
        await axios.delete(uri);
        const result = await getUsers();
        setUsers(result);
    }

    async function getUsers () {
        const uri = `${baseUri}`
        const results = await axios.get(uri);
        return results.data.results
    }

    useEffect(() => {
        getUsers()
          .then((result) => {
            setUsers(result);
          })
      }, []);

    const toggleEdit = () => {setShowEdit(!showEdit)};
  
    return (
      <div className='user-view'>
  
            <button onClick={ toggleEdit }>Add A Hooman</button>
            { showEdit && <UserEdit addUserHandler={ addUser } hideHandler={ toggleEdit } /> }
            <UserList users={ users } addUserHandler={ addUser } deleteUserHandler={ removeUser }/>
  
        </div>
    )
}




export default UserView;