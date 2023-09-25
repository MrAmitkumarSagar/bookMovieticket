import React from 'react'
import CreateBooking from './CreateBooking';
import ShowBooking from './ShowBooking';
import Card from './Card';

function BookingPage() {

    return (

        /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        this component is conteiner for two component 
       =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/

        <div className='main-container' style={{ display: 'flex', flexDirection: 'row', }}  >
            <Card style={{

                width: '70%',
                display: 'flex',
                margin: '0px',
                padding: '0px',
                flexDirection: 'row'
            }} >

         { /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
         here i am calling the component nemed CreateBooking which is responsible for book ticket*
         =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/}
                <CreateBooking />
            </Card>



            <Card style={{
                width: '28%',
                display: 'flex',
                justifySelf: 'flex-end',
            }}>

                {

              /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                this section is calling the component called Showbooking which is responsible for show the last bookings 
                =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/}
                <ShowBooking />
            </Card>


        </div>
    )
}

export default BookingPage