import './index.css'; 
import { LoadingProvider } from './components/loadingContext';
import { WeatherProvider } from './components/weatherDataCotext';
import { LatProvider } from './components/latContext';
import { LonProvider } from './components/lonContext';
import { Loading } from './components/loading';

function App() {
  return (
    <div>
      <WeatherProvider>
        <LatProvider>
          <LonProvider>
            <LoadingProvider>
              <Loading/>
            </LoadingProvider>
          </LonProvider>
        </LatProvider>
      </WeatherProvider>
    </div>
  );
}

export default App;
