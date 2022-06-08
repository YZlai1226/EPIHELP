import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PostForm from './../Forms/PostForm'
import { useAuth } from './../../hooks/auth'
import { editPost } from './../../services/postsService'
import { Post } from './../../models/post'

/* eslint-disable max-len */

type editPostModalProps = {
  postData: Post,
  setPostData: React.Dispatch<React.SetStateAction<Post | undefined>>,
  getPostData: (id: string) => Promise<void>
}

const EditPostModal: React.FC<editPostModalProps> = (props) => {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const { user } = useAuth({ middleware: 'auth' });
  const [title, setTitle] = useState(props.postData.title);
  const [content, setContent] = useState(props.postData.content);
  const [category, setCategory] = useState(props.postData.category);

  // const handleSubmit = (e: { preventDefault: () => void; }) => {
  const handleSubmit = async (e: any) => {
    // e.preventDefault()
    const res:any = await editPost(props.postData.id, title, content, category)
    props.setPostData(res.data.data)
  }

  return (
    <div>
      <button
        className="block px-2.5 py-2.5 text-center dark:hover:bg-gray-300"
        onClick={() => setOpen(true)}
        type="button" >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>

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

          {open === true &&
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
                          {/* <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" /> */}
                          EDIT
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <div className="mt-2">
                            <PostForm
                              formTitle={'Edit your post'}
                              showCategory={false}
                              handleSubmit={handleSubmit}
                              setTitle={setTitle}
                              setContent={setContent}
                              setOpen={setOpen}
                              title={title}
                              content={content}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      {/* <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button> */}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          }
        </Dialog>
      </Transition.Root>
    </div>
  )
}

export default EditPostModal; 