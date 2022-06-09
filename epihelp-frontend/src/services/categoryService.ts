import myAxios from './axios';
import { Category } from './../models/category';

type categoryResponse = {
    data: Category[]
}

export async function deleteCategory(id: String) {
  try {
    const res = await myAxios.delete<categoryResponse>(`/categories/${id}`)
    window.location.reload();
    return res
  } catch (e) {
    console.log(e)
  }
}

export async function editCategory(
  id: string,
  name: string,
  description: string
) {
  try {
    const res = await myAxios.put<categoryResponse>(`/categories/${id}`, {
      name: name,
      description: description
    });
    return res
  } catch (e) {
    console.error(e);
  }
}
