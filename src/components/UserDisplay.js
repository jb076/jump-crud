import { useState } from 'react';
import UserEdit from './UserEdit'

function UserDisplay ({ user, addUserHandler, deleteUserHandler }) {
    const [showEdit, setShowEdit] = useState(false);
    const toggleShowEdit = () => {setShowEdit(!showEdit)};
    

    return (
      <div>
        { showEdit
            ? <UserEdit user={ user } addUserHandler={addUserHandler} hideHandler={ toggleShowEdit }/>
            : <div> 
                <span>{ user.firstname }</span> 
                <span>{ user.lastname }</span>
                <span>{ user.username }</span>
                <span>{ user.email }</span>
                <span>{ user.jobTitle }</span> 
                <button onClick= { () => {deleteUserHandler(user)} }>Delete User</button>
                <button onClick={ toggleShowEdit }>Edit User</button>
            </div>
      }
      </div>
    )
}

export default UserDisplay;