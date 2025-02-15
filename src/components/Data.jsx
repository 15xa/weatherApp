import { useContext } from 'react';
import {weatherContext} from './weatherDataCotext';
import {latContext} from './latContext';
import {lonContext} from './lonContext';


function Data({weatherData}){
const {setWeatherData} = useContext(weatherContext);
const {lat}=useContext(latContext);
const {lon} = useContext(lonContext);
    const a = weatherData.list[0];
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
        
        <div className="data col-span-1 flex flex-col bg-gray-300 items-center justify-center lg:m-12 my-0 rounded-xl p-6 w-72 mx-16 px-20 md:w-96 ">
            <h3 className="my-4 font-semibold">Temperature</h3>
            <div className="flex flex-col items-center gap-4">
               <img className="w-16 h-16" src={a.main.temp > 80 ? 'hot.png' : a.main.temp < 70 ? 'snowflake.png' : 'celsius.png' }/>
                <p>{(a.main.temp - 273.15).toFixed(2)} °C</p>
            </div>
            
        </div>
        <div className="data col-span-1 flex flex-col bg-gray-300 items-center justify-center lg:m-12 my-0 rounded-xl p-6 w-72 mx-16 px-20 md:w-96 ">
            <h3 className="my-4 font-semibold">Humidity</h3>
            <div className="flex flex-col items-center gap-4">
               <img className="w-16 h-16" src={a.main.humidity > 52 ? 'wet.png' : a.main.humidity < 20 ? 'humidity.png' : 'cream.png' }/>
               <p>{a.main.humidity}</p>
            </div>
           
        </div>
        <div className="data col-span-1 flex flex-col bg-gray-300 items-center justify-center lg:m-12 my-0 rounded-xl p-6 w-72 mx-16 px-20 md:w-96 ">
            <h3 className="my-4 font-semibold">clouds</h3>
            <div className="flex flex-col items-center gap-4">
               <img className="w-16 h-16" src={a.clouds.all > 60 ? 'veryCloudy.png' : a.clouds.all < 25 ? 'sunny.png' : 'slightlyCloudly.png' }/>
               <p>{a.clouds.all}</p>
            </div>
            
        </div>
        <div className="data col-span-1 flex flex-col bg-gray-300 items-center justify-center lg:m-12 my-0 rounded-xl p-6 w-72 mx-16 px-20 md:w-96 ">
            <h3 className="my-4 font-semibold">Wind speed</h3>
            <div className="flex flex-col items-center gap-4">
               <img className="w-16 h-16" src={a.wind.speed > 6 ? 'superhero.png' : 'windy.png' }/>
               <p>{a.wind.speed}</p>
            </div>
            
        </div>

        <div className='flex justify-center w-full text-xs'>{`${lat} ${lon}`}</div>
    </div>
</div>

</div></div>
    </>
}

export default Data