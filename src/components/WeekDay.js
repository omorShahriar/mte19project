/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'

import { useState,useEffect,useRef } from 'react'
import { CSSTransition } from 'react-transition-group';
import fadeTransition from './fadeTransition.module.css'
import style from './weekday.module.css'
import Course from '../components/Course'

const WeekDay = ({info}) => {
       
    const [open, setOpen] = useState(false)

    return (
        
            
            <div className={`${style.test} ${open && style.collapseOpen}` } sx={{textAlign:'center',backgroundColor:'#333',height:50,color:'#f2f2f2'}}>
            
                <h3  className={`${style.header} ${open && style.headerShadow}`} onClick={() => setOpen(!open)}>{info.day}</h3>
                <CSSTransition in={open} timeout={{
                    enter: 100,
                    exit: 100,
                }} classNames={fadeTransition} unmountOnExit>
                         <div className={style.courseContainer}>
                        {info.courses.map(c => <Course key={c.id} courseData={c} />)}
                        </div>
              </CSSTransition>
            </div>
            

        

        
    )
}

export default WeekDay;