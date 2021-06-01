import { useState } from 'react';
import UserEdit from './UserEdit';

import '../css/UserView.css';

function UserDisplay ({ user, displayFields, addUserHandler, deleteUserHandler }) {
    const [showEdit, setShowEdit] = useState(false);
    
    const toggleShowEdit = () => {setShowEdit(!showEdit)};

    return (
      <div>
        { showEdit
            ? <UserEdit user={ user } displayFields={displayFields} addUserHandler={addUserHandler} hideHandler={ toggleShowEdit }/>
            : <div className="user-entry"> 
                {displayFields.map(field=> <div key={field.value}>{user[field.value]}</div>)}
                <div className="edit-button-group">
                    <button onClick= { () => {deleteUserHandler(user)} }>Delete User</button>
                    <button onClick={ toggleShowEdit }>Edit User</button>
                </div>
            </div>
      }
      </div>
    )
}

export default UserDisplay;