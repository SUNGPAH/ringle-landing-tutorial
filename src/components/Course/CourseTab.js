import React, {useEffect, useState} from 'react';
import Category from './Category';

const CourseTab = ({categories, onCategoryIdChange, categoryId}) => {

  const onCategoryClick = (id) => {
    onCategoryIdChange(id);
  }

  return <div className="flex fdr jcc">
    {categories.map((category, index) => <Category 
    onClick={onCategoryClick}
    currentCategoryId={categoryId}
    category={category} 
    key={index}/>)}
  </div>
}

export default CourseTab
