export async function uploadImage(data) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/uploadImage`, {
      method: 'POST',
      body: data,
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