
import React from 'react';
import './App.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import BookingPage from './components/BookingPage'; 
 
 
// import { useState } from 'react';
 

function App() {
 
  
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'row', padding: '20px', margin: 'auto'  }}  > 
   

  { /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    Setting the Front End or view of the book Movie Ticket to the end point / or the default landing page
   this will be home page where we can book a movie and also previous booking wiill be shown*
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookingPage  
              />} />
        </Routes>
      </BrowserRouter>
    


    </div>
  );
}

export default App;
