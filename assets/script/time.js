function startTimer(duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function(){

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60,10);

        minutes = minutes<10 ? "0" + minutes: minutes;
        seconds = seconds <10 ? "0" + seconds :seconds;
        display.textContent = minutes + ":" + seconds;

        if(--timer < 0){
            timer = duration;
        }
        if(timer == 00){
            alert("time over!");
        }
    }, 1000);
}

onload = function(){
    var duration = 60*0.2;
    var display = document.querySelector("#timer");

    startTimer(duration, display);
}