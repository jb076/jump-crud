import UserDisplay from './UserDisplay';

import '../css/UserView.css';

function UserList({ users, displayFields, addUserHandler, deleteUserHandler }) {

    return (
      <div className="user-list">
        <div className="user-list-headers"> 
            { displayFields.map(field => <div>{field.name}</div>)}
            <div />
            <div />
        </div>
        
        
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


