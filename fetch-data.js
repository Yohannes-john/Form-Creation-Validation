const apiDataElement = document.getElementById('api-data');

async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Replace with your API endpoint
        const data = await response.json();

        // Display the user data in the HTML
        apiDataElement.innerHTML = '<h2>User Data:</h2>';
        data.forEach(user => {
            apiDataElement.innerHTML += `<p><strong>Username:</strong> ${user.username}</p>`;
            apiDataElement.innerHTML += `<p><strong>Email:</strong> ${user.email}</p>`;
            apiDataElement.innerHTML += `<p><strong>Created At:</strong> ${user.created_at}</p>`;
            apiDataElement.innerHTML += '<hr>';
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        apiDataElement.innerHTML = 'An error occurred while fetching user data.';
    }
}

fetchUserData();
const apiUrl = 'https://jsonplaceholder.typicode.com/users; // Replace with your actual API endpoint

const apiDataElement = document.getElementById('api-data');

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display the user data in the HTML
        apiDataElement.innerHTML = '<h2>User Data:</h2>';
        data.forEach(user => {
            apiDataElement.innerHTML += `<p><strong>Username:</strong> ${user.username}</p>`;
            apiDataElement.innerHTML += `<p><strong>Email:</strong> ${user.email}</p>`;
            apiDataElement.innerHTML += `<p><strong>Created At:</strong> ${user.created_at}</p>`;
            apiDataElement.innerHTML += '<hr>';
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        apiDataElement.innerHTML = 'An error occurred while fetching user data.';
    }
}

fetchData();
