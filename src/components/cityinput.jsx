import { useState, useEffect, useRef, useContext } from 'react';
import { SendApiCall, SendApiGeo } from './ApiCall.jsx';
import Data from './Data.jsx';
import Error from './error.jsx';
import { latContext } from './latContext.jsx';
import { LoadingContext } from './loadingContext.jsx';
import { lonContext } from './lonContext.jsx';
import { weatherContext } from './weatherDataCotext.jsx';

export const CityInput = () => {
  const { loading, setLoading } = useContext(LoadingContext);
  const { weatherData, setWeatherData } = useContext(weatherContext);
  const { lat, setlat } = useContext(latContext);
  const { lon, setlon } = useContext(lonContext);
  const cityInputRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setlat(position.coords.latitude);
        setlon(position.coords.longitude);
      },
      (err) => {
        setErrorMessage("Location access denied. Please allow location access.");
      },
      options
    );
  }, [setlat, setlon]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = cityInputRef.current.value;
    if (city.trim() === "") return;

    try {
      setLoading(true);
      setErrorMessage("");
      const data = await SendApiCall(city);
      
      if (!data || data.cod === "404" || data.cod >= 400) {
        throw new Error(data?.message || "City not found");
      }
      
      setWeatherData(data);
    } catch (err) {
      setErrorMessage(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyLocationWeather = async () => {
    if (!lat || !lon) {
      setErrorMessage("Location not available. Please allow location access.");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");
      const data = await SendApiGeo(lat, lon);
      if (!data) throw new Error("Unable to fetch weather for your location.");
      setWeatherData(data);
    } catch (err) {
      setErrorMessage(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const Cityin = () => {
    let isMobile = typeof window !== "undefined" ? window.innerWidth < 450 : false;

    return (
      <div className={`${isMobile ? 'bg-bg-mob' : 'bg-bg-pc'} opacity-100 bg-cover bg-center ${weatherData ? "" : "h-screen"} flex ${weatherData ? "" : "items-center"} justify-center`}>
        <div className="bg-white rounded-3xl p-4 py-16 md:p-20 shadow-lg shadow-black-400">
          <div className="cityin flex flex-col items-center">
            <button
              className="bg-green-500 rounded-full p-6 text-lg font-semibold text-center cursor-pointer border border-lime-300 hover:bg-green-400 shadow shadow-md shadow-lime-400 hover:shadow-none"
              onClick={fetchMyLocationWeather}
            >
              Fetch for My Location
            </button>
            <div className='m-10 mt-14'>or</div>
            <form id="cityinform" onSubmit={handleSubmit}>
              <div className="flex flex-col items-center justify-center my-4">
                <div className="text-2xl my-4">Enter the City Name</div>
                <div className={`flex ${weatherData ? "flex-row md:gap-8 gap-2" : "flex-col gap-4"}`}>
                  <input
                    id="city"
                    type="text"
                    ref={cityInputRef}
                    placeholder="City Name"
                    className="outline-1 hover:border hover:border-blue-300 outline-blue-300 p-4 border-0 text-center bg-custom-gradient rounded-full mt-2 ring-offset-1 ring-1 text-semibold font-medium"
                  />
                  <input
                    id="submitcity"
                    type="submit"
                    value="Submit"
                    className="p-0 px-4 mt-10 py-2 rounded-full bg-green-500 font-semibold hover:bg-green-400 border hover:border-2 border-green-400"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const Load = () => (
    <div className="flex justify-center items-center text-center h-screen w-screen py-4 font-semibold text-xl">
      Loading....
    </div>
  );

  return (
    <div className="relative">
      {errorMessage && <Error e={errorMessage} />}
      {loading ? (
        <Load />
      ) : weatherData ? (
        <Data weatherData={weatherData} />
      ) : (
        <Cityin />
      )}
    </div>
  );
};