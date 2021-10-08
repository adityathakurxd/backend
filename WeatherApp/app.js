const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
   res.sendFile(__dirname+"/index.html")
})

app.post("/", function(req, res){
    const city = req.body.cityName
    console.log(city)
    const apiKey = "1eabc18165fc29d5bd5b1cf862d78409"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=" +apiKey
    console.log(url)
    https.get(url, function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            console.log(weatherData)
            // const temperature = weatherData.main.temp;
            // const weatherDesc = weatherData.weather[0].description
            // const icon = weatherData.weather[0].icon
            // const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
            // req.write("<h1>The Weather at "+cityName+" is:");
            // res.write("<p>"+temperature+"<p>");
            // res.write("<p>"+weatherDesc+"<p>");
            // res.write("<img src="+imageURL+">");
            res.send();
        })
    })
})

app.listen(3000, function(){
    console.log("Server is up and running..")
})