import { useState, useEffect, useRef } from 'react';
import {SendApiCall, SendApiGeo} from './ApiCall.jsx';
import Data from './Data.jsx';

export const CityInput = () => {
  const cityInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [lat, setlat] = useState('');
    const[lon, setlon] = useState('');
    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {console.log(position)
       
               setlat(position.coords.latitude)
               setlon(position.coords.longitude)
        
    });
    },[]);

  useEffect(() => {
    console.log("Updated weatherData:", weatherData);
  }, [weatherData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = cityInputRef.current.value;
    if (city.trim() === "") return;
    setLoading(true);
    const data = await SendApiCall(city);
    setWeatherData(data);
    setLoading(false);
  };

  return (
    
    <>
      <div className={`${weatherData ? "" : "h-screen"} flex ${ weatherData ? "" : "items-center"} justify-center`}>
        <div className="cityin">
          <div className='bg-green-200 rounded-full p-2 text-lg font-semibold text-center cursor-pointer border border-green-300 hover:bg-green-400' onClick={
            async() => {
              console.log('loc req')
              if(lat && lon){
                setLoading(true);
              const data = await  SendApiGeo(lat,lon);
              setWeatherData(data);
              setLoading(false);
               
              }
              else{
                return(<div>please allow location, or refresh and allow the location</div>)
              }
            }
          }>Fetch for My location</div>
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
              <div className="text-2xl my-4">Which city is cooking?</div>
              <div className={`flex ${weatherData ? 'flex-row md:gap-8 gap-2' : 'flex-col gap-4' }`}>
              <input
                id="city"
                type="text"
                ref={cityInputRef}
                placeholder="City Name"
                className="outline-1 hover:border hover:border-blue-300 outline-blue-300 p-4 border-0 text-center bg-custom-gradient rounded-full mt-2 ring-offset-1 ring-1 text-semibold font-medium"
              />
              <br />
              <input
                id="submitcity"
                type="submit"
                value="Submit"
                className="p-0 px-4 rounded-full bg-green-200 font-semibold hover:bg-green-400 border hover:border-2 border-green-400"
              />
              </div>
            </div>
          </form>
        </div>
      </div>
      {weatherData && <Data weatherData={weatherData} />}
    </>
  );
};
