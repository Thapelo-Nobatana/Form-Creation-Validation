// async fetch-data.js

async function fetchUserData()  {

 try {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(apiUrl);
    const users = await response.json();
    const dataContainer = document.getElementById('api-data');
    dataContainer.innerHTML = "";
    const userList = document.createElement('ul');
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(listItem);
    });
    dataContainer.appendChild(userList);
 } catch (error) {
    dataContainer.innerHTML = 'Failed to load user data.'
    console.error('Error fetching data:', error);
 }
}

document.addEventListener('DOMContentLoaded', fetchUserData);