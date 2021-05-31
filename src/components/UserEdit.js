import { useState, useEffect } from 'react';

function UserEdit ({ user, addUserHandler, hideHandler }) {
    const [formUser, updateFormUser] = useState({});
    
    useEffect(() => {
        user && updateFormUser({...user})
    }, [user]);
    
    const updateUser = (evt) => {
        const updatedUser = {...formUser};
        updatedUser[evt.target.name] = evt.target.value;
        updateFormUser(updatedUser);
    }

    return (
      <form>
        <label>User Name:</label>
        <input type="text" name="username" value = { formUser.username } onChange={ updateUser }/>
  
        <label>Last Name:</label>
        <input type="text" name="firstname" value = { formUser.firstname } onChange={ updateUser }/>
  
        <label>First Name:</label>
        <input type="text" name="lastname" value = { formUser.lastname } onChange={ updateUser }/>
  
        <label>Email:</label>
        <input type="text" name="email" value = { formUser.email } onChange={ updateUser }/>
  
        <label>Display Name:</label>
        <input type="text" name="displayname" value = { formUser.displayname } onChange={ updateUser }/>
  
        <label>Department:</label>
        <input type="text" name="deparment" value = { formUser.deparment } onChange={ updateUser }/>
        <button onClick={ (e) => {e.preventDefault(); addUserHandler(formUser); hideHandler();} }>Submit</button>
        <button onClick={ (e) => {e.preventDefault(); hideHandler()} }>Cancel</button>
      </form>
    )
}

export default UserEdit;