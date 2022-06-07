import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import EachCategory from './EachCategory';
import ComponentsLayout from './../Layouts/ComponentsLayout';
import { Category } from './../../models/category';

type CategoryProps = {
  categories: Category[]
}

const CategoryManager: React.FC<CategoryProps> = (props) => (
  <div className="grid gap-8 grid-cols-3">
    {props.categories.map((category) => (
      <EachCategory category={category} key={category.id}/>
    )
    )}
  </div>
)

export default CategoryManager