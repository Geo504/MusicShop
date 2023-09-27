export async function verifyToken() {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/verify`, {
      method: 'GET',
      credentials: 'include',
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