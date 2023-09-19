import React from 'react'
import Card from './Card'

function NameComponent(props) {

  // function divClickHandler(e){
  //   e.preventDefault();
  //   console.log(e.target.innerText)
  //   e.target.style.border="2px solid blue"
  //   e.target.style.borderRadius="8px";
  //   e.target.style.padding="0px 10px"
  //   props.movieName(e.target.innerText)
  // }
  
 
  return (
    <Card 
    style={{
      display:'flex',
      paddingBottom:'10px',
      paddingTop:'2px',
      border: '2px solid black',
      wordWrap:'normal' }} >
       <div className='child' style={{padding:"1px 5px",border:'' ,borderRadius:"5px"}}  >
       {props.item}
       </div>
        
       
    </Card>
  )
}

export default NameComponent;