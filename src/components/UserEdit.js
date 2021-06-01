import { useState, useEffect } from 'react';

import '../css/UserView.css';

function UserEdit ({ user, displayFields, addUserHandler, hideHandler }) {
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
        <div className="user-edit">
            <form>
                {displayFields.map((field)=>{
                    return (
                        <div>
                            <label>{field.name}:</label>
                            <input type="text" name={field.value} value={ formUser[field.value] } onChange={ updateUser }/>      
                        </div>
                    );
                })}
                <div>
                    <button onClick={ (e) => {e.preventDefault(); addUserHandler(formUser); hideHandler();} }>Submit</button>
                </div>
                <div>
                    <button onClick={ (e) => {e.preventDefault(); hideHandler()} }>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default UserEdit;