import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { Post } from './../../models/post'
import AdminEachPost from './AdminEachPost'

type PostManagerProps = {
  posts: Post[],
  getPosts:() => void
  getCategories:() => void
}

const AdminPostManager: React.FC<PostManagerProps> = (props) => (
  <table className="border-separate border border-slate-400 w-full">
    <thead>
      <tr>
        <th className="border-separate border border-slate-300 w-2/8 h-20 bg-gray-600 text-gray-200">ID</th>
        <th className="border-separate border border-slate-300 w-1/6 h-20 bg-gray-600 text-gray-200">Title</th>
        <th className="border-separate border border-slate-300 w-2/8 h-20 bg-gray-600 text-gray-200">Category</th>
        <th className="border-separate border border-slate-300 w-1/6 h-20 bg-gray-600 text-gray-200">Author</th>
        <th className="border-separate border border-slate-300 w-3/8 
          h-20 bg-gray-600 text-gray-200">CommentsAmount</th>
        <th className="border-separate border border-slate-300 w-1/6 h-20 bg-gray-600 text-gray-200">actions</th>
      </tr>
    </thead>
    <tbody>
      {props.posts.map((post) => (
        <AdminEachPost post={post} key={post.id} getPosts={props.getPosts} getCategories={props.getCategories}/>
      )
      )}
    </tbody>
  </table>
)

export default AdminPostManager