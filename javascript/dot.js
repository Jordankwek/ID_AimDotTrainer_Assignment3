dot = $('#aim');

var points = 0;

//From stackoverflow
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

dot.on('click', function(){
    var vertical = randomInteger(10, 93) + "%";
    var horizontal = randomInteger(0, 93) + "%";
    dot.css("top", vertical);
    dot.css("left", horizontal);
    points += 1;
})

