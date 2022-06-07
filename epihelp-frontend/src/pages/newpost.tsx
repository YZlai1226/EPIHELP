import AppLayout from './../components/Layouts/AppLayout'
import PostForm from './../components/Forms/PostForm'
import React, { useState } from 'react'
import { useAuth } from './../hooks/auth'
import { createPost } from './../services/postsService'

const NewPost = () => {
  const { user } = useAuth({ middleware: 'auth' });
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    createPost(user._id, title, category, content)
  }

  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Create a post
        </h2>
      }>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <PostForm
                formTitle={'Ask your question'}
                showCategory={true}
                handleSubmit={handleSubmit}
                setTitle={setTitle}
                setContent={setContent}
                setCategory={setCategory}
                title={title}
                content={content}
              />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default NewPost
