import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import EachCategory from './EachCategory';
import ComponentsLayout from './../Layouts/ComponentsLayout';
import { Category } from './../../models/category';

type CategoryProps = {
  categories: Category[]
}

const CategoryManager: React.FC<CategoryProps> = (props) => (
  <ComponentsLayout>
    <div>I am Category Manager</div>
    {console.log('=======', props.categories[0])}
    <EachCategory></EachCategory>
  </ComponentsLayout>
)

export default CategoryManager