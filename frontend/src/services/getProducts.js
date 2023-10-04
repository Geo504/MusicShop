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
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/category/${category}`, {
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

export async function getOneProduct(id) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/id/${id}`, {
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