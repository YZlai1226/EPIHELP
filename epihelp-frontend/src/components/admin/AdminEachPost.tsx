import React from 'react';
import Button from './../Button';
import { Post } from './../../models/post'
import { deletePost } from './../../services/postsService'

type EachPostProps = {
  post: Post
}

const AdminEachPost: React.FC<EachPostProps> = (props) => (
  <tr>
    <td className="border-separate border border-slate-300 h-24">{props.post.id}</td>
    <td className="border-separate border border-slate-300 h-24">{props.post.title}</td>
    <td className="border-separate border border-slate-300 h-24">{props.post.category}</td>
    <td className="border-separate border border-slate-300 h-24">{props.post.author_name}</td>
    <td className="border-separate border border-slate-300 h-24">{props.post.comments?.length}</td>
    <td className="border-separate border border-slate-300 h-24">
      <Button
        onClick={() => deletePost(props.post.id)}
      >
        delete
      </Button>
      &#160;
      <Button
        onClick={() => deletePost(props.post.id)}
      >
        Edit
      </Button>
    </td>
  </tr>

)

export default AdminEachPost;