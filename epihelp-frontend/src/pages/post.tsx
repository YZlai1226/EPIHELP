import { useState, useEffect } from 'react'
import { Post } from './../models/post'
import CommentForm from './../components/Forms/CommentForm'
import AppLayout from './../components/Layouts/AppLayout'
import axios from 'axios'
import CommentsManager from './../components/comments/CommentsManager'
import EditPostModal from './../components/posts/EditPostModal'
import { useAuth } from './../hooks/auth'
import { createComment } from './../services/commentsService'

/* eslint-disable max-len */

const PostPage = () => {
  const managerName = 'Comments'
  const [postData, setPostData] = useState<Post>();
  const idURL = window.location.href.replace('http://localhost:3000/post/', '')
  const { user } = useAuth({ middleware: 'auth' });
  const [showCategory, setShowCategory] = useState<boolean>(false)
  const [content, setContent] = useState('');

  useEffect(() => {
    getPostData(idURL)

  }, [idURL]);

  async function getPostData(id: string) {
    type postResponse = {
      data: Post;
    };
    try {
      const res = await axios.get<postResponse>(`http://localhost:8000/api/posts/${id}`);
      setPostData({ ...res.data.data });
    } catch (e) {
      console.error(e);
    }
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (postData) {
      createComment(user._id, postData.id, content)
        .then(() => {
          getPostData(idURL);
        })
      setContent('');
    }
  }

  return (
    <AppLayout
      header={
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            <a href={`/category/${postData?.category_id}`}>{postData?.category}</a> / {postData?.title}
          </h2>
          {user?._id === postData?.author_id && postData &&
            <EditPostModal postData={postData} setPostData={setPostData} showCategory={showCategory}/>
          }
        </div>
      }>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              {postData?.content}
            </div>
            <div className='flex justify-between italic px-6'>
              <span>{postData?.author_name}</span>
              <span>
                created at: {`${postData?.created_at.substring(0, 10)} `} {postData?.created_at.substring(11, 16)}
              </span>
              <span>
                last edition: {`${postData?.updated_at.substring(0, 10)} `} {postData?.updated_at.substring(11, 16)}
              </span>
            </div>
          </div>
        </div>
      </div>
      {postData?.comments &&
        <CommentsManager managerName={managerName} Comments={postData?.comments} />
      }
      <CommentForm content={content} handleSubmit={handleSubmit} setContent={setContent}/>

    </AppLayout>
  )
}

export default PostPage;
