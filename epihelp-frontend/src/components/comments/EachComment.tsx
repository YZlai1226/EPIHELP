import React, { useEffect, useState } from 'react';
import EachsLayout from './../Layouts/EachsLayout';
import { Comment } from './../../models/comment';
import EditCommentModal from './EditCommentModal';
import { useAuth } from './../../hooks/auth';

type EachCommentProps = {
  Comment: Comment
}

const EachComment: React.FC<EachCommentProps> = (props) => {
  const [open, setOpen] = useState(false)
  const { user } = useAuth({ middleware: 'auth' });
  const [commentData, setCommentData] = useState(props.Comment)
  // const idURL = window.location.href.replace('http://localhost:3000/post/', '')
  // const managerName = 'Comments'

  return (
    <EachsLayout
      title={
        <div className='flex justify-between'>
          <span>
            from <b>{commentData?.author_name}</b> at {`${commentData?.created_at.substring(0, 10)} `}
            {commentData?.created_at.substring(11, 16)}
          </span>
          {user?._id === commentData?.author_id && commentData &&
            <EditCommentModal commentData={commentData} setCommentData={setCommentData} />
          }
        </div>
      }>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <span>
            {commentData?.content}
          </span>
        </div>
        <div className='flex flex-col text-right'>
          <span>last edition</span>
          <span className='italic text-right'>
            {`${commentData?.updated_at.substring(0, 10)} `}
            {commentData?.updated_at.substring(11, 16)}
          </span>
        </div>
      </div>
    </EachsLayout>
  )
}
export default EachComment;