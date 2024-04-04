// import { cookies } from "next/headers";

export async function updateLikes(id, token) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/userLikes`, {
      method: 'POST',
      body: JSON.stringify({productId: id}),
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    });
      const responseData = await response.json();
      return responseData;
  }
  catch (error) {
    console.log(error);
    alert('Something went wrong while updating likes');
    return null;
  }
}

export async function getLikes(token) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/userLikes`, {
      method: 'GET',
      headers: {'Authorization': 'Bearer ' + token},
      // credentials: 'include',
    });
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }
  catch (error) {
    console.log(error);
    alert('Something went wrong while getting likes');
    return null;
  }
}


export async function getFavoriteProducts(token) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/userLikes/products`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      next: {
        revalidate: 0
      }
    });
    const responseData = await response.json();
    return responseData;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}