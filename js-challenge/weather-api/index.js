window.onload = function () {
  const APPID = "4b5774e9f3d2a07b84f0f2f88e486224";
  const city = document.getElementById("city");

  //ページ読み込み時に天気を表示する
  execute();

  //リストボックス変更時に天気を書き換える
  document.getElementById("city").addEventListener("change", execute, false);

  /**
   * 天気情報を取得してhtmlの書き換えを行います
   */
  async function execute() {
    const newWeatherText = await fetchWeather();
    changeWetherText(newWeatherText);
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
};
