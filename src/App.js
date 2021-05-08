import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import CourseList from './components/Course/CourseList';

const App = () => {
  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    axios.get(`https://api.ringleplus.com/api/v4/student/landing/course?locale=ko`)
    .then(res => {
      const data = res.data;
      console.log(data);

      setCourseData({
        categories: data.landing_course_categories,
        courses: data.landing_courses, //
      })
    })

  }, [])

  return (
    <div className="App" style={{padding:40}}>
      <CourseList courseData={courseData}/>
    </div>
  );
}

export default App;
