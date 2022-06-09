import Button from './../components/Button'
import AppLayout from './../components/Layouts/AppLayout'
import React, { useEffect, useState } from 'react'
import axios from './../services/axios'
import { Category } from './../models/category'
import { User } from './../models/user'
import AdminCategoryManager from './../components/admin/AdminCategoryManager'
import AdminUserManager from './../components/admin/AdminUserManager'
import AdminPostManager from './../components/admin/AdminPostManager'
import { Post, PostSummary } from './../models/post'

const Admin = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [posts, setPosts] = useState<PostSummary[]>([])
  const [categoryFlag, setCategoryFlag] = useState<boolean>(false)
  const [userFlag, setUserFlag] = useState<boolean>(false)
  const [postFlag, setPostFlag] = useState<boolean>(false)

  type CategoryResponse = {
    data: Category[]
  }

  type PostResponse = {
    data: PostSummary[]
  }

  useEffect(() => {
    if (localStorage.getItem('categories') === 'true') {
      getCategories()
    }
    else if (localStorage.getItem('posts') === 'true') {
      getPosts()
    }
    else if (localStorage.getItem('users') === 'true') {
      getUsers()
    }
  }, []);

  function getCategories() {
    axios.get<CategoryResponse>('/categories')
      .then((response) => {
        setCategories(response.data.data)
        window.localStorage.setItem('categories', 'true');
        window.localStorage.removeItem('users');
        window.localStorage.removeItem('posts');
        checkLocalStorage()
      }
      )
  }

  function getPosts() {
    axios.get<PostResponse>('/posts')
      .then((response) => {
        setPosts(response.data.data);
        window.localStorage.setItem('posts', 'true');
        window.localStorage.removeItem('users');
        window.localStorage.removeItem('categories');
        checkLocalStorage()
      }
      )
  }

  function getUsers() {
    axios.get<User[]>('/users')
      .then((response) => {
        setUsers(response.data);
        window.localStorage.setItem('users', 'true');
        window.localStorage.removeItem('categories');
        window.localStorage.removeItem('posts');
        checkLocalStorage()
      }
      )
  }

  function checkLocalStorage() {
    if (localStorage.getItem('categories') === 'true') {
      setCategoryFlag(true)
      setUserFlag(false)
      setPostFlag(false)
    }
    else if (localStorage.getItem('users') === 'true') {
      setUserFlag(true)
      setCategoryFlag(false)
      setPostFlag(false)
    }
    else if (localStorage.getItem('posts') === 'true') {
      setPostFlag(true)
      setUserFlag(false)
      setCategoryFlag(false)
    }
  }

  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Admin
        </h2>
      }>
      <br />
      <div className="flex justify-center">
        <Button
          className="ml-7"
          onClick={() => getUsers()}
        >
          Users
        </Button>
        <Button
          className="ml-7"
          onClick={() => getCategories()}
        >
          Categories
        </Button>
        <Button
          className="ml-7"
          onClick={() => getPosts()}
        >
          Posts
        </Button>
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              {categoryFlag &&
                <>
                  <div className="flex justify-center font-bold text-2xl">
                    <h1>Categories</h1>
                  </div>
                  <br />
                  <AdminCategoryManager categories={categories}></AdminCategoryManager>
                </>
              }
              {userFlag &&
                <>
                  <div className="flex justify-center font-bold text-2xl">
                    <h1>Users</h1>
                  </div>
                  <br />
                  <AdminUserManager users={users}></AdminUserManager>
                </>
              }
              {postFlag &&
                <>
                  <div className="flex justify-center font-bold text-2xl">
                    <h1>Posts</h1>
                  </div>
                  <br />
                  <AdminPostManager posts={posts} getPosts={getPosts} getCategories={getCategories}></AdminPostManager>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Admin
