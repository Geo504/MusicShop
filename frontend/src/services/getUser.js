export async function getUser(token) {
  try{
    const response = await fetch(`/api/user`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      // credentials: 'include',
    });
    if (response.status === 401) {
      return null;
    }
    else {
      const responseData = await response.json();
      return responseData;
    }
  }
  catch (error) {
    console.log(error);
    return null;
  }
}