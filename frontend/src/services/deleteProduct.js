export async function deleteUserProduct(id, token) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      // credentials: 'include',
    });
    if (response.status !== 204) {
      return null;
    }
    return true;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}