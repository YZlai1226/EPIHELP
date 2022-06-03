import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import EachCategory from './EachCategory';

// type CategoryProps = {
//   categories: {
//     name: string
//     image: string
//     description: string,
//     // children: React.ReactNode
//   }
// }

// const CategoryManager: React.FC<CategoryProps> = ({categories}: CategoryProps) => (
const CategoryManager = () => (
  <>
    <div>I am Category Manager</div>
    <EachCategory></EachCategory>
  </>
)

export default CategoryManager