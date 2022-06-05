import myAxios from './axios';

export async function createPost(
  user_id: string,
  title: string,
  category: string,
  content: string
) {
  try {
    myAxios.post('/posts', {
      user_id: user_id,
      title: title,
      category: category,
      content: content
    })
  } catch (e) {
    console.error(e)
  }
}
export async function createComment(
  user_id: string,
  post_id: string,
  content: string
) {
  try {
    myAxios.post('/comments', {
      user_id: user_id,
      post_id: post_id,
      content: content
    })
  } catch (e) {
    console.error(e)
  }
}