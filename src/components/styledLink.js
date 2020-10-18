/** @jsx jsx */
import {  jsx } from "theme-ui"
import { Link } from "gatsby"

export default props => (
  <div sx={{
    display: 'inline-block',
    position:'relative'
  }}>
     <div sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 150,
        height: 50,
        backgroundColor: "primary",
        borderRadius: '15px 5px',
        boxShadow:'inset -5px -5px 15px 5px rgba(0, 0, 0, 0.25)'
    }}></div>
   
      <Link
    to={props.to}
    activeClassName="active"
    sx={{
      textAlign: 'center',
      color: "background",
      
     display: 'inline-block',
      textDecoration: "none",
        backgroundColor: "text",
             borderRadius:'15px 5px',
      fontSize:'1rem',
      width: 150,
      height:50,
      py: 15,
      px: 10,
            mr: 20,
      transition: "all 0.2s ease-in",
       transformOrigin: ' 0 100%',
      position: 'relative',
      zIndex:1,
      "&:hover": {
        
         transform: 'skewY(-5deg)',
        transformOrigin: ' 0 100%',
        color:'primary'
      },
      
      "&.active": {
        color: "primary",
        transform: 'skewY(-3deg)',
        transformOrigin: 'bottom left',
        
      },
    }}
  >
    {props.children}
  </Link>

    
          
    </div>

  
)
