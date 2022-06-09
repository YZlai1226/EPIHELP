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
  // const idURL = window.location.href.replace('http://localhost:3000/post/', '')
  // const managerName = 'Comments'

  useEffect(() => {
console.log('comment is', props.Comment)
  }, [])
  return (
    <EachsLayout
      title={
        <div className='flex justify-between'>
          <span>
            from <b>{props.Comment.author_name}</b> at {`${props.Comment?.created_at.substring(0, 10)} `}
            {props.Comment?.created_at.substring(11, 16)}
          </span>
          {user?._id === props.Comment?.author_id && props.Comment &&
            <EditCommentModal commentData={props.Comment}/>
          }
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
}
export default EachComment;