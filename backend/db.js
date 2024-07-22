const mongoose = require ('mongoose');

const mongoURI = 'mongodb+srv://goodfood:goodfoodvicky@cluster0.ws0x8j6.mongodb.net/goodfood?retryWrites=true&w=majority&appName=Cluster0'
// const uri = "mongodb+srv://goodfood:goodfoodvicky@cluster0.ws0x8j6.mongodb.net/?appName=Cluster0";
// database name: goodfood

const mongoDB = async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to database");
    
    // const fetchData = await mongoose.connection.db.collection("food_item");
    // fetchData.find({}).toArray(function(err,data){
    //   if(err){
    //     console.log(err);
    //   }
    //   else{
    //     console.log(data);
    //   }
    // })
  };





  // const mongoDB = async () => {
  //   try{
  //     await mongoose.connect(mongoURI, {useNewUrlParser: true,useUnifiedTopology: true,});
  //     console.log("databse is connected successfully");
  //   }catch(err){
  //     console.error(err.message);
  //     proccess.exit(1);
  //   }   
  //   };
  
//   connectToMongo();

module.exports = mongoDB;
