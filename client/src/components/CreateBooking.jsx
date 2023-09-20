import React, { useState } from 'react'
import { movies, seats, slots } from "../data"
import NameComponent from './NameComponent'
import Card from './Card';
import  './style.css';
// import Slot from './Slot';
import axios from 'axios';

function CreateBooking() {

  
  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  this is main comoponent for booking ticket ,this component also cantains some other component 
  here using the useState for managing the movie object state 
  =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/


  const [movie, setMovie] = useState({
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


  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  postData is arrow function which is posting the movie state on the backend api
  with the help of axios library 
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/

  const postData = (data) => {
    const res = axios.post('http://localhost:8080/api/booking', {
      body: JSON.stringify(data)
    }
    
    );
    return res
  }
// 




  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  movieSubmitHandler is the event Handler emitted by the button in the form use for ticket booking
  in this handler function postData function is called and the movie state is passed 
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/
  function movieSubmitHandler(e) {
    // e.preventDefault();
    // // console.log(" You have click to book movie ");
    // console.log(`movie details are title =${movie.title} slot=${movie.slot} and seat = ${movie.seats.A1} ,${movie.seats.A2} ,
    // ${movie.seats.A3}, ${movie.seats.A4}, ${movie.seats.D1}, ${movie.seats.D2}`)
    const res = postData(movie)
    res ? console.log("data submitted succesfully code", res) : console.log("error")

  }


  
  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  this event Handler  is used for selection the name of the movie when the title is clicked on the
  frontEnd then the value of that title is stored in movie state variable 
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/
  function titleClickHandler(e) {
    e.preventDefault();
    console.log(e)
    if (e.target.className === "child") {
      setMovie({
        ...movie,
        title: e.target.innerText
      }) 
      e.target.style.border = "2px solid blue"
      e.target.style.borderRadius = "8px";
      e.target.style.padding = "0px 10px"
    }

    // props.movieName(e.target.innerText)
  }

  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  this event Handler  is used for selection the slot ot time  of the movie when the slot is clicked 
  on the frontEnd then the value of that slot is stored in movie state variable 
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/
  function slotClickHandler(e) {
    e.preventDefault();
    if (e.target.className === "child") {
      setMovie({
        ...movie,
        slot: e.target.innerText,
      })

      e.target.style.border = "2px solid blue"
      e.target.style.borderRadius = "8px";
      e.target.style.padding = "0px 10px"
    }
  }


  
  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  this event Handler  is used for selection the seats of the movie when the seat is selected on the
  frontEnd then the value of that seat is stored in movie state variable 
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/
  function seatClickHandler(e) {
    e.preventDefault();
    console.log(e.target.name, e.target.value)
    setMovie({
      ...movie,
      seats: {
        ...movie.seats,
        [e.target.name]: e.target.value
      }
    })
    console.log("seat", movie)
    e.target.style.border = "2px solid blue"
    e.target.style.borderRadius = "8px";
    e.target.style.padding = "0px 10px"

  }

  // const active={
  //   border:"2px solid blue",
  //   borderRadius:"8px",
  //   padding:"0px 10px"
  // }

  return (


  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  form is used for taking the input from the user in this form there is three section 
  first section for movie title
  second section for the slot 
  third section for the seats selection

 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/
    <form>
      <Card>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Select a movie</h3>
          <div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} onClick={titleClickHandler}> {
              movies.map((item, index) => (
                <NameComponent key={index} item={item} />))
            }
            </div>
          </div>
        </div>
      </Card>



      <Card>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Select a slots</h3>
          <div style={{ display: 'flex', justifyContent: 'center' }} onClick={slotClickHandler}>
            {
              slots.map((item, index) => (
                <NameComponent key={index} item={item} />
              ))
            }
          </div>
        </div>
      </Card>


      <Card>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Select a seat</h3>
          <div style={{ display: 'flex', justifyContent: 'center' }} >
            {seats.map((item, index) => (
              <div className='child' key={index} style={{ padding: "1px 5px", border: '', borderRadius: "5px" }}  >
                {item}
                <input type="number" name={item} style={{ width: "35px" }} onChange={seatClickHandler} />
              </div>
              // <Slot key={index} item={item} handler={seatClickHandler} />
            ))
            }
          </div>
        </div>
      </Card>



      <button style={{ margin: '20px', marginTop: '35px', padding: '5px' }} onClick={movieSubmitHandler}>confirm</button>

    </form>
  )
}

export default CreateBooking