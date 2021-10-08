const APPID = "4b5774e9f3d2a07b84f0f2f88e486224";
const city = document.getElementById("city");

//DOMContentLoadedイベントはHTMLのパースが完了したタイミングで発火する
document.addEventListener("DOMContentLoaded", execute, false);
//changeイベントはリストボックスに変更があったタイミングで発火する
document.getElementById("city").addEventListener("change", execute, false);

//関数の登録はコードを解析するタイミングで行われる
/**
 * 天気情報を取得してhtmlの書き換えを行います
 */
async function execute() {
  const newWeatherText = await fetchWeather();
  changeWetherText(newWeatherText);
  console.log("都市名：" + city.value + "　天気：" + newWeatherText);
}

/**
 * 天気情報APIを呼び出し、選択された都市の天気情報を返します
 * @returns {string} 天気情報
 */
async function fetchWeather() {
  try {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city.value +
        "&appid=" +
        APPID
    );
    const weatherInfo = await res.json();
    const weather = weatherInfo.weather[0].main;
    return weather;
  } catch (err) {
    alert(err.message);
  }
}

/**
 * DOMを操作してid='weather'のテキストを書き換えます
 * @param {string} weatherText 天気情報
 */
function changeWetherText(weatherText) {
  const elem = document.getElementById("weather");
  elem.textContent = weatherText;
}
