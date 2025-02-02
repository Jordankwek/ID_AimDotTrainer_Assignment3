dot = $('#aim');
title = $('.shooting-container h5');
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 30;
var points = 0;
var container = document.getElementById('blitz');
var timer;
var seconds;

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
      totalSeconds -= 1;
      var time = totalSeconds;
      if (time < 10)
      {
        time = "0" + time;
      }
      secondsLabel.innerHTML = time;
      if (totalSeconds == 0)
      {
        clearInterval(timer);
        dot.hide();
        let post = `
          <div class = "record" style="position: absolute; text-alight: centre; top: 45%; z-index: 2">
            <h1>Game Ended</h1>
            <h5>Points earnt in 30 seconds : ${points}</h5>
          </div>
        `;
        container.insertAdjacentHTML('afterbegin',post);
      }
    }
  }

})

/* $(document).ready(function (){
  const APIKEY = "57e086546f4c13fec6c77d472c74f155d9145";
  $("#blitzsubmit").on("click",function(e){
    e.preventDefault();
    let playerName = $("#pname").val();

    let jsondata = {
      "Name": playerName,
      "Points": points,
    }

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://aimdottrainer-0c78.restdb.io/rest/blitzinfo",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });

  })
}) */