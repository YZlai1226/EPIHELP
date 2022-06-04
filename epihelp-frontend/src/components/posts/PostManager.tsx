import React, { useState, useEffect } from 'react'
import ComponentsLayout from './../Layouts/ComponentsLayout';
import { Post } from './../../models/post'

type PostManagerProps = {
  managerName?: string,

}

const postsManager: React.FC<PostManagerProps> = (props) => (
  <ComponentsLayout
    title={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        {props.managerName}
      </h2>
    }>
    <span> I'm the postManager</span>
  </ComponentsLayout>
)
export default postsManager;