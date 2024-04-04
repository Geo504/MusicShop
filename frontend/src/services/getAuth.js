export async function getAuth(data, setToken) {
  try{
    const response = await fetch(`/api/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json',},
      // credentials: 'include',
    });
    if (response.status === 404) {
      alert('User not found');
      return null;
    }
    if (response.status === 401) {
      alert('Invalid password');
      return null;
    }
    else {
      const authHeader = response.headers.get('Authorization');
      const token = authHeader && authHeader.split(' ')[1];
      setToken(token);

      const responseData = await response.json();
      return responseData;
    }
  }
  catch (error) {
    console.log(error);
  }
}