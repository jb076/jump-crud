import axios from 'axios';

// Should be in an environment specific config file
const baseUri = 'http://localhost:8005/api/systemusers';

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
    
    return request;
}

async function deleteUser  (userInfo) {
    const uri = `${baseUri}/${userInfo.id}`
    return axios.delete(uri);
}

async function getUsers () {
    const uri = `${baseUri}`
    const results = await axios.get(uri);
    return results.data.results
}

export { getUsers, addUser, deleteUser };
