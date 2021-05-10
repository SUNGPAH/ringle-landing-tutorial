import React, {useState} from 'react';
import CourseCategories from './CourseCategories';
import CourseListWithCategory from './CourseListWithCategory';

const CourseSection = ({courseData}) => {
  const [categoryId, setCategoryId] = useState(1);

  const onCategoryIdChange = (newCategoryId) => {
    setCategoryId(newCategoryId);
  }

  if (!courseData.courses){
    return <></>
  }

  return <div>
    <div style={{width:900, overflowX:'scroll', margin:'0 auto'}}>

    <CourseCategories categories={courseData.categories} 
    categoryId={categoryId}
    onCategoryIdChange={onCategoryIdChange}
    />
    </div>
    <div style={{width:900, overflowX:'scroll', margin:'0 auto'}}>

      {courseData.courses.map((coursesWithCategoryId, index) => {
        return <CourseListWithCategory 
        key={index}
        courses={coursesWithCategoryId.courses}
        categoryId={coursesWithCategoryId.category_id} 
        currentCategoryId={categoryId}/>
      })}

    </div>

  </div>
}

export default CourseSection