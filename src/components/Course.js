import React from 'react'
import style from './course.module.css'

const Course = ({courseData}) => {
    return (
       
            <div className={style.courseBox}>
                <ul className={style.courseContent}>
                    <li>Course Title : {courseData.courseTitle}</li>
                    <li>Teacher : {courseData.teacher}</li>
                    <li>Time : {courseData.time}</li>
                    <li>Zoom link : <a href={courseData.zoomLink ? courseData.zoomLink : "#"} target="blank"> {courseData.zoomLink ? 'Open' : "------"} </a></li>
                    <li>Zoom ID : {courseData.zoomId}</li>
                    <li>Zoom Pass : { courseData.zoomPass}</li>
                </ul>
            </div>
        

   
        
    )
}

export default Course;