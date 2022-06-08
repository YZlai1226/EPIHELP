import Button from './../components/Button'
import AppLayout from './../components/Layouts/AppLayout'
import React, { useEffect, useState } from 'react'
import axios from './../services/axios'
import { Category } from './../models/category'
import AdminCategoryManager from './../components/admin/AdminCategoryManager'

const Admin = () => {
  const [categories, setCategories] = useState<Category[]>([])
  type CategoryResponse = {
    data: Category[]
  }

  useEffect(() => {
    function getCategories() {
      axios.get<CategoryResponse>('/categories')
        .then((response) => {
          setCategories(response.data.data);
        }
        )
    }
    getCategories()
  }, []);
  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Admin
        </h2>
      }>
      <div>
        <Button
          className="ml-7"
        >
          New post
        </Button>
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <AdminCategoryManager categories={categories}></AdminCategoryManager>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Admin
