import React, {useState} from 'react';
const classNames = require("classnames");

//      <div className={classNames({ red: showRed, lightblue: showBlue })}>

const Category = ({category, currentCategoryId, onClick}) => {

  return <div className={classNames({category:true, active: category.id === currentCategoryId})} 
  onClick={e => {onClick(category.id)}}>{category.title}</div>
}

export default Category