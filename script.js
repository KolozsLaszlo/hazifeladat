function bekuldes(event) {
  console.log(" ");

  const nev = document.querySelector("#nev");
  console.log("keresztnév:" + nev.value);

  const jelszo = document.querySelector("#jelszo");
  console.log("jelszó:" + jelszo.value);

  const email = document.querySelector("#email");
  console.log("E-mail:" + email.value);

  const szam = document.querySelector("#szam");
  console.log("szám:" + szam.value);

  const range = document.querySelector("#range");
  console.log("Skála:" + range.value);

  const szin = document.querySelector("#szin");
  console.log("Szín:" + szin.value);

  const ido = document.querySelector("#ido");
  console.log("Idő:" + ido.value);

  const honap = document.querySelector("#honap");
  console.log("Hónap:" + honap.value);

  const week = document.querySelector("#week");
  console.log("Hét:" + week.value);
  event.preventDefault();
}

urlap.addEventListener("submit", bekuldes);
