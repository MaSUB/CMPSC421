var snowNum = 0;
var timeToSnow = true;

function btnSnowOnOff(){
  var btn = $('#btnFall');
  if(timeToSnow==true){
    timeToSnow = false;
    btn.text('Start Snow');
  }
  else{
    timeToSnow = true;
    btn.text('Stop Snow');
    snowNum = 0;
    startSnow();
  }
}

function startSnow(){
  if(timeToSnow==true){
    if(snowNum > 100){
        return false
    }else{
      var randomTime = 100;
      setTimeout(function(){
          snowNum = snowNum +1;
          snowTime();
          startSnow();
      },randomTime);
    }
  }
}
function snowTime() {
       var snow = $('<div class="snow"></div>');
        $('#mtn').prepend(snow);
        mtnWidth = Math.floor(Math.random() * 1200);
        snowSpd = Math.floor(Math.random() * (2000)) + 500;
        snowSize = Math.floor(Math.random() * 50) + 25;

        snow.css({'left':mtnWidth+'px', 'font-size':snowSize+'px'});
        snow.html('*');
        snow.animate({
            top: "875px",
            opacity : ".5",

        }, snowSpd, function(){
            $(this).remove();
            if(timeToSnow==true){
              snowTime();
            }
        });
}
startSnow();
