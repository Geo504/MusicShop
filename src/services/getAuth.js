export async function getAuth(data) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 401) {
      alert('Invalid credentials');
      return null;
    }
    else {
      const responseData = await response.json();
      return responseData;
    }
  }
  catch (error) {
    console.log(error);
  }
}