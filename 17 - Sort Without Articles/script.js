const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const regex = /^(a |the |an )/i;

function strip(bandname) {
  return bandname.replace(regex, "").trim(); // trim just in case that there's some space
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join("");
