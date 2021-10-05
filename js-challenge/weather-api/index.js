const APPID = "4b5774e9f3d2a07b84f0f2f88e486224";
const city = 'London';

async function callApi() {
  //選択した都市の天気情報を取得
  const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APPID);
  const weatherInfo = await res.json();
  const weather = weatherInfo.weather[0].main;
  console.log(weather);
  let elem = document.getElementById('weather');
  elem.textContent = weather;
}


callApi();