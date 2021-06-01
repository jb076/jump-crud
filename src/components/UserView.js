import { useState, useEffect } from 'react';
import UserList from './UserList';
import { addUser, getUsers, deleteUser } from '../services/UserService';
import { isEmail, textExists } from '../services/Validators';
import '../css/UserView.css';


function UserView() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        updateUserList();
    }, []);
      
    async function addUserAndUpdate (userInfo) {
        await addUser(userInfo);
        updateUserList();
    }

    async function updateUserList() {
        const users = await getUsers();
        setUsers(users);
    }

    async function removeUser  (userInfo) {
        await deleteUser(userInfo);
        updateUserList();
    }

    const displayFields = [
        {'name': 'Username', 'value': 'username', 'type': 'text', 'required': true,'validator': textExists, 'failureText': 'User Name Cannot Be Empty'},
        {'name': 'Last Name', 'value': 'lastname', 'type': 'text', 'required': false, 'validator': null},
        {'name': 'First Name', 'value': 'firstname', 'type': 'text', 'required': false,'validator': null},
        {'name': 'Email', 'value': 'email', 'type': 'text', 'required': false,'validator': isEmail, 'failureText': 'Email is Invalid'},
    ]

    return (
      <div className='main-area'>
            <div>
                <UserList users={ users } displayFields={ displayFields } addUserHandler={ addUserAndUpdate } deleteUserHandler={ removeUser }/>
            </div>
        </div>
    )
}

export default UserView;
