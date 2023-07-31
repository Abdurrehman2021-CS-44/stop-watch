import "../App.css"

const App = () => {
    const timer = new Date(2023, 7, 31, 0, 0, 0, 0);

    // Extract individual components (hours, minutes, seconds) from the date object
    const hours = timer.getHours();
    const minutes = timer.getMinutes();
    const seconds = timer.getSeconds();
    const milliseconds = timer.getMilliseconds();

    // Format the components to ensure they always have two digits (e.g., 01, 02, ..., 09)
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(milliseconds).padStart(2, '0');

    // Create a string representing the current time in the format "HH:mm:ss"
    const currentTime24Hours = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;

    return (
        <div className="App">
            <h1>{currentTime24Hours}</h1>
        </div>
    )
};
 
export default App;