import myAxios from './axios';
import { User } from './../models/user'

export async function deleteUser(
  _id: string
) {
  try {
    const res = await myAxios.delete<User[]>(`/users/${_id}`)
    window.location.reload()
    return res
  } catch (e) {
    console.error(e)
  }
}

export async function editUser(
  _id: string,
  loggedUserId: string,
  username: string,
  formation: string | undefined,
  city: string | undefined,
  year: string | undefined,
  bio: string | undefined
) {
  type UserResponse = {
    data: User
  };
  try {
    const res: UserResponse = await myAxios.put(`/users/${_id}`, {
      _id: _id,
      loggedUserId: loggedUserId,
      username: username,
      formation: formation,
      city: city,
      year: year,
      bio: bio
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export async function changeUserRole(
  _id: string,
  loggedUserId: string,
  role: string | undefined,
  username: string,
  formation: string | undefined,
  city: string | undefined,
  year: string | undefined,
  bio: string | undefined
) {
  type UserResponse = {
    data: User
  };
  try {
    const res: UserResponse = await myAxios.put(`/users/role/${_id}`, {
      _id: _id,
      loggedUserId: loggedUserId,
      role: role,
      username: username,
      formation: formation,
      city: city,
      year: year,
      bio: bio
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
}