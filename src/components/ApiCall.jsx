   
    
  
  
   export const SendApiCall =  async (city) =>  {
      console.log("Form submitted");
      
      try {
            const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=b57d76942447f674ed3cacc5cb415ffd');
            if(!response.ok){
              throw new Error('City not found, try coordinates')
              
            }
            const data =  await response.json();
            return data
            
          }
          
     
        catch(error){
          console.log(error);
          return null
        }
        finally{
          console.log("  ..  ")
        }
   }

   



   export const SendApiGeo = async (lat, lon) => {
    console.log("Form submitted");
    console.log("Latitude:", lat, "Longitude:", lon);
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b57d76942447f674ed3cacc5cb415ffd`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`City not found, try coordinates. Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Data received:", data);
      return data;
    } catch (error) {
      console.log("Error in SendApiGeo:", error);
      return null;
    } finally {
      console.log("  ..  ");
    }
  };
  