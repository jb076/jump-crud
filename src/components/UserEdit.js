import { useState, useEffect } from 'react';

import '../css/UserView.css';

function UserEdit ({ user, displayFields, addUserHandler, hideHandler }) {
    const [formUser, updateFormUser] = useState({});
    const [formError, setFormError] = useState([]);
    
    useEffect(() => {
        user && updateFormUser({...user})
    }, [user]);
    
    const updateUser = (evt) => {
        setFormError('');
        const updatedUser = {...formUser};
        updatedUser[evt.target.name] = evt.target.value;
        updateFormUser(updatedUser);
    }

    function checkAndSubmit (formUser) {
        const newErrors = [];
        
        displayFields.map( field => {
            if (field.validator) {
                let isValid = field.validator(formUser[field.value])
                if (!isValid){
                    newErrors.push(field.failureText);
                }
            }
        })

        if (newErrors.length > 0) {
            // TODO: Highlight text fields on error.
            setFormError(newErrors);
        } else {
            addUserHandler(formUser);
            hideHandler();
        }
    }

    return (
        <div className="user-edit">
            <form>
                {displayFields.map((field)=>{
                    return (
                        <div>
                            <label>{field.name}{field.required && '*'}:</label>
                            <input type={field.type} name={field.value} value={ formUser[field.value] } onChange={ updateUser }/>      
                        </div>
                    );
                })}
                
                <div className="edit-button-group">
                    <button onClick={ (e) => {e.preventDefault(); checkAndSubmit(formUser);} }>Submit</button>
                    <button onClick={ (e) => {e.preventDefault(); hideHandler()} }>Cancel</button>
                </div>
            </form>

            {formError.length > 0 
                && <div className="errors">
                    <ul className="error-list">
                        {formError.map(error => <li>{error}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}

export default UserEdit;