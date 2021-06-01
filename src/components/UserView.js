import { useState, useEffect } from 'react';
import axios from 'axios';
import UserEdit from './UserEdit';
import UserList from './UserList';

import '../css/UserView.css';


const baseUri = 'http://localhost:8005/api/systemusers';

function UserView() {
    const [showEdit, setShowEdit] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
          .then((result) => {
            setUsers(result);
          })
      }, []);
      
    const displayFields = [
        {'name': 'UserName', 'value': 'username'},
        {'name': 'Last Name', 'value': 'lastname'},
        {'name': 'First Name', 'value': 'firstname'},
        {'name': 'Email', 'value': 'email'},
    ]

    return (
      <div className='main-area'>
            <button onClick={ toggleEdit }>Add A Hooman</button>
            { showEdit && <UserEdit displayFields= {displayFields} addUserHandler={ addUser } hideHandler={ toggleEdit } /> }
            <div>
                <UserList users={ users } displayFields={displayFields} addUserHandler={ addUser } deleteUserHandler={ removeUser }/>
            </div>
        </div>
    )

    /**
     * Creates or updates a user.  Request method determined by whether or not an id is present on the 
     * user.  Ids are only present on extant records.
     * @param {object} userInfo 
     */
    async function addUser (userInfo) {
        let request;
        if (userInfo.id) {
            let uri = `${baseUri}/${userInfo.id}`    
            request = axios.put(uri, userInfo)
        } else {
            let uri = baseUri;
            request = axios.post(uri, userInfo);
        }
        
        await request;
        updateUserList();
    }

    async function getUsers () {
        const uri = `${baseUri}`
        const results = await axios.get(uri);
        return results.data.results
    }

    async function updateUserList() {
        const users = await getUsers();
        setUsers(users);
    }

    async function removeUser  (userInfo) {
        const uri = `${baseUri}/${userInfo.id}`
        await axios.delete(uri);
        const result = await getUsers();
        setUsers(result);
    }

    function toggleEdit () {
        setShowEdit(!showEdit)
    }
}




export default UserView;