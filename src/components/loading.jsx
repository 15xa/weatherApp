export const Loading = ( ) => {
    return(
        <div className="flex h-screen w-screen justify-center items-center text-center py-4">
        {loading ? "Loading..." : weatherData ? "" : "Enter a city and submit"}
      </div>
    )
}