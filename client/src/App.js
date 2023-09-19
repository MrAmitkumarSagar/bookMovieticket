
import React from 'react';
import './App.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import BookingPage from './components/BookingPage'; 
 
 
// import { useState } from 'react';
 

function App() {
 
  
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'row', padding: '20px', margin: 'auto'  }}  > 
   
      <BrowserRouter>
        <Routes>
          <Route path="/api/booking" element={<BookingPage  
              />} />
        </Routes>
      </BrowserRouter>
     

      {/* <div style={{

        width: '70%',
        display: 'flex',
        padding:'20px',
        flexDirection:'row'
      }}>
        <CreateBooking />
      </div> 

       <div style={{
        width: '25%',
        display: 'flex',
        justifySelf:'flex-end',
        
      }}>
        <ShowBooking />
      </div> */}


    </div>
  );
}

export default App;
