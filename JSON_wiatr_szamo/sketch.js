var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var units = '&units=metric';
var apicode = '&appid=af73396ab17f0bd52820447fc5bb8fb5';







var input;

function setup() {
  createCanvas(400, 400)
  
  var button = select('#submit')
  button.mousePressed(calculate)
  
  input = select('#city')
  


}

function calculate(){
  var city = input.value()
  var url = api + city + units + apicode;
  loadJSON(url, gotData)
}

function gotData(data) {
  console.log(data)
  weather = data;
}


function draw() {
  
  background(0)
  if (weather) {
    var angle = ((weather.wind.deg - 90) / 360) * 2 * PI
    translate(width / 2, height / 2)
    rotate(angle)
    fill(255, 0, 0)
    noStroke()
    rect(0, -2, 10 * weather.wind.speed, 4)
    triangle(0, -8, 0, 8, -20, 0)

    rotate(-angle)
    textAlign(CENTER)
    text("Wind speed: " + weather.wind.speed,0,height/4)

  }
}