async function fetchUserData() {
    try {
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve('Data fetched successfully');
            }, 2000);
        });
        console.log(result);
    } catch (error) {
    console.error(`Error: ${error}`);
    }
}

fetchUserData();
fetchUserData(''https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer <your_token>',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'New Data',
        description: 'Important information'
    }) // it should be changed to string
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); 
})
.then(data => {
    console.log('Success:', data);
})
.catch(error => {
    console.error('Error:', error);
});
Now try to write the above in async / await, before you see the implementation below.

async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); 
    console.log('Success:', data); 
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchUserData();
document.getElementById'api-data'
