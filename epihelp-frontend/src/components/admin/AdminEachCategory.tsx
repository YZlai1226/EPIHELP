import React from 'react';
import { Category } from './../../models/category';
import { Link } from 'react-router-dom';
import Button from './../Button'
import { deleteCategory } from './../../services/categoryService'
import EditCategoryModal from './../../components/Category/EditCategoryModal'

type EachCategoryProps = {
  category: Category,
  getCategories:() => void
}

const AdminEachCategory: React.FC<EachCategoryProps> = (props) => (
  <tr>
    <td className="border-separate border border-slate-300 h-24">{props.category.id}</td>
    <td className="border-separate border border-slate-300 h-24">{props.category.name}</td>
    <td className="border-separate border border-slate-300 h-24">{props.category.description}</td>
    <td className="border-separate border border-slate-300 h-24">
      <Button
        onClick={() => deleteCategory(props.category.id)}
      >
        delete
      </Button>
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