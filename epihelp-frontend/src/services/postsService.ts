import { useNavigate } from 'react-router-dom';
import { Post } from './../models/post';
import myAxios from './axios';

export async function createPost(
  user_id: string,
  title: string,
  category: string,
  content: string
) {
  type postResponse = {
    data: Post;
  };
  try {
    const res: postResponse = await myAxios.post('/posts', {
      user_id: user_id,
      title: title,
      category: category,
      content: content
    });
    return res;
  } catch (e) {
    console.error(e)
  }
}

export async function editPost(
  id: string,
  title: string,
  content: string,
  category?: string
) {
  type postResponse = {
    data: Post;
  };
  try {
    myAxios.put<postResponse>(`/posts/${id}`, {
      title: title,
      content: content,
      category: category
    });
  } catch (e) {
    console.error(e);
  }
}