var express = require("express");
var app = express();
const nodemailer = require("nodemailer");


var Users = require ("./user")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
const mongoose = require('mongoose')

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://bulbul:nadeem%40123456@cluster0.wyeg4.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("infograins").collection("user");
  client.close();
});

// mongoose.connect('mongodb://localhost:27017/infograin?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
//   })
//   .then(() => {
//     console.log('Connected to the Database successfully');
//   }).catch((err)=>{
//     console.log(err);
//   });



app.post("/send_mail",  (req, res) => {
    console.log('item')
    var userData = {       
        firstName: req.body.FNAME,
       lastName:  req.body.LNAME,
       companyName: req.body.MMERGE7,
        jobTitle:  req.body.MMERGE5,
        email: req.body.EMAIL,
        phone:  req.body.MMERGE4,
        country:  req.body.MMERGE6,
        emploeNumber:   req.body.MMERGE3
    }
    var myData = new Users(userData);
    myData.save().then(item => {
        console.log(item)
    console.log("testing item");

        // res.status(200).json({message:"item saved to database", data: item});
    }).catch(err => {
        console.log(err);
        // res.status(400).send("unable to save to database");
    })
    
    let transporter = nodemailer.createTransport(
        {
            service: "gmail",
            secure: false, 
            auth: {
                user: "bulbul.infograins@gmail.com", 
                pass: "BulBul@123" 
               
            },
            tls: { rejectUnauthorized: false }
        }
    );
    
    let mailOptions = {
        from: myData.email,
        to: "vipin.infograins@gmail.com", 
        // to: "bulbulbagwan918@gmail.com",
        subject: myData.firstName + " " + myData.lastName , 
        html: "Company Name - "+myData.companyName+ "<br>" +"Job Title - "+ myData.jobTitle + "<br>"+ "Phone Number - "+myData.phone + "<br>"+ "Country - " +myData.country +"<br>" + "Number of employee - "+myData.emploeNumber
    };
    
    transporter.sendMail(mailOptions, function (error, success) {
        if (error) {
            res.send(error);
            console.log(error);
        }
        else {
            console.log("Server is ready to take our messages");
            return res.redirect("ec2-65-0-43-174.ap-south-1.compute.amazonaws.com/index.html");
        }
    
    });
    });

app.listen(3000, () => console.log('server is listening 3000....'));
