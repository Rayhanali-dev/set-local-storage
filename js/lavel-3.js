const getInputValue = (id) => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
}

const sendName = () => {
    const nameField = getInputValue('name-field');
    localStorage.setItem('Name', nameField);
}

const sendEmail = () => {
    const emailField = getInputValue('email-field');
    localStorage.setItem('Email', emailField);
}

const sendMessage = () => {
    const messageField = getInputValue('message-field');
    localStorage.setItem('Message', messageField);
}

const deleteName = () => {
    localStorage.removeItem('Name')
}

const deleteEmail = () => {
    localStorage.removeItem('Email')
}

const deleteMessage = () => {
    localStorage.removeItem('Message')
}

const clearAll = () => {
    localStorage.clear();
}

const getLocalStorageValue = () => {
    let info = []
    const getData = JSON.parse(localStorage.getItem('info'))
    if (getData) {
        info = getData
    }
    const item = {
        Name: getInputValue('name-field'),
        Email: getInputValue('email-field'),
        Message: getInputValue('message-field')
    }
    info.push(item);
    localStorage.setItem('info', JSON.stringify(info));
    return info;
}

const sendAll = () => {
    getLocalStorageValue();
}
