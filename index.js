const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bookMovie = require('./connector')
const { seats } = require('./client/src/data');
app.use(cors());

const port = process.env.port || 8080;

app.use(express.json());



  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
this mathod is used for feching data at port /api/booking with  GET mathod 
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/  
app.get('/api/booking', async(req, res) => {
    console.log("Get request initiated")
    const movieData= await bookMovie.find({});
    // console.log(movieData)
    res.send(movieData);
})


  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  this mathod is used for the fetch the data  at endpoind /api/booking
  with POST mathod with the help of express middleware
 =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=*/  
app.use(express.json());
    app.post('/api/booking', async(req, res) => {
        console.log("Post request  initiated");
        const dataobj=req.body; 
        const data = new bookMovie({
            "movie":dataobj.title,
            "slot": dataobj.slot,
            "seats": {
                "A1":dataobj.seats.A1,
                "A2":dataobj.seats.A2,
                "A3":dataobj.seats.A3,
                "A4":dataobj.seats.A4,
                "D1":dataobj.seats.D1,
                "D2":dataobj.seats.D2
            }}
        )
      

       await data.save()
       .then((result)=>{console.log(result)
        res.send(result)})
        .catch((err)=>console.log("an error ocurred at server side" ,err));
       

    })


app.listen(port, () =>
    console.log(`server is started and listning on port ${port}`)
)

