export async function createUser(data) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    const responseData = await response.json();
    return responseData;
  }
  catch (error) {
    console.log(error);
  }
}