function textExists(content) {
    return content?.length > 0;
}
function isEmail(content) {
    // Regex Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript 
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(content?.toLowerCase());
}

export {textExists, isEmail};