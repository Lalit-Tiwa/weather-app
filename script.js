        const cityName = document.getElementById("cityName");
        const temp = document.getElementById("temp");
        const humidity = document.getElementById("humidity");
        const lat = document.getElementById("lat");
        const lon = document.getElementById("lon");
    
        const description = document.getElementById("description");


//         async = Your code can wait for slow things (like getting data from the internet),
// but it doesn’t freeze the whole program while waiting.

        async function getweatherinfo() {
            const city = document.getElementById("textcity").value;
            const apiKey = "eb719775ac810453039f574db64ad9fc";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            
            if (city === "") {
                alert("Please Enter City Name!");
                return;
             }

            try {

                const response = await fetch(url);
                const data = await response.json();
              
            

                if (data.cod === 404) {
                    alert("❌ City not found. Please enter a valid city name.");
                    // Clear previous data
                    cityName.textContent = "";
                    temp.textContent = "";
                    humidity.textContent = "";
                    lat.textContent = "";
                    lon.textContent = "";
                    description.textContent = "";
                    return;
               }
        

            
            cityName.textContent = data.name;
            temp.textContent = `Temperature: ${data.main.temp}°C`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`
            lat.textContent = `Lat: ${data.coord.lat}`
            lon.textContent = `Lon: ${data.coord.lon}`
            description.textContent = `Weather: ${data.weather[0].description}`;
        } catch (error) {
        console.log("Error:", error);
        alert("⚠️ Something went wrong while fetching weather data.");
      }
    
    }