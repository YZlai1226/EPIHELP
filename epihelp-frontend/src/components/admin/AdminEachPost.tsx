import React, { useEffect, useState } from 'react';
import Button from './../Button';
import { Post, PostSummary } from './../../models/post'
import { deletePost } from './../../services/postsService'
import EditPostModal from './../../components/posts/EditPostModal'
import { Link } from 'react-router-dom'

/* eslint-disable max-len */

type EachPostProps = {
  post: PostSummary,
  getPosts: () => void
  getCategories: () => void
}

const AdminEachPost: React.FC<EachPostProps> = (props) => {
  const [postData, setPostData] = useState<PostSummary>()
  const [showCategory, setShowCategory] = useState<boolean>(false)

  useEffect(() => {
    setPostData(props.post)
    setShowCategory(true)
  }, [])

  // function LinkToPost(postId: string) {
  //   window.location.href = '/post/'
  // }

  return (
    <tr>
      <td className="border-separate border border-slate-300 h-24">{props.post.id}</td>
      {/* <td className="border-separate border border-slate-300 h-24">{props.post.title}</td> */}
      <td className="border-separate border border-slate-300 h-24 hover:underline">
        <a href={`/post/${props.post.id}`} className="hover:underline"> {props.post.title}</a>
      </td>
      <td className="border-separate border border-slate-300 h-24">{props.post.category}</td>
      <td className="border-separate border border-slate-300 h-24">{props.post.author_name}</td>
      <td className="border-separate border border-slate-300 h-24">{props.post.number_of_comments}</td>
      <td className="border-separate border border-slate-300 h-24">
        <div className="flex justify-center">
          <button
            className="block px-2.5 py-0.5 text-center"
            onClick={() => deletePost(props.post.id)}
            type="button" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
          <EditPostModal postData={props.post} setPostData={setPostData} showCategory={showCategory} getPosts={props.getPosts} />
        </div>
      </td>
    </tr>

  )
}

export default AdminEachPost;