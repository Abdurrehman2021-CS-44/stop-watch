import { useEffect, useState } from "react";
import "../App.css"

const getUpdatedTime = (update) => {
    const timer = new Date(2023, 7, 31, 0, 0, update);
    // Extract individual components (hours, minutes, seconds) from the date object
    const hours = timer.getHours();
    const minutes = timer.getMinutes();
    const seconds = timer.getSeconds();
    // const milliseconds = timer.getMilliseconds();

    // Format the components to ensure they always have two digits (e.g., 01, 02, ..., 09)
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    // const formattedMilliseconds = String(milliseconds).padStart(2, '0');

    // Create a string representing the current time in the format "HH:mm:ss"
    const currentTime24Hours = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    return currentTime24Hours;
}

const App = () => {
    const [isRunning,setIsRunning] = useState(false);
    const [update, setUpdate] = useState(0);


    const handleClick = (e) => {
        if( e.target.name === "start"){
            setIsRunning(true);
        } else if (e.target.name === "stop") {
            setIsRunning(false);
        } else {
            setUpdate(0);
            setIsRunning(false);
        }
    }

    useEffect(()=>{
        let interval;
        if (isRunning){
            interval =  setInterval(()=>{
                setUpdate((prevVal)=>prevVal+1)
            },1000)
        }
        return () => clearInterval(interval)
    }, [isRunning])

    return (
        <div className="App">
            <h1 className="title">Stop Watch</h1>
            <h1 className="watch">{getUpdatedTime(update)}</h1>
            <button className="btn btn-outline-light m-4 btn-lg" name="start" onClick={handleClick}>Start</button>
            <button className="btn btn-light m-4 btn-lg" name="stop" onClick={handleClick}>Stop</button>
            <button className="btn btn-outline-light m-4 btn-lg" name="reset" onClick={handleClick}>Reset</button>
        </div>
    )
};
 
export default App;