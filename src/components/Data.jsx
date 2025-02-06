function Data({weatherData}){

    const a = weatherData.list[0];
    return <div className='dataparent grid grid-cols-1 lg:grid-cols-2 lg:mx-52 mt-0'>
        <div className="data col-span-1 flex flex-col bg-gray-300 items-center justify-center lg:m-12 my-4 rounded-xl p-6 w-full px-20 md:w-96 ">
            <h3 className="my-4 font-semibold">Temperature</h3>
            <div className="flex flex-col items-center gap-4">
               <img className="w-16 h-16" src={a.main.temp > 80 ? 'hot.png' : a.main.temp < 70 ? 'snowflake.png' : 'celsius.png' }/>
                <p>{(a.main.temp - 273.15).toFixed(2)} °C</p>
            </div>
            
        </div>
        <div className="data col-span-1 flex flex-col bg-gray-300 items-center justify-center lg:m-12 my-4 rounded-xl p-6 w-full px-20 md:w-96 ">
            <h3 className="my-4 font-semibold">Humidity</h3>
            <div className="flex flex-col items-center gap-4">
               <img className="w-16 h-16" src={a.main.humidity > 52 ? 'wet.png' : a.main.humidity < 20 ? 'humidity.png' : 'cream.png' }/>
               <p>{a.main.humidity}</p>
            </div>
           
        </div>
        <div className="data col-span-1 flex flex-col bg-gray-300 items-center justify-center lg:m-12 my-4 rounded-xl p-6 w-full px-20 md:w-96 ">
            <h3 className="my-4 font-semibold">clouds</h3>
            <div className="flex flex-col items-center gap-4">
               <img className="w-16 h-16" src={a.clouds.all > 60 ? 'veryCloudy.png' : a.clouds.all < 25 ? 'sunny.png' : 'slightlyCloudy.png' }/>
               <p>{a.clouds.all}</p>
            </div>
            
        </div>
        <div className="data col-span-1 flex flex-col bg-gray-300 items-center justify-center lg:m-12 my-4 rounded-xl p-6 w-full px-20 md:w-96 ">
            <h3 className="my-4 font-semibold">Wind speed</h3>
            <div className="flex flex-col items-center gap-4">
               <img className="w-16 h-16" src={a.wind.speed > 6 ? 'superhero.png' : 'windy.png' }/>
               <p>{a.wind.speed}</p>
            </div>
            
        </div>
    </div>
}

export default Data