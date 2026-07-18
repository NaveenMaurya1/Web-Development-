// The Token Manager: You are developing a user authentication system,and you need to manage user authentication tokens. Implement a function 
// named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token, expiresInMinutes) {
    const now = new Date();

    const item = {
        token: token,
        expiry: now.getTime() + expiresInMinutes * 60 * 1000 // convert minutes → ms
    };

    localStorage.setItem("authToken", JSON.stringify(item));
// localStorage only stores strings → so we use JSON.stringify
}

setAuthToken("abc123xyz", 30); // expires in 30 minutes