import { Post } from './../models/post';
import myAxios from './axios';

type postResponse = {
  data: Post;
};
///////////////////////// TEST //////////////////////////
export function sum(a: number, b: number) {
  return a + b;
}
///////////////////////// TEST //////////////////////////

export async function createPost(
  user_id: string,
  title: string,
  category_id: string,
  content: string
) {
  try {
    const res = await myAxios.post<postResponse>('/posts', {
      user_id: user_id,
      title: title,
      category_id: category_id,
      content: content
    });
    return res;
  } catch (e) {
    console.error('createPost', e)
  }
}

export async function editPost(
  id: string,
  title: string,
  content: string,
  category?: string
) {
  try {
    const res = await myAxios.put<postResponse>(`/posts/${id}`, {
      title: title,
      content: content,
      category_id: category
    });
    return res
  } catch (e) {
    console.error(e);
  }
}

export async function deletePost(
  id: string
) {
  try {
    const res = await myAxios.delete<postResponse>(`/posts/${id}`);
    window.location.reload();
    return res
  } catch (e) {
    console.error(e);
  }
}
