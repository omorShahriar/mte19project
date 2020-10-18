import React , {useState,useRef,useEffect} from 'react'
import Course from './Course'

import { CSSTransition } from 'react-transition-group';
import fadeTransition from './fadeTransition.module.css'
/** @jsx jsx */
import { jsx } from "theme-ui"


import style from './test.module.css'
const Test = ({day}) => {
    const node = useRef()
    const [clicked, setClicked] = useState(false)
    useEffect(() => {
  // add when mounted
  document.addEventListener("mousedown", handleClick);
  // return function to be called when unmounted
  return () => {
    document.removeEventListener("mousedown", handleClick);
  };
}, []);
    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
             // inside click
            return;
         }
            setClicked(false)
    }

    return (
           <div className={`${style.test} ${clicked && style.collapseOpen}` } sx={{textAlign:'center',backgroundColor:'#333',height:50,color:'#f2f2f2'}}>
            <div ref={node} className={`${style.header} ${clicked && style.headerShadow}`} onClick={() => setClicked(!clicked)}>{day}</div> 
        
           <CSSTransition in={clicked} timeout={{
        enter: 100,
        exit: 500,
    }} classNames={fadeTransition} unmountOnExit>
          <div className={style.courseContainer}>
            <Course courseData={
              {
                "teacher": "Mr. Saddam Hossain",
                "time": "9:15 – 10:30",
                "zoomId": "61167766921 ",
                "zoomLink": "https://us04web.zoom.us/j/2296811121?pwd=K29XVGZtU3h1RlFtdVVmWXkyUmx6QT09&fbclid=IwAR0OlLFJexRl4ATKxFz7xAIWZEYMkCrYkatOxy0yPkQYzmbEE9aC5XBwXWo",
                "zoomPass": "014007",
                "courseTitle": "Math-1131"
              }
            } />
          <Course courseData={{
                  "teacher": "Md. Shafiul Islam",
                  "time": "11:45 - 01:00",
                  "zoomId": "617 6989 3598",
                  "zoomLink": "https://bdren.zoom.us/w/61769893598?tk=SUI77E-N8O9X0om7ptMuMnmCQD1yYYjCvUbIwewuve4.DQIAAAAOYcXG3hZHLWhmRW5GZVR2QzduTDFHTG1Vb3lRAAAAAAAAAAAAAAAAAAAAAAAAAAAA&pwd=SElUbWxkY3BYNXJTT0RjNG1KUUtzZz09",
                  "zoomPass": "754754",
                  "courseTitle": "EE-1131"
                }}/>
          </div>
         </CSSTransition>
              
            </div>
     )
}
 
export default Test