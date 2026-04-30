const countries = [
  {
    n: "USA",
    p: "323,947,000",
    r: "Americas",
    c: "Washington D.C.",
    f: "./img_rasmlar/flag-usa.svg",
  },
  {
    n: "Brazil",
    p: "206,135,893",
    r: "Americas",
    c: "Brasilia",
    f: "./img_rasmlar/flag-brazil.svg",
  },
  {
    n: "Iceland",
    p: "334,300",
    r: "Europe",
    c: "Reykjavik",
    f: "./img_rasmlar/1280px-Flag_of_Germany.svg.svg",
  },
];
const grid = document.getElementById("grid-id");
countries.forEach((item) => {
  grid.innerHTML += `
        <div class="j">
            <img src="${item.f}" class="k"> <!-- JS dagi rasm linki -->
            <div class="l">
                <h2 class="m">${item.n}</h2>
                <p class="n"><span class="o">Population:</span> ${item.p}</p>
                <p class="n"><span class="o">Region:</span> ${item.r}</p>
                <p class="n"><span class="o">Capital:</span> ${item.c}</p>
            </div>
        </div>`;
});
const btn = document.getElementById("z-btn");
const apply = (dark) => {
  document.body.classList.toggle("dark", dark);
  document.getElementById("x-text").innerText = dark
    ? "Light Mode"
    : "Dark Mode";
  document.getElementById("y-icon").innerText = dark ? "" : "";
};
let isD = localStorage.getItem("theme") === "dark";
apply(isD);
btn.onclick = () => {
  isD = !isD;
  localStorage.setItem("theme", isD ? "dark" : "light");
  apply(isD);
};
