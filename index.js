const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

form.addEventListener("submit", function (e) {
  input(form[0].value);
  e.preventDefault();
});
const input = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return show(data);
};
const show = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = `<h1 class="text-center">data not matching</h1>`;
  } else {
    weather.innerHTML = `
    <thead>
    <tr class='mx-5'><td>
    <img class='w-full' src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></td> 
    <td class='my-2'> <h4>Wind:${data.wind.speed}</h4></td>
   </tr>
</thead>
<tbody class="my-2">
<div class='details'>
        <h1 class="text-center">${data.main.temp} degree</h1>
        <h4 class="text-center">
        Weather : 
           ${data.weather[0].main}
        </h4>
        <div class='row'>
        <div class='col'>
        <h4 class="text-center">
        Pressure : 
        ${data.main.pressure}
     </h4>
     <div>
     <div class='col'>
     <h4 class="text-center">
     Humidity : 
     ${data.main.humidity}
  </h4>
  <div>
  </div>
  </div>
</tbody>`;
  }
};
