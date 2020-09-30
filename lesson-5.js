const towns = ['Saint Petersburg', 'Vilnius', 'Riga', 'Bryansk', 'Vladivostok'];

function getRandomCity(cityArray) {
  const randomKey = Math.floor(Math.random() * cityArray.length);
  return cityArray[randomKey];
}

class RandomCityWeather {
  getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getRandomCity(towns)}
    &appid=3cfd68838b6194a0a2ce940d21b3b919`)
    .then((res) => res.json())
    .then((weather) => weather)  
  }
}

class MyCityAndRandomWeather extends RandomCityWeather{
  getMyWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Minsk
    &appid=3cfd68838b6194a0a2ce940d21b3b919`)
    .then((res) => res.json())
    .then((weather) => weather)  
  }
}
const randomCityWeather = new RandomCityWeather();
const myCityAndRandomWeather = new MyCityAndRandomWeather();
myCityAndRandomWeather.getWeather();
myCityAndRandomWeather.getMyWeather();