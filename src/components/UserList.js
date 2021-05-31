import UserDisplay from './UserDisplay';

function UserList({ users, addUserHandler, deleteUserHandler }) {

    return (
      <div>
        { users?.length > 0 
          ? users.map(user => <UserDisplay key={ user.id } user={ user } addUserHandler={ addUserHandler } deleteUserHandler = { deleteUserHandler } />) 
          : <span>You do not have Any Peoples... Add peoples...</span>
        }
      </div>
    )
}

export default UserList;


