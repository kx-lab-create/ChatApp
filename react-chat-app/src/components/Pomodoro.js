import React, { useEffect, useState, useRef} from "react";
import queryString from "query-string";
import '../assets/pomodoro.css';

const Pomodoro = ({location}) => {
    const [userId, setUserId] = useState("");

    //TODO: toggle rest and study state
    let restMode = useRef(false);
    
    //no need for this; just 25 min for now
    const startStop = document.querySelector("#start-button");
    let minute = document.querySelector("#minutes").innerHTML;
    let second = document.querySelector("#seconds").innerHTML;
    let progress = null;
    let progressStart = 0;
    //25 minutes is 1500 seconds
    let progressEnd = 1500;
    let speed = 1000;
    let secRem = 0;
    let minRem = 0;

    startStop.onclick = function(){
        if (startStop.innerHTML === "Start"){
            if (!(parseInt(minute) === 0 && parseInt(second) === 0)){
                startStop.innerHTML = "Stop";
                startStopProgress();
            }
        } else {
            startStop.innerHTML = "Start";
            startStopProgress();
        }
    }

    function progressTrack(){
        progressStart++;

        secRem = Math.floor((progressEnd - progressStart) % 60);
        minRem = Math.floor((progressEnd - progressStart) / 60);
    }

    function startStopProgress(){
        
    }


    // useEffect(() =>{
    //     const userId = queryString.parse(location.search).userId;
    // }, [location.search]);

    


return (
    <div class="container">
        <div class = "timer-container">
            <div class = "timer">
                <div id = "time">
                    <span id = "minutes">23</span>  
                    <span id = "colon">: </span>
                    <span id = "seconds"> 12</span>      
                </div>
                <div id ="start-button">Start</div>
                <span id = "setting"><i class = "fas fa-cog"></i></span>
            </div>
        </div>
    </div>
);
}

export default Pomodoro;