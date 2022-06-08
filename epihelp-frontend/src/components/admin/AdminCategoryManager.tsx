import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { Category } from './../../models/category';
import AdminEachCategory from './AdminEachCategory'

type CategoryProps = {
  categories: Category[]
}

const AdminCategoryManager: React.FC<CategoryProps> = (props) => (
  <table className="border-separate border border-slate-400 w-auto">
    <thead>
      <tr>
        <th className="border-separate border border-slate-300 w-2/8 h-20 bg-gray-600 text-gray-200">ID</th>
        <th className="border-separate border border-slate-300 w-1/6 h-20 bg-gray-600 text-gray-200">Name</th>
        <th className="border-separate border border-slate-300 w-3/8 h-20 bg-gray-600 text-gray-200">description</th>
        <th className="border-separate border border-slate-300 w-1/6 h-20 bg-gray-600 text-gray-200">actions</th>
      </tr>
    </thead>
    <tbody>
      {props.categories.map((category) => (
        <AdminEachCategory category={category} key={category.id} />
      )
      )}
    </tbody>
  </table>
)

export default AdminCategoryManager