import {useState, useEffect} from 'react';
import '../Styles/Timer.css';
import {getRemainingTimeUntilMsTimestamp} from './countdowntimeutils/countdowntimerutils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <>
        <div className="strings">
            <h3 id="id1">Days</h3>
            <h3 id="id2">Hours</h3>
            <h3 id="id3">Minutes</h3>
            <h3 id="id4">Seconds</h3>
        </div>
        <div className="countdowntimer">
            <span className='dy'>{remainingTime.days}</span>
            <span id="c1">:</span>
            <span className="hr">{remainingTime.hours}</span>
            <span id="c2">:</span>
            <span className="min">{remainingTime.minutes}</span>
            <span id="c3">:</span>
            <span className="sec">{remainingTime.seconds}</span>
        </div>
        </>
    );
}

export default CountdownTimer;