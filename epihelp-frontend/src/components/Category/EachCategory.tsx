import React from 'react';
import EachsLayout from './../Layouts/EachsLayout';
import { Category } from './../../models/category';
import { Link } from 'react-router-dom';
import ComponentsLayout from './../Layouts/ComponentsLayout';
//import mainLogo from './../../images/logo.png';
import mainLogo from './../../images/software_development.jpg';
// import mainLogo from `./../../images`;

type EachCategoryProps = {
  category: Category
}

const EachCategory: React.FC<EachCategoryProps> = (props) => (
  <Link to={`/category/${props.category?._id}`}>
    {/* {console.log(`mainLogo: ${props.category?._id}`)} */}
    <ComponentsLayout
      title={
        <h2 className="font-semibold text-xl text-red-800">
          {props.category.name}
        </h2>
      }>

      {console.log(`mainLogo: ${mainLogo}`)}
      <div className="flex gap-6 items-center">
        <img src={mainLogo} width='300px' alt="category" />
        <span>
          {props.category.description}
        </span>
      </div>
    </ComponentsLayout>
  </Link>
)

export default EachCategory;