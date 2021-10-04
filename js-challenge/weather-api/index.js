const APPID = '4b5774e9f3d2a07b84f0f2f88e486224';
const city = 'London';

async function callApi() {
  const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APPID);
  const weather = await res.json();
  console.log(weather);
}

callApi();
