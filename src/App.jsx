import './index.css'; 
import { CityInput } from './components/cityinput';
import { useEffect } from 'react';


function App() {
 
  
    return <div>
      
    {loading ? <Loading/> : <CityInput/>}
    
    
  </div>
}

  export default App
