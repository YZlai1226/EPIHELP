import { Comment } from './../models/comment';
import myAxios from './axios';

export async function createComment(
  user_id: string,
  post_id: string,
  content: string
) {
  try {
    const res = myAxios.post<Comment>('/comments', {
      user_id: user_id,
      post_id: post_id,
      content: content
    })
    return res;
  } catch (e) {
    console.error(e)
  }
}

export async function editComment(
  id: string,
  content: string
) {
  type postResponse = {
    data: Comment;
  };
  try {
    myAxios.put<postResponse>(`/posts/${id}`, {
      content: content
    });
  } catch (e) {
    console.error(e);
  }
}