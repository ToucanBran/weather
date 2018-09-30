### INSTRUCTIONS

# THIS HOMEWORK FOLLOWS THE STEPS TAKING DURING LECTURE THIS WEEK.  THE PRIMARY DIFFERENCE
# MOVING THE HTTP REQUEST AND THE CITY DETAILS TO THE weather-forecast-list.  ADDITIONALLY, WE # WANT TO EXTRAPOLATE THE DISPLAYED RESULT WITHIN A weather-forecast COMPONENT.

0. CREATE MODELS (Classes) WITH APPROPRIATE ATTRIBUTES FOR CityDetails and WeatherForecast

1. MAKE SURE TO ADD WEATHERBIT API KEY TO environments/environment.ts

2. ADD INPUT TO app.component.ts AND BIND THE searchText attribute IN THE app.component.ts TO
   THE INPUT ELEMENT

3. PASS USER SEARCH TEXT TO CHILD COMPONENT weather-forecast-list

4. CREATE getWeather() function IN the weather-forecast-list.component.ts.  ADD THE HTTP 
   REQUEST AS DONE IN LECTURE

5. ADD HTML TO THE weather-forecast.html TO DISPLAY A WEATHER FORECAST RESULT

6. ADD AN ITERATOR TO weather-forecast-list AND DISPLAY EACH WEATHER
   FORECAST RESULT <app-weather-forecast>

repo: https://github.com/ToucanBran/weather