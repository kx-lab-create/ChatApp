import React, { useEffect, useState, useRef} from "react";
import queryString from "query-string";
import '../assets/pomodoro.css';

const Pomodoro = ({location}) => {
    const [userId, setUserId] = useState("");

    //TODO: toggle rest and study state
    let restMode = useRef(false);
    
    //no need for this; just 25 min for now
    const startStop = document.querySelector("#start-button");
    const minElem = document.querySelector("#minutes");
    const secElem = document.querySelector("#seconds");
    let progress = null;
    let progressStart = 0;
    //25 minutes is 1500 seconds
    let progressEnd = 1500;
    let speed = 1000;
    let secRem = 0;
    let minRem = 0;

    function handleClick() {
        if (document.querySelector("#start-button").innerHTML === "Start"){
            if (!(parseInt(document.querySelector("#minutes").innerHTML) === 0 && parseInt(document.querySelector("#seconds").innerHTML) === 0)){
                document.querySelector("#start-button").innerHTML = "Stop";
                startStopProgress();
            }
        } else {
            document.querySelector("#start-button").innerHTML = "Start";
            startStopProgress();
        }
    }

    function progressTrack(){
        progressStart++;

        secRem = Math.floor((progressEnd - progressStart) % 60);
        minRem = Math.floor((progressEnd - progressStart) / 60);

        document.querySelector("#seconds").innerHTML = secRem.toString().length == 2 ? secRem : `0${secRem}`;
        document.querySelector("#minutes").innerHTML = minRem.toString().length == 2 ? minRem : `0${minRem}`;

        if (progressStart == progressEnd) {
            clearInterval(progress);
            startStop.innerHTML = "START";
            progress = null;
            progressStart = 0;

            minElem.innerHTML = "25";
            secElem.innerHTML = "00";
        }
    }

    function startStopProgress(){
        if (!progress){
            progress = setInterval(progressTrack, speed);
        } else {
            clearInterval(progress);
            progress = null;
            //progressStart = 0;
        }
    }


    // useEffect(() =>{
    //     const userId = queryString.parse(location.search).userId;
    // }, [location.search]);

    


return (
    <div class="container">
        <div class = "timer-container">
            <div class = "timer">
                <div id = "time">
                    <span id = "minutes">25</span>  
                    <span id = "colon">: </span>
                    <span id = "seconds"> 00</span>      
                </div>
                <div>
                <button id = "start-button" onClick={handleClick}>Start</button>
                </div>
                <span id = "setting"><i class = "fas fa-cog"></i></span>
            </div>
        </div>
    </div>
);
}

export default Pomodoro;

//<div id ="start-button">Start</div>