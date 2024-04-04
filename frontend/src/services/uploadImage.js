export async function uploadImage(data, token) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/uploadImage`, {
      method: 'POST',
      body: data,
      headers: {
        'Authorization': 'Bearer ' + token,
      },
      credentials: 'include',
    });
    const responseData = await response.json();
    return responseData;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}