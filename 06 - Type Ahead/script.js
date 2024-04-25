const searchInput = document.querySelector(".search");
const searchResults = document.querySelector(".suggestions");
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];

searchInput.addEventListener("keyup", displayMatches);

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  const regex = new RegExp(wordToMatch, "gi");
  return cities.filter((place) => {
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const regex = new RegExp(this.value, "gi");
  const html = matchArray
    .map((place) => {
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
    <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${formatNumbers(place.population)}</span>
    </li>
    `;
    })
    .join("");
  searchResults.innerHTML = html;
}

function formatNumbers(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
