import React from 'react'

function MovieCard({movie}) {
   
  
  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  movie Card is used for describe the movie which is booked 
  in this section a movie is taking as prop and display that movie
  in one componet 
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/
  return (
    <div className='booked-movie-card' style={{display:'flex', 
    flexDirection:'column',
     borderBottom: '2px solid black'}}>
        <div className='movie-title'>
            Movie Title  : { movie.movie}
        </div>
        <div className='time-slot-'>
            Time Slot : {movie.slot}
        </div>
        <div className='movie-seat' style={{display:"flex", flexDirection:'column',}}>
           Movie Seat :-- <div>
          
          <div>A1 : {movie.seats.A1}</div>
          <div>A2 : {movie.seats.A2}</div>
          <div>A3 : {movie.seats.A3}</div>
          <div>A4 : {movie.seats.A4}</div>
          <div>D1 : {movie.seats.D1}</div>
          <div>D2 : {movie.seats.D2}</div>
           </div>
        </div>
    </div>
  )
}

export default MovieCard