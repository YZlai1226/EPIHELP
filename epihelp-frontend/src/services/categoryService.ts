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
