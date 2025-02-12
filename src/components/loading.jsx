import { useContext } from "react";
import { LoadingContext } from "./loadingContext";
import { weatherContext } from "./weatherDataCotext";
import { CityInput } from "./cityinput";
import Data from "./Data";

const Load = () => {
  return (
    <div className="flex justify-center items-center text-center h-screen w-screen py-4 font-semibold text-xl">
      Loading....
    </div>
  );
};

export const Loading = () => {
  const { loading } = useContext(LoadingContext);
  const { weatherData } = useContext(weatherContext);

  return (
    <>
      {loading ? <Load /> : weatherData ? <Data weatherData={weatherData} /> : <CityInput />}
    </>
  );
};
