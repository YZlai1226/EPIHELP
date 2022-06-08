import React from 'react';
import { Category } from './../../models/category';
import { Link } from 'react-router-dom';
import ComponentsLayout from './../Layouts/ComponentsLayout';

type EachCategoryProps = {
  category: Category
}

const EachCategory: React.FC<EachCategoryProps> = (props) => (
  <Link to={`/category/${props.category?.id}`}>
    <div className="max-w-sm h-full rounded overflow-hidden shadow-lg">
      <img src={`/images/${props.category?.image_url}.jpg`} width='100%' alt="category" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.category.name}</div>
        {/* <p className="text-gray-700 text-base">
          {props.category.description}
        </p> */}
      </div>
    </div>
  </Link>
)

export default EachCategory;