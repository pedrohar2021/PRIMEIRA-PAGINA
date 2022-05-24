const elementoCamisa = document.querySelector("#camisa");
const elementoImg = document.querySelector("#imagem");
let elementoBtn = document.querySelector("#proximo");

elementoBtn.addEventListener("click", () => {
    if (elementoBtn.value == "primeiro") {
      elementoImg.src ="./assets/img/camisa2.jpg";
      elementoCamisa.innerText = "2- Branca";
      elementoBtn.value = "segundo";
    } else if (elementoBtn.value == "segundo") {
      elementoImg.src ="./assets/img/camisa3.jpg";
      elementoCamisa.innerText = "3- Preta";
      elementoBtn.value = "terceiro";
    } else {
      elementoImg.src ="./assets/img/camisa1.jpg";
      elementoCamisa.innerText = "1- Preta e Branca";
      elementoBtn.value = "primeiro";
    }
  });

