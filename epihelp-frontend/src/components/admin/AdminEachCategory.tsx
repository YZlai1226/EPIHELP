import React from 'react';
import { Category } from './../../models/category';
import { Link } from 'react-router-dom';
import Button from './../Button'
import { deleteCategory } from './../../services/categoryService'
import EditCategoryModal from './../../components/Category/EditCategoryModal'

/* eslint-disable max-len */

type EachCategoryProps = {
  category: Category,
  getCategories: () => void
}

const AdminEachCategory: React.FC<EachCategoryProps> = (props) => (
  <tr>
    <td className="border-separate border border-slate-300 h-24">{props.category.id}</td>
    {/* <td className="border-separate border border-slate-300 h-24">{props.category.name}</td> */}
    <td className="border-separate border border-slate-300 h-24 hover:underline">
      <a href={`/category/${props.category.id}`} className="hover:underline"> {props.category.name}</a>
    </td>
    <td className="border-separate border border-slate-300 h-24">{props.category.description}</td>
    <td className="border-separate border border-slate-300 h-24">
      {/* <Button
        onClick={() => deleteCategory(props.category.id)}
      >
        delete
      </Button> */}
      <button
        className="block px-2.5 py-2.5 text-center"
        onClick={() => deleteCategory(props.category.id)}
        type="button" >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
      &#160;
      {/* <Button
        onClick={() => editCategory(props.category.id, props.category.name, props.category.description)}
      >
        Edit
      </Button> */}
      <EditCategoryModal
        category={props.category}
        getCategories={props.getCategories}
      />
    </td>
  </tr>

)

export default AdminEachCategory;