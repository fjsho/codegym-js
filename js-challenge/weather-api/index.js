const APPID = "4b5774e9f3d2a07b84f0f2f88e486224";
//定義してないのに読み込める。なんでエラーにならない？ここ以外全部コメントアウトしても読み込める。
//console.log(city);

//DOMContentLoadedイベントはHTMLのパースが完了したタイミングで発火する
document.addEventListener("DOMContentLoaded", callApi, false);
//changeイベントはリストボックスに変更があったタイミングで発火する
document.getElementById('city').addEventListener('change', callApi, false);

//関数の登録はコードを解析するタイミングで行われる
async function callApi() {
  //選択した都市の天気情報を取得
  console.log(city.value);
  const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=" + APPID);
  const weatherInfo = await res.json();
  const weather = weatherInfo.weather[0].main;
  console.log(weather);
  let elem = document.getElementById('weather');
  elem.textContent = weather;
}
