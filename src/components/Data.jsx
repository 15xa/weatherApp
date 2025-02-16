import { useContext } from 'react';
import {weatherContext} from './weatherDataCotext';
import {latContext} from './latContext';
import {lonContext} from './lonContext';


function Data({weatherData}){
const {setWeatherData} = useContext(weatherContext);
const {lat}=useContext(latContext);
const {lon} = useContext(lonContext);
    const a = weatherData.list[0];
    function humidityBg(humidity) {
        switch (true) {
          case humidity <= 20:
            return "bg-yellow-700"; 
          case humidity > 20 && humidity <= 40:
            return "bg-yellow-500"; 
          case humidity > 40 && humidity <= 60:
            return "bg-green-400"; 
          case humidity > 60 && humidity <= 80:
            return "bg-blue-400"; 
          case humidity > 80:
            return "bg-blue-700"; 
          default:
            return "bg-gray-400";
        }
      }
      function cloudBg(clouds) {
        switch (true) {
          case clouds <= 10:
            return "bg-yellow-300"; 
          case clouds > 10 && clouds <= 30:
            return "bg-blue-300"; 
          case clouds > 30 && clouds <= 60:
            return "bg-gray-400"; 
          case clouds > 60 && clouds <= 90:
            return "bg-gray-600";
          case clouds > 90:
            return "bg-gray-800"; 
          default:
            return "bg-gray-500"; 
        }
      }
      function windBg(speed) {
        switch (true) {
          case speed <= 1.5:
            return "bg-green-400";
          case speed > 1.5 && speed <= 5.4:
            return "bg-lime-400"; 
          case speed > 5.4 && speed <= 10.7:
            return "bg-yellow-500"; 
          case speed > 10.7 && speed <= 17.1:
            return "bg-orange-500";
          case speed > 17.1 && speed <= 24.4:
            return "bg-red-500"; 
          case speed > 24.4:
            return "bg-red-700";
          default:
            return "bg-gray-500";
        }
      }
      
      
      

function tempbg(){
    let C = (a.main.temp - 273.15).toFixed(2);
    switch(true){
        case C <= 0 :
            return"bg-blue-700";
        case C < 10 && C >= 1:
            return"bg-blue-500";
        case C < 16 && C >= 10:
            return"bg-cyan-400";
        case C < 21 && C >= 16:
            return"bg-green-400";
        case C < 26 && C >= 21:
                return"bg-lime-400";
        case C < 31 && C >= 26:
            return"bg-yellow-400";
        case C < 36 && C >= 31:
            return"bg-orange-500";
        case C < 40 && C >= 36:
            return"bg-red-500";
        case C > 40:
            return"bg-red-700"
    }
}
    console.log(a);
    return<>
<div className='bg-'>
<div>
    <div className='flex flex-col items-center'>
        
    <div className="flex text-center rounded-full m-10 p-7 text-lg font-medium bg-green-300 hover:bg-green-100 hover:border hover:border-green-300" onClick={() => {
        setWeatherData(null);
    }}>Search More</div>

    <div className='flex text-center font-medium text-xl'>Weather - <div className='font-semibold'>{`${a.weather[0].main}`}<br/></div></div>
    <div className='flex text-center font-normal text-xl'>Description - <div className='font-semibold'>{`${a.weather[0].description}`}<br/></div></div>

       
     <div className='dataparent grid grid-cols-1 lg:grid-cols-2  mt-0 gap-10'>
        
        <div className={`data col-span-1 flex flex-col ${tempbg()} items-center justify-center lg:m-12 my-0 rounded-xl p-6 w-72 mx-16 px-20 md:w-96 `}>
            <h3 className="my-4 font-semibold">Temperature</h3>
            <div className="flex flex-col items-center gap-4">
               <img className="w-16 h-16" src={a.main.temp > 80 ? 'hot.png' : a.main.temp < 70 ? 'snowflake.png' : 'celsius.png' }/>
                <p className='text-2xl font-bold'>{(a.main.temp - 273.15).toFixed(2)} °C</p>
            </div>
            
        </div>
        <div className={`data col-span-1 flex flex-col ${humidityBg(a.main.humidity)} items-center justify-center lg:m-12 my-0 rounded-xl p-6 w-72 mx-16 px-20 md:w-96`} >
            <h3 className="my-4 font-semibold">Humidity</h3>
            <div className="flex flex-col items-center gap-4">
               <img className="w-16 h-16" src={a.main.humidity > 52 ? 'wet.png' : a.main.humidity < 20 ? 'humidity.png' : 'cream.png' }/>
               <p className='text-2xl font-bold'>{a.main.humidity}</p>
            </div>
           
        </div>
        <div className={`data col-span-1 flex flex-col ${cloudBg(a.clouds.all)} items-center justify-center lg:m-12 my-0 rounded-xl p-6 w-72 mx-16 px-20 md:w-96 `}>
            <h3 className="my-4 font-semibold">clouds</h3>
            <div className="flex flex-col items-center gap-4">
               <img className="w-16 h-16" src={a.clouds.all > 60 ? 'veryCloudy.png' : a.clouds.all < 25 ? 'sunny.png' : 'slightlyCloudly.png' }/>
               <p className='text-2xl font-bold'>{a.clouds.all}</p>
            </div>
            
        </div>
        <div className={`data col-span-1 flex flex-col ${windBg(a.wind.speed)} items-center justify-center lg:m-12 my-0 rounded-xl p-6 w-72 mx-16 px-20 md:w-96`}>
            <h3 className="my-4 font-semibold">Wind speed</h3>
            <div className="flex flex-col items-center gap-4">
               <img className="w-16 h-16" src={a.wind.speed > 6 ? 'superhero.png' : 'windy.png' }/>
               <p className='text-2xl font-bold'>{a.wind.speed}</p>
            </div>
            
        </div>

        <div className='flex justify-center w-full text-xs'>{`${lat} ${lon}`}</div>
    </div>
</div>

</div></div>
    </>
}

export default Data