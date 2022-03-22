import React, { useEffect, useState, useRef} from "react";
import '../assets/pomodoro.css';
import { Link } from "react-router-dom";

const InfiniteStudy = ({location}) => {
    //TODO: add query shortcuts

    let progress = null;
    //progresscurr records how much time has passed
    let progresscurr = 0;
    let speed = 1000;
    let secRem = 0;
    let minRem = 0;
    //Toggle rest and study state
    let restMode = false;


    function handleClick() {
        if (document.querySelector("#start-button").innerHTML === "Start"){
            document.querySelector("#start-button").innerHTML = "Stop";
            startStopProgress();
        } else {
            document.querySelector("#start-button").innerHTML = "Start";
            startStopProgress();
        }
    }

    function progressTrack(){
        progresscurr++;

        secRem = Math.floor(progresscurr % 60);
        minRem = Math.floor(progresscurr/ 60);

        document.querySelector("#seconds").innerHTML = secRem.toString().length == 2 ? secRem : `0${secRem}`;
        document.querySelector("#minutes").innerHTML = minRem.toString().length == 2 ? minRem : `0${minRem}`;
    }

    function startStopProgress(){
        if (!progress){
            progress = setInterval(progressTrack, speed);
        } else {
            clearInterval(progress);
            progress = null;
        }
    }

    //TODO: fix error when going back to main when timer is progressing
    return (
        <div class="container">
            <div class = "timer-container">
                <div class = "timer">
                    <div id = "caption">Focus</div>
                    <div id = "time">
                        <span id = "minutes">00</span>  
                        <span id = "colon">: </span>
                        <span id = "seconds"> 00</span>      
                    </div>
                    <div>
                    <button id = "start-button" onClick={handleClick}>Start</button>
                    </div>
                </div>
            </div>
            <div class = "back-button">
                <Link
                onClick={(e) => {console.log('front'); clearInterval(progress); progress = null}}
                to={`/front`}
                 >
                <button type="submit">Back</button>
                </Link>
            </div> 
        </div>
    );
}

export default InfiniteStudy;