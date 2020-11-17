var mongoose =require('mongoose');
mongoose.connect("mongodb+srv://beta:cahya123@cluster0.rapgq.mongodb.net/gundul?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology: true,
},()=>console.log("Connected to MongoDB!")

);