//こっちはちゃんとエラーになる
//console.log(address);
function inputChange(event){
  console.log(event.currentTarget.value);
}

let text = document.getElementById('nametext');
text.addEventListener('change', inputChange);

let address = document.getElementById('address');
address.addEventListener('change', inputChange);

let radiosales = document.getElementById('sales');
radiosales.addEventListener('change', inputChange);

let radiodevelop = document.getElementById('develop');
radiodevelop.addEventListener('change', inputChange);

let radiohuman = document.getElementById('human');
radiohuman.addEventListener('change', inputChange);
