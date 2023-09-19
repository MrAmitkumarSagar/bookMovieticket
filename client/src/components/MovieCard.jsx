import React from 'react'
import Card from './Card'

function MovieCard(props) {
    // const mpvie={
    //     title:"",
    //     seat:"",
    //     slot:""
    // }
  return (
    <div style={{display:'flex', 
    flexDirection:'column',
     borderBottom: '2px solid black'}}>
        <div>
            title  : { props.movie.movie}
        </div>
        <div>
            slot : {props.movie.slot}
        </div>
        <div style={{display:"flex", flexDirection:'column',}}>
            seat :{<>
            <div>A1 : {props.movie.seats.A1}</div>
            <div>A2 : {props.movie.seats.A2}</div>
            <div>A3 : {props.movie.seats.A3}</div>
            <div>A4 : {props.movie.seats.A4}</div>
            <div>D1 : {props.movie.seats.D1}</div>
            <div>D2 : {props.movie.seats.D2}</div>
           </>}
        </div>
    </div>
  )
}

export default MovieCard