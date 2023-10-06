import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";

export async function deleteUserProduct(id) {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`, {
      method: 'DELETE',
      credentials: 'include',
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