export async function deleteUser() {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user`, {
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