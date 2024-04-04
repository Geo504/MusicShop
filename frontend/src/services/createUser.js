export async function createUser(data) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Error creating user');
    }

    const responseData = await response.json();
    if (responseData){
      return true;
    }
  }
  catch (error) {
    console.log(error);
  }
}