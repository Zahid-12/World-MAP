const country_info = document.getElementById("country_info");
const allCountries = document.querySelectorAll(".allpaths");

async function getData(place) {
  const url = `https://restcountries.com/v3.1/name/${place}?fullText=true`;

  const res = await fetch(url);
  data = await res.json();
  document.querySelector(
    ".country"
  ).innerHTML = `<h3 class="country">${place}</h3>`;
  document.querySelector(".flag").src = data[0].flags.png;
  document.querySelector(
    ".capital"
  ).innerHTML = `<p class="capital"><span>Capital: </span>${data[0].capital[0]}</p>`;
  document.querySelector(
    ".population"
  ).innerHTML = `<p class="populaton"><span>Population: </span>${Number(
    data[0].population
  ).toLocaleString()}</p>`;
  document.querySelector(
    ".currency"
  ).innerHTML = `<p class="currency"><span>Currency: </span>${
    data[0].currencies[Object.keys(data[0].currencies)].name
  }</p>`;
}

allCountries.forEach((e) => {
  e.addEventListener("mouseover", () => {
    window.onmousemove = (j) => {
      x = j.clientX;
      y = j.clientY;
      country_info.style.top = y - 300 + "px";
      country_info.style.left = x - 200 + "px";
    };
    country_info.style.opacity = 1;
    getData(e.id);
  });
  e.addEventListener("mouseleave", () => {
    country_info.style.opacity = 0;
  });
});
