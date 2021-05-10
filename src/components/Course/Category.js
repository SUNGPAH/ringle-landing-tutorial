import React, {} from 'react';
const classNames = require("classnames");

const Category = ({category, currentCategoryId, onClick}) => {
  return <div className={classNames({category:true, active: category.id === currentCategoryId})} 
  onClick={e => {onClick(category.id)}}>{category.title}</div>
}

export default Category