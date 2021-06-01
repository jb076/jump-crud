import { useState } from 'react';
import UserEdit from './UserEdit';
import UserDisplay from './UserDisplay';

import '../css/UserView.css';

function UserList({ users, displayFields, addUserHandler, deleteUserHandler }) {
    
    const [showEdit, setShowEdit] = useState(false);

    function toggleEdit () {
        setShowEdit(!showEdit)
    }

    return (
      <div className="user-list">
        <button class="new-user-button" onClick={ toggleEdit }>{showEdit ? '-': '+'}</button>
            
        <div className="user-list-headers"> 
            { displayFields.map(field => <div key={field.value}>{field.name}</div>)}
            <div />
        </div>
        
        { showEdit && 
                <div className="new-user-edit">
                    <UserEdit displayFields= {displayFields} addUserHandler={ addUserHandler } hideHandler={ toggleEdit } /> 
                </div>
            }
        
        
        { users?.length > 0 
            ? users.map(user => {
                return <UserDisplay 
                    key={ user.id } 
                    user={ user } 
                    displayFields = { displayFields }
                    addUserHandler={ addUserHandler } 
                    deleteUserHandler = { deleteUserHandler } 
                />
            }) 
            : <span>No users present.  Please Add Some.</span>
        }
      </div>
    )
}

export default UserList;


