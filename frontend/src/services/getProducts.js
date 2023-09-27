export async function getAllProducts() {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`);

    const responseData = await response.json();
    return responseData;
  }
  catch (error) {
    console.log(error);
  }
}

export async function getOneProduct(id) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`);

    const responseData = await response.json();
    return responseData;
  }
  catch (error) {
    console.log(error);
  }
}