import React, { useState } from 'react'
import { movies, seats, slots } from "../data"
import NameComponent from './NameComponent'
import Card from './Card';
import  './style.css';
// import Slot from './Slot';
import axios from 'axios';

function CreateBooking(props) {

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


  const postData = (data) => {
    const res = axios.post('http://localhost:8080/api/booking', {
      body: JSON.stringify(data)
    }
    );
    return res
  }


  function movieSubmitHandler(e) {
    // e.preventDefault();
    console.log(" You have click to book movie ");
    console.log(`movie details are title =${movie.title} slot=${movie.slot} and seat = ${movie.seats.A1} ,${movie.seats.A2} ,
    ${movie.seats.A3}, ${movie.seats.A4}, ${movie.seats.D1}, ${movie.seats.D2}`)
    const res = postData(movie)
    res ? console.log("data submitted succesfully code", res) : console.log("error")

  }


  function titleClickHandler(e) {
    e.preventDefault();
    console.log(e.target.className)
    // e.taeget.className +="-general"
    if (e.target.className === "child") {
      // e.taeget.className+="-active"
      setMovie({
        ...movie,
        title: e.target.innerText
      })
      console.log(movie)
      e.target.style.border = "2px solid blue"
      e.target.style.borderRadius = "8px";
      e.target.style.padding = "0px 10px"
    }

    // props.movieName(e.target.innerText)
  }

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