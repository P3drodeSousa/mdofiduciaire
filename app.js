const civilState = document.querySelector("#civil");
const situation = document.querySelector("#situation");
const nombreEnfants = document.querySelector("#nombreEnfants");
const enfantsBox = document.querySelector("input[name=enfants]");
const proprietaire = document.querySelector("#proprietaire");
const proprietaireBox = document.querySelector("input[name=proprietaire]");
const actions = document.querySelector("#actionsSelect");
const actionsBox = document.querySelector("input[name=actions]");
const checkBox = document.querySelector("#enfants");

// MODAL
const something = document.getElementById("something");
const overlay = document.querySelector(".overlay");
const close = document.querySelector("button.close");

//E:H
something.addEventListener("click", (e) => {
  console.log("clicked");
  overlay.classList.add("d-flex");
});

close.addEventListener("click", (e) => {
  overlay.classList.remove("d-flex");
});

const normalPrices = [160, 215, 270, 325, 380, 430, 485, 540];
const marriedPrices = [215, 270, 325, 380, 430, 485, 540, 600];

let civil = null;
let profSituation = null;
const infos = {
  enfants: 0,
  proprietaire: 0,
  actions: 0,
};

let total = null;

function toggleClass(target) {
  document.querySelector(target).classList.toggle("d-none");
}

civilState.addEventListener("change", (e) => {
  civil = document.getElementById("civil").value;
  calTotal(infos);
});

situation.addEventListener("change", (e) => {
  profSituation = situation.value;
  calTotal(infos);
});

nombreEnfants.addEventListener("change", (e) => {
  infos.enfants = nombreEnfants.value;
  calTotal(infos);
});

enfantsBox.addEventListener("click", (e) => {
  toggleClass(".enfants");
});

document.querySelector("#proprietaires").addEventListener("change", (e) => {
  infos.proprietaire = document.querySelector("#proprietaires").value;
  console.log(document.querySelector("#proprietaires").value);
  calTotal(infos);
});

proprietaireBox.addEventListener("click", (e) => {
  toggleClass(".proprietaire");
});

actions.addEventListener("change", (e) => {
  infos.actions = actions.value;
  calTotal(infos);
});

actionsBox.addEventListener("click", (e) => {
  toggleClass(".actions");
});

function chooseArr(civil, total) {
  if (profSituation === "independant") {
    return `  <p class="professional font-weight-bold m-0 ml-auto p-2 col-sm-12" style="color: #bf2831; font-size: 25px;text-decoration: underline;">CHF 150/HT de l'heure</p>`;
  }
  if (total > 7)
    return `<a href="https://mdofiduciaire.ch/contact/" class="px-3 py-2 font-weight-bold" style="border: 2px solid;
     background-color: #bf2831; color: white;" > Veuillez nous contacter !</a> `;
  if (civil === "marie")
    return `<p id="total" class="  m-0 ml-auto font-weight-bold p-2 col-sm-12 " style="color:green; font-size: 30px;">${marriedPrices[total]} CHF</p>`;
  return ` <p id="total" class="  m-0 ml-auto font-weight-bold p-2 col-sm-12 " style="color:green; font-size: 30px;">${normalPrices[total]} CHF</p>`;
}

function displayTotal(total) {
  document.querySelector("#total").innerHTML = chooseArr(civil, total);
}

function calTotal(obj) {
  total = null;
  Object.entries(obj).forEach(([key, value]) => {
    total += +value;
  });
  displayTotal(total);
}
calTotal(infos);
