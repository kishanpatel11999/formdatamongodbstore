//reuire
const express  = require('express');
//body parser
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// //mongoose connect to db
// const mongoose = require('mongoose')
// //mongoose global promise
// mongoose.Promise = global.Promise;
// //connect to mongodb
// // mongoose.connect("mongodb://loaclhost:27017/book")
// mongoose.connect("mongodb://localhost:27017/book");

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/book-db");



//once conection has been astablish then run callback
mongoose.connection.once('open',function(){
    console.log('database connection has been made...');
})
.on('error',function(){
    // console.log(error);
    
    // console.log('some error db not connected')
})

// //book schema title and pages
// var bookSchema = new mongoose.Schema({
//     title:String,
//     pages:Number
// })


// //schema
// var authorSchema = new mongoose.Schema({
//     name:String,
//     age:Number,
//     book:[bookSchema]
// })

// var bookData = mongoose.model('bookcollectios',authorSchema)

//template engine ejs and static data
app.set('view engine','ejs')
app.use('/stuff',express.static('stuff'));


app.get('/',(req,res)=>{
    // res.send("home page")
    res.render('home')
    // console.log("req:" + req + " req :" +res);
})

app.get('/form',(req,res)=>{
    // res.render('form')
    // res.send('form')
    res.render('form')
})




var authorSchema = new mongoose.Schema(
    {
        name:String,
        age:String,
        phone: String,
        email:String,
        book_title:String,
        page: String
    }
)

var bookUser = mongoose.model("bookStore",authorSchema);


app.post('/form',(req,res)=>{
    

    var bookData =new bookUser(req.body);
    bookData.save().then(item =>{
        console.log(req.body);
        res.render('success');
    }).catch(err =>{
        console.log('err');
        res.render('not-success')
    })

})

app.get('/donate',(req,res)=>{
    // res.send("about");
    res.render('donate')
})

app.get('/contect',(req,res)=>{
    // res.send('contect')
    res.render('contect')
})



const PORT = 3000;
app.listen(PORT,(req,res)=>{
    console.log(`server started in port on ${PORT}...`);
})