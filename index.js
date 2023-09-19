const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
// const schema= mongoose.Schema();
const bookMovie = require('./connector')


app.use(cors());

const port = process.env.port || 8080||8081;
// const mongoURI = "mongodb://127.0.0.1:27017/user";

// mongoose.connect(mongoURI)
// .then(()=>console.log("connected to DB"))
// .catch((err)=>console.log(err))

// const user_schema = new mongoose.Schema({
//     user : String,
//     phone : Number
// });
// const user_model = mongoose.model('user_model',user_schema);

app.use(express.json());

app.get('/api/booking', async(req, res) => {
    console.log("Get request initiated")
    const movieData= await bookMovie.find({});
    console.log(movieData)
    res.send(movieData);
})


app.use(express.json());

    // console.log("movie Booking created successfuly..")
    app.post('/api/booking', async(req, res) => {
        console.log("Post request  initiated");
        const dataobj=JSON.parse(req.body.body);
        console.log(dataobj)
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
        console.log(data);

    })


app.listen(port, () =>
    console.log(`server is started and listning on port ${port}`)
)

