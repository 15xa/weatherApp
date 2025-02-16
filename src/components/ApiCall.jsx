
    
    export const SendApiCall = async (city) => {
      console.log("Form submitted");
      
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b57d76942447f674ed3cacc5cb415ffd`);
        const data = await response.json();
        
        if (!response.ok || data.cod === "404") {
          throw new Error(data.message || 'City not found');
        }
        
        return data;
      } catch (error) {
        throw error; 
      }
    };



   export const SendApiGeo = async (lat, lon) => {
    console.log("Form submitted");
    console.log("Latitude:", lat, "Longitude:", lon);
   try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b57d76942447f674ed3cacc5cb415ffd`);
      const data = await response.json();
    
    if (!response.ok || data.cod === "404") {
      throw new Error(data.message || 'City not found');
    }
    
    return data;
  } catch (error) {
    throw error;
  }
};