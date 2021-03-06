import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CommentForm from './../Forms/CommentForm'
import { useAuth } from './../../hooks/auth'
import { editComment } from './../../services/commentsService'
import { Comment } from './../../models/comment'
import EditButton from './../EditButton'

/* eslint-disable max-len */

type editCommentModalProps = {
  commentData: Comment,
  setCommentData: React.Dispatch<React.SetStateAction<Comment>>
}

const EditCommentModal: React.FC<editCommentModalProps> = (props) => {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const [content, setContent] = useState(props.commentData.content);
  const { user } = useAuth({ middleware: 'auth' });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setOpen(false);
    const res: any = await editComment(props.commentData.id, content);
    props.setCommentData(res.data.data);
    // setContent('');

  }

  return (
    <div>
      <EditButton setOpen={setOpen} color={'white'} />

      {open === true &&
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="ease-in duration-300"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-full opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          EDIT
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <div className="mt-2">
                            <CommentForm
                              handleSubmit={handleSubmit}
                              setContent={setContent}
                              content={content}
                              setOpen={setOpen}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      }
    </div>
  )
}

export default EditCommentModal; 