export async function logout() {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`, {
      method: 'POST',
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