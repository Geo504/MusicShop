export async function deleteUser(id) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (response.status === 204) {
      return true;
    }
    return false;
  }
  catch (error) {
    console.log(error);
    return false;
  }
}