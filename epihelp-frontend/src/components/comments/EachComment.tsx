import React from 'react';
import EachsLayout from './../Layouts/EachsLayout';
import { Comment } from './../../models/comment';
import { Link } from 'react-router-dom';

type EachCommentProps = {
  Comment: Comment
}

const EachComment: React.FC<EachCommentProps> = (props) => (
  <EachsLayout
    title={
      <div className='flex justify-between'>
        <span>
          from {props.Comment.author_name}
        </span>
        <span>
          at {`${props.Comment?.created_at.substring(0, 10)} `}
          {props.Comment?.created_at.substring(11, 16)}
        </span>
      </div>
    }>
    <div className='flex justify-between'>
      <div className='flex flex-col'>
        <span>
          {props.Comment?.content}
        </span>
      </div>
      <div className='flex flex-col text-right'>
        <span>last edition</span>
        <span className='italic text-right'>
          {`${props.Comment?.updated_at.substring(0, 10)} `}
          {props.Comment?.updated_at.substring(11, 16)}
        </span>
      </div>
    </div>
  </EachsLayout>
)

export default EachComment;