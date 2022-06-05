import React from 'react';
import EachsLayout from './../Layouts/EachsLayout';
import { Post } from './../../models/post';

type EachPostProps = {
  post: Post
}

const EachPost: React.FC<EachPostProps> = (props) => (
  <EachsLayout
    title={
      <span>
        {props.post.title}
      </span>
    }>
    <div className='flex justify-between'>
      <div className='flex flex-col'>
        <span className='italic'>{props.post?.author_name}</span>
        <span className='italic'>
          Created at {props.post?.created_at.substring(0, 10)} {props.post?.created_at.substring(11, 16)}
        </span>
        <span className='italic'>
          last edit: {props.post?.updated_at.substring(0, 10)} {props.post?.updated_at.substring(11, 16)}
        </span>
      </div>
      <div className='flex flex-col text-right'>
        <span>last comment</span>
        <span className='italic'>{props.post?.last_comment?.author_name}</span>
        <span className='italic text-right'>
          {props.post?.created_at.substring(0, 10)} {props.post?.last_comment?.created_at.substring(11, 16)}
        </span>
      </div>
    </div>
  </EachsLayout>
)

export default EachPost;