dot = $('#aim');
title = $('.shooting-container h5');
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var points = 0;
var container = document.getElementById('zen');
var timer;
var seconds = 0;
var minutes = 0;

//From stackoverflow
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

dot.on('click', function (event) {
  
  var vertical = randomInteger(29, 83) + "%";
  var horizontal = randomInteger(21, 75) + "%";
  title.fadeOut();
  dot.css("top", vertical);
  dot.css("left", horizontal);
  points++;
  $("#points").html(points);

  if (points == 1) {
    timer = setInterval(setTime, 1000);

    function setTime() {
      ++totalSeconds;
      seconds = pad(totalSeconds % 60);
      minutes = pad(parseInt(totalSeconds / 60));
      secondsLabel.innerHTML = seconds;
      minutesLabel.innerHTML = minutes;
    }

    function pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      }
      else {
        return valString;
      }
    }
  }
})

function stopGame()
{
  if (points != 0)
  {
    clearInterval(timer);
    dot.hide();
    let post = `
      <div class = "record" style="position: absolute; text-alight: centre; top: 45%">
        <h1>Game Ended</h1>
        <h5>Time spent on game : ${minutes}:${seconds}</h5>
        <h5>Points earnt : ${points}</h5>
      </div>
    `;
    container.insertAdjacentHTML('afterbegin',post);
  }
}

