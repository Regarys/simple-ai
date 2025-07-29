export async function getWeather(city) {
  const apiKey = "c7d777ee071f1b01f466d4732a4f8258"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok){
      const errorData = await response.json();
      console.error("Weather api erros : ", errorData);
      return "I couldn't get the weather sir";
    } 


    const data = await response.json();
    return `The weather in ${data.name} is ${data.weather[0].description} with ${data.main.temp}°C.`;
  } catch (err) {
    return "SOmething went wrong when fetching the weather."
  }
}
