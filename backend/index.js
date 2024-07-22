const express = require('express');
const app = express();
const port = 8080;

const mongoDB = require('./db');
const { default: mongoose } = require('mongoose');
mongoDB();


// getting all data
app.get('/fooddata', async(req, res) => {
  try{
    const collection = mongoose.connection.db.collection("food_item");
    const data = await collection.find({}).toArray();
    res.json(data);
  }
  catch(err){
    console.error(err);
    res.status(500).send('Error in fetching data');
  }
});


// getiing particular data

const { ObjectId } = require('mongodb');

app.get('/fooddata/:id', async(req, res) => {
  try{
    const productId = req.params.id; // here you will get the data by id only.

    if(!ObjectId.isValid(productId)){
      return res.status(400).send("no data found in given id");
    }

    const collection = mongoose.connection.db.collection("food_item");
    const data1 = await collection.find({ _id: new ObjectId(productId) }).toArray();

    if(data1.length === 0){
      res.status(404).send('no data found');
    }

    res.json(data1);
    // console.log(data1);
  }
  catch(err){
    console.error(err);
    res.status(500).send('Error in fetching data');
  }
});

// app.post('/')


app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})



app.use(express.json());
app.use('/sendata', require("./routes/routeuser"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
