import React from 'react'
import CreateBooking from './CreateBooking';
import ShowBooking from './ShowBooking';
import Card from './Card';

function BookingPage( ) {
    
    return (
        <div style={{display: 'flex' ,flexDirection : 'row', }}  > 
            <Card style={{

                width: '70%',
                display: 'flex',
                margin:'0px',
                padding:'0px',
                flexDirection:'row'
            }} 
           
            >
           <CreateBooking  />
            </Card>

            <Card style={{
                width: '28%',
                display: 'flex',
                justifySelf: 'flex-end',

            }}>
                <ShowBooking />
            </Card>
             

        </div>
    )
}

export default BookingPage