import React from 'react';
import EachsLayout from './../Layouts/EachsLayout';
import { Category } from './../../models/category';
import { Link } from 'react-router-dom';

type EachCategoryProps = {
  category: Category
}

const EachCategory: React.FC<EachCategoryProps> = (props) => (
  <>

    <div className='flex justify-between'>
      <span>
        {props.category.name}
      </span>
    </div>
  </>
)

export default EachCategory;