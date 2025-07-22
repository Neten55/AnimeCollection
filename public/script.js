const apiUrl = 'http://localhost:3000/api';
const registerUser = async (username, password) => {
    const response = await fetch(`${apiUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    return await response.json();
};
// Implement other functions for login, adding, and viewing anime...