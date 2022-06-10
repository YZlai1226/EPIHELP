import AppLayout from './../components/Layouts/AppLayout'
import PostForm from './../components/Forms/PostForm'
import React, { useEffect, useState } from 'react'
import { useAuth } from './../hooks/auth'
import { createPost } from './../services/postsService'
import { useNavigate, useParams } from 'react-router-dom'
import axios from './../services/axios'
import { Category } from './../models/category'

const NewPost = () => {
  const { categoryId } = useParams<string>();
  const { user } = useAuth({ middleware: 'auth' });
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([])
  const [eachcategory, setEachCategory] = useState<Category>()

  useEffect(() => {
    if (categoryId) {
      setCategory(categoryId)
    }
    getCategories()
  }, [])

  function getCategories() {
    type CategoryResponse = {
      data: Category[];
    };
    axios.get<CategoryResponse>('/categories')
      .then((response) => {
        setCategories(response.data.data)
      }
      )
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res: any = await createPost(user._id, title, category, content);
    navigate(`/post/${res.data._id}`)
  }

  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-white leading-tight">
          Create a post
        </h2>
      }>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              {categoryId &&
                <PostForm
                  formTitle={'Ask your question'}
                  showCategory={true}
                  handleSubmit={handleSubmit}
                  setTitle={setTitle}
                  setContent={setContent}
                  setCategory={setCategory}
                  title={title}
                  content={content}
                  category={category}
                  categories={categories}
                  eachcategory={eachcategory}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default NewPost
