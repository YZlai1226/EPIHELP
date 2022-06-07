import AppLayout from './../components/Layouts/AppLayout'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Category } from './../models/category';
import { PostsManager } from './../components/posts/PostsManager';
import Button from './../components/Button';
import { useNavigate } from 'react-router-dom';

const CategoryPage: React.FC = () => {
  let navigate = useNavigate();
  const [categoryData, setCategoryData] = useState<Category>();
  const idURL = window.location.href.replace('http://localhost:3000/category/', '');
  const [managerName, setManagerName] = useState<string>();

  async function getCategoryData(id: string) {
    type categoryResponse = {
      data: Category;
    };
    try {
      const res = await axios.get<categoryResponse>(`http://localhost:8000/api/categories/${id}`);
      setCategoryData(res.data.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (idURL) {
      getCategoryData(idURL)
    }
  }, [idURL]);

  useEffect(() => {
    setManagerName(`Posts from ${categoryData?.name}`)
  }, [categoryData])

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
                {/* <img src={categoryData?.image_url} alt="category" /> */}
                <img src={`/images/${categoryData?.image_url}.jpg`} width='300px' alt="category" />
                <span>{categoryData?.description}</span>
                <Button
                  className="ml-3"
                  onClick={() => navigate(`/newpost/${categoryData?.id}`)}
                //onClick={() => navigate('/newpost')}
                >
                  New post
                </Button>
              </div>
            </div>
          </div>
        </div>
        {categoryData?.posts && managerName &&
          <PostsManager
            managerName={managerName}
            posts={categoryData?.posts}
          />
        }
      </div>
    </AppLayout>
  )
}

export default CategoryPage
