export async function getAllProducts() {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      next: {
        revalidate: 0
      }
    })
    const responseData = await response.json();
    return responseData;
  }
  catch (error) {
    console.log(error);
  }
}

export async function getFilteredProducts( category ) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products?category=${category}`, {
      next: {
        revalidate: 0
      }
    })
    const responseData = await response.json();
    return responseData;
  }
  catch (error) {
    console.log(error);
  }
}


export async function getSearchProducts( search ) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products?name=${search}`, {
      next: {
        revalidate: 0
      }
    })
    const responseData = await response.json();
    return responseData;
  }
  catch (error) {
    console.log(error);
  }
}


export async function getUserProducts(token) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/user`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      },
      next: {
        revalidate: 0
      },
    });
    const responseData = await response.json();
    
    if (response.ok) {
      return responseData;
    } else {
      return null;
    }
  }
  catch (error) {
    console.log(error);
    return null;
  }
}


export async function getOneProduct(id) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products?id=${id}`, {
      next: {
        revalidate: 0
      }
    });

    const responseData = await response.json();
    return responseData;
  }
  catch (error) {
    console.log(error);
  }
}


export async function getUserProduct(id, token) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/user/${id}`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      },
      credentials: 'include',
    });
    if (response.status !== 200) {
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



export async function updateProduct(data, token) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    });
    if (response.status !== 200) {
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