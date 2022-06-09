import { Comment } from './../models/comment';
import myAxios from './axios';

type postResponse = {
  data: Comment;
};

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
  try {
    const res = await myAxios.put<postResponse>(`/comments/${id}`, {
      content: content
    });
    return res
  } catch (e) {
    console.error('editComment', e);
  }
}