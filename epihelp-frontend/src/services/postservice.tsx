import myAxios from './axios';

export default async function createPost(
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