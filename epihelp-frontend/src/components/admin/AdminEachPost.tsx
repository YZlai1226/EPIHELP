import React from 'react';
import { PostSummary } from './../../models/post'

type EachPostProps = {
    post: PostSummary
  }

const AdminEachPost: React.FC<EachPostProps> = (props) => (
  <tr>
    <td className="border-separate border border-slate-300 h-24">{props.post.id}</td>
    <td className="border-separate border border-slate-300 h-24">{props.post.title}</td>
    <td className="border-separate border border-slate-300 h-24">{props.post.content}</td>
    <td className="border-separate border border-slate-300 h-24">{props.post.category}</td>
    <td className="border-separate border border-slate-300 h-24">{props.post.author_name}</td>
    <td className="border-separate border border-slate-300 h-24">{props.post.number_of_comments}</td>
    <td className="border-separate border border-slate-300 h-24"></td>
  </tr>

)

export default AdminEachPost;