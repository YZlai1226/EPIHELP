import myAxios from './axios';
import { User } from './../models/user'

export async function deleteUser (
  _id: string
) {
  try {
    const res = await myAxios.delete<User[]>(`/users/${_id}`)
    window.location.reload()
    return res
  } catch (e) {
    console.log(e)
  }
}