import AppLayout from './../components/Layouts/AppLayout'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Category } from './../models/category';

const CategoryPage: React.FC = () => {
  // const { user } = useAuth({ middleware: 'auth' });
  const [categoryData, setCategoryData] = useState<Category>();

  useEffect(() => {
    getCategoryData('629661c6a3a87f9f730c9b02') // Props from router link in ctegoriesPage
  }, []);

  async function getCategoryData(id: string) {
    type categoryResponse = {
      data: Category;
    };
    try {
      const res = await axios.get<categoryResponse>(`http://localhost:8000/api/categories/${id}`);
      setCategoryData(res.data.data);
      console.log('category info is', res.data.data)
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          {categoryData?.name}
        </h2>
      }>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <div className="flex gap-6 items-center">
                <img src={categoryData?.image_url} alt="category" />
                <span>{categoryData?.description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>

  )
}

export default CategoryPage
