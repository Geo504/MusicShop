export async function getAuth(data, setToken) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
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



export async function getGoogleAuth( setToken, setUserInfo ) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/success`, {
      method: 'GET',
      credentials: 'include',
    });
    if (response.status !== 200) {
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