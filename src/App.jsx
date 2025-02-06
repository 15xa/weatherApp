import { useState, useEffect, useRef } from 'react';
import './index.css'; 
import SendApiCall from './components/ApiCall.jsx';
import Data from './components/Data.jsx';

function App() {
  const cityInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = cityInputRef.current.value;
    if (city.trim() === "") return; 
    setLoading(true);
    const data = await SendApiCall(city);
    setWeatherData(data);
    setLoading(false);
  };

  
  useEffect(() => {
    console.log("Updated weatherData:", weatherData);
  }, [weatherData]);

  
  function CityInput() {
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className="cityin">
          <form id="cityinform" onSubmit={handleSubmit}>
            <div
              style={{
                display: 'flex',
                margin: 20,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div className='text-2xl my-4'>Which city is cooking?</div>
              <input
                id="city"
                type="text"
                
                ref={cityInputRef} 
                placeholder="City Name"
                className="outline-1 outline-blue-300 p-4 border-0 text-center bg-custom-gradient rounded-full mt-2 ring-offset-1 ring-1 text-semibold font-medium"
              />
              <br />
              <input
                id="submitcity"
                type="submit"
                value="Submit"
                className='p-3 px-4 rounded-full bg-gray-300'
              />
            </div>
          </form>
        </div>

       
      </div>
    );
  }


  
    return <div>
      <div>
          {loading 
            ? "Loading..." 
            : weatherData 
              ? "" 
              : "Enter a city and submit"}
        </div>  
    <CityInput />
    {weatherData && <Data weatherData={weatherData} />}
    
  </div>
}

  export default App
