import React, { useCallback, useEffect, useReducer } from 'react'
import './style.css';
import axios from 'axios';
import Card from './Card';
import NameComponent from './NameComponent';
import { movies, seats, slots } from '../data';


const setMovieReducer = (movie, action) => {
  switch (action.type) {
    case 'set_title':
      return { ...movie, title: action.payload };
    case 'set_slot':
      return { ...movie, slot: action.payload };
    case 'set_seats':
      console.log("data saved")
      return { ...movie, seats: action.payload, };
    case 'movie_detail':
      return {...movie};
    default:
      throw new Error();
  }
}
const ACTION = {
  SET_TITLE: 'set_title',
  SET_SLOT: 'set_slot',
  SET_SEAT: 'set_seats',
  MOVIE_DETAIL:'movie_detail'
}

function CreateBooking() {


  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  this is main comoponent for booking ticket ,this component also cantains some other component 
  here using the useState for managing the movie object state 
  =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/

  const [movie, dispatch] = useReducer(setMovieReducer, {
    title: "",
    slot: "",
    seats: {
      A1: 0,
      A2: 0,
      A3: 0,
      A4: 0,
      D1: 0,
      D2: 0
    }
  })




  useEffect(() => {
    const localTitle = localStorage.getItem('title')
    const localSlot = localStorage.getItem('slot')
    const prevSeat = localStorage.getItem('seat')
    if (localTitle) {
      dispatch({ type: ACTION.SET_TITLE, payload: localTitle })
    }
    if (localSlot) {
      dispatch({ type: ACTION.SET_SLOT, payload: localSlot })
    }
    if (prevSeat) {
      console.log("recieved  from local ", JSON.parse(prevSeat));
      dispatch({ type: ACTION.SET_SEAT, payload: JSON.parse(prevSeat) }) 
    }
    const lastTitle = document.getElementById(localStorage.getItem('title'));
    if (lastTitle) lastTitle.className = "active"

    const lastSlot = document.getElementById(localStorage.getItem('slot'));
    if (lastSlot) lastSlot.className = "active"


    if (prevSeat) {
      const seatObject = JSON.parse(prevSeat)
      for (const key in seatObject) {
        if (seatObject[key] > 0) {
          const lastSeat = document.getElementById(key);
          if (lastSeat) lastSeat.value = seatObject[key]
          if (lastSeat) lastSeat.className = "active"
        }
      }
    }
  }, [])




  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  postData is arrow function which is posting the movie state on the backend api
  with the help of axios library 
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/

  const postData = (data) => {
    const res = axios.post('http://localhost:8080/api/booking', data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    return res
  }





  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  movieSubmitHandler is the event Handler emitted by the button in the form use for ticket booking
  in this handler function postData function is called and the movie state is passed 
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/
  function movieSubmitHandler(e) {
    e.target.className = "active"

    if (movie.title === "" || movie.slot === "" || (movie.seats.A1 === 0 && movie.seats.A2 === 0 && movie.seats.A3 === 0 && movie.seats.A4 === 0 && movie.seats.D1 === 0 && movie.seats.D2 === 0)) {
      alert("Please fill the details carefully...");
    }
    else {
      const res = postData(JSON.stringify(
        {
          title: movie.title,
          slot: movie.slot,
          seats: movie.seats
        }
      ))
      res ? console.log("data submitted succesfully...") : console.log("error")
      localStorage.clear();
    }
  }


  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  this event Handler  is used for selection the name of the movie when the title is clicked on the
  frontEnd then the value of that title is stored in movie state variable 
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/
  function titleClickHandler(e) {
    e.preventDefault();
    if (e.target.className === "child") {
      dispatch({ type: ACTION.SET_TITLE, payload: e.target.innerText })
      e.target.className = "active"
      const lastTitle = document.getElementById(localStorage.getItem('title'));
      if (lastTitle) {
        lastTitle.className = "child"
      }
      localStorage.setItem('title', e.target.id)

    }
  }




  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  this event Handler  is used for selection the slot ot time  of the movie when the slot is clicked 
  on the frontEnd then the value of that slot is stored in movie state variable 
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/
  function slotClickHandler(e) {
    e.preventDefault();
    if (e.target.className === "child") {
      dispatch({ type: ACTION.SET_SLOT, payload: e.target.innerText })
      e.target.className = "active"
      const lastSlot = document.getElementById(localStorage.getItem('slot'));
      if (lastSlot) {
        lastSlot.className = "child"
      }
      localStorage.setItem('slot', e.target.id)
    }
  }



  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  this event Handler  is used for selection the seats of the movie when the seat is selected on the
  frontEnd then the value of that seat is stored in movie state variable 
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/
  function seatClickHandler(e) {
    e.preventDefault();
    dispatch({ type: ACTION.SET_SEAT, payload:{...movie.seats,[e.target.id]:Number(e.target.value)} })
    e.target.className = "active"
    const seatObject = JSON.parse(localStorage.getItem('seat'))
    for (const key in seatObject) {
      if (seatObject[key] <= 0) {
        const lastSeat = document.getElementById(key)
        if (lastSeat) {
          lastSeat.className = "child"
        }
      }
    }
    
  }

  useEffect(() => {
    console.log("changes started")
    console.log("befor local", localStorage.getItem('seat')); 
    console.log("data from variable",movie.seats)
    localStorage.setItem('seat',JSON.stringify(movie.seats) )
    console.log("after local", localStorage.getItem('seat'));

  }, [movie.seats])




  return (

    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    form is used for taking the input from the user in this form there is three section 
    first section for movie title
    second section for the slot 
    third section for the seats selection   
   =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/
    <form className='create-booking-page'>
      <Card >
        <div className='movie-title-parent' style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Select a Movie </h3>

          <div id="movie-title-row" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} onClick={titleClickHandler}> {
            movies.map((item, index) => (
              <NameComponent key={index} item={item} />))
          }
          </div>

        </div>
      </Card>



      <Card  >
        <div className='time=slot-parent' style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Select a slots</h3>
          <div className='slot=row' id="slot-pparent" style={{ display: 'flex', justifyContent: 'center' }} onClick={slotClickHandler}>
            {
              slots.map((item, index) => (
                <NameComponent key={index} item={item} />
              ))
            }
          </div>
        </div>
      </Card>


      <Card>
        <div className='movie-seat-container' style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Select a seat</h3>
          <div className='movie-seat-row' style={{ display: 'flex', justifyContent: 'center' }} >
            {seats.map((item, index) => (
              <Card key={index} style={{ padding: "1px 5px", border: '', borderRadius: "5px" }}  >
                {item}
                <input id={item} className='child' type="number" min="0" step="1" name={item} style={{ width: "35px" }} onChange={seatClickHandler} />
              </Card>
            ))}
          </div>
        </div>
      </Card>

      {/* <button onClick={test} >ok</button> */}


      <button className="" style={{ margin: '20px', marginTop: '35px', padding: '5px' }} onMouseEnter={(e) => { e.target.className = "active" }} onClick={movieSubmitHandler}>confirm</button>


    </form>
  )
}

export default CreateBooking