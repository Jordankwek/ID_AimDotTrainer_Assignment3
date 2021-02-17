dot = $('#aim');
title = $('.shooting-container h5');
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var points = 0;
var container = document.getElementById('precision');
var timer;
var seconds;
var minutes;

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

  if(points == 5)
  {
    clearInterval(timer);
    dot.hide();
    let post = `
      <div class = "record" style="position: absolute; text-alight: centre; top: 45%">
        <h3>Game Ended</h3>
        <label>Time taken to complete : ${minutes}:${seconds}</label>
      </div>
    `;
    container.insertAdjacentHTML('afterbegin',post);
  }
})

