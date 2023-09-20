import React from 'react'


  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  card is the container with some type css for better experiece
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/
function Card(props) {
  return (
    <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        margin:"5px",
        padding:'2px',
        border:"1.5px solid black",
        borderRadius: "10px",
        boxShadow:"1 1 1 1",
        boxSizing:'border-box'
    }}>
       {props.children}
    </div>
  )
}

export default Card