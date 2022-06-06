import AppLayout from './../components/Layouts/AppLayout'
import React, { useEffect, useState } from 'react';
import CategoryManager from './../components/Category/CategoryManager'
import axios from './../services/axios'
import { Category } from './../models/category';

// const Categories: React.FC<CategoryProps> = () => {
const Categories = () => {
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
          Categories
        </h2>
      }
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              { categories &&
                <CategoryManager categories={categories}></CategoryManager>
              }
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Categories