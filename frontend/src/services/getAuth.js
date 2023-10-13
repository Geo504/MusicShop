export async function getAuth(data) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Credentials': true,
        // Cookie: req.headers.cookie
      },
      credentials: 'include',
    });
    if (response.status === 404) {
      alert('User not found');
      return null;
    }
    if (response.status === 401) {
      alert('Invalid credentials');
      return null;
    }
    else {
      const cookie = response.headers.getSetCookie();
      console.log(cookie);
      const responseData = await response.json();
      return responseData;
    }
  }
  catch (error) {
    console.log(error);
  }
}