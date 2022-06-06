import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Post } from './../models/post'
import CommentForm from './../components/Forms/CommentForm'
import AppLayout from './../components/Layouts/AppLayout'
import axios from 'axios'
import CommentsManager from './../components/comments/CommentsManager'

const PostPage = () => {
  const managerName = 'Comments'
  const [postData, setpostData] = useState<Post>();
  const idURL = window.location.href.replace('http://localhost:3000/post/', '')

  useEffect(() => {
    if (idURL) {
      getpostData(idURL)
    }
  }, [idURL]);

  async function getpostData(id: string) {
    type postResponse = {
      data: Post;
    };
    try {
      const res = await axios.get<postResponse>(`http://localhost:8000/api/posts/${id}`);
      setpostData(res.data.data);
    } catch (e) {
      console.error(e);
    }
  }

  function addComment(newcomment: Comment) {
    console.log('newcomment:', newcomment);
    getpostData(idURL);
    /* let copy: any = postData;
    const newarray = [...postData]
    copy?.comments.push(newcomment)
    console.log('copy:', copy);
    setpostData(copy) */
  }

  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          {postData?.category} / {postData?.title}
        </h2>
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
      <CommentForm post_id={idURL} addComment={addComment} />

    </AppLayout>
  )
}

export default PostPage
