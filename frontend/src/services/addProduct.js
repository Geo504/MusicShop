export async function addProduct(data, token) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      // credentials: 'include',
    });
    if (response.status !== 200) {
      alert('Error while adding product');
      return null;
    }
    const responseData = await response.json();
    return responseData;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}