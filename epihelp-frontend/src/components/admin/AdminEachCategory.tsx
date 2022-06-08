import React from 'react';
import { Category } from './../../models/category';
import { Link } from 'react-router-dom';
import ComponentsLayout from './../Layouts/ComponentsLayout';

type EachCategoryProps = {
  category: Category
}

const AdminEachCategory: React.FC<EachCategoryProps> = (props) => (
  <tr>
    <td className="border-separate border border-slate-300 h-24">{props.category.id}</td>
    <td className="border-separate border border-slate-300 h-24">{props.category.name}</td>
    <td className="border-separate border border-slate-300 h-24">{props.category.description}</td>
    <td className="border-separate border border-slate-300 h-24"></td>
  </tr>

)

export default AdminEachCategory;