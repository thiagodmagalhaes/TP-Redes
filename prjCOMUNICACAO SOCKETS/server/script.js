const bancodepalavras = ["java", "react", "node", "python", "php"];
const palavraSecreta =
  bancodepalavras[Math.floor(Math.random() * bancodepalavras.length)];

  //VETOR PARA ARMAZENAR LETRAS ERRADAS E CORRETAS
const letrasErradas = [];
const letrasCorretas = [];

// COLETA E FAZ A VERIFICACAO DA LETRA DIGITADA
// CADA TECLA APERTADA ("KEYDOWN") EH CHAMADO UM (EVENTO).keyCode
// keyCode eh para verificar se vc digitou eh realmente uma letra
document.addEventListener("keydown", (evento) => {
  const codigo = evento.keyCode; // 65 - 90 (intervalo)
 //SE REALMENTE O QUE FOI DIGITE FOR UMA LETRA
  if (isLetra(codigo)) {
    const letra = evento.key;
    // SE A LETRA FOR REPETIDA E ERRADA
    if (letrasErradas.includes(letra)) {
      mostrarAvisoLetraRepetida();
    } else {
      //SE A PESSOA LETRA ACERTOU A LETRA  
      if (palavraSecreta.includes(letra)) {
        letrasCorretas.push(letra);
      } else {
    // SE A PESSOA ERROU A LETRA
        letrasErradas.push(letra);
      }
    }
    atualizarJogo();
  }
});

function atualizarJogo() {
  mostrarLetrasErradas();
  mostrarLetrasCertas();
  desenharForca();
  checarJogo();
}

function mostrarLetrasErradas() {
  const div = document.querySelector(".letras-erradas-container");
  div.innerHTML = "<h3>Letras erradas</h3>";
  letrasErradas.forEach((letra) => {
    div.innerHTML += `<span>${letra}</span>`;
  });
}

function mostrarLetrasCertas() {
  const container = document.querySelector(".palavra-secreta-container");
  container.innerHTML = "";
  palavraSecreta.split("").forEach((letra) => {
    if (letrasCorretas.includes(letra)) {
      container.innerHTML += `<span>${letra}</span>`;
    } else {
      container.innerHTML += `<span>_</span>`;
    }
  });
}

function checarJogo() {
  let mensagem = "";
  const container = document.querySelector(".palavra-secreta-container");
  const partesCorpo = document.querySelectorAll(".forca-parte");

  if (letrasErradas.length === partesCorpo.length) {
    mensagem = "Fim de jogo! Você perdeu!";
  }

  if (palavraSecreta === container.innerText) {
    mensagem = "Parabéns! Você ganhou!";
  }

  if (mensagem) {
    document.querySelector("#mensagem").innerHTML = mensagem;
    document.querySelector(".popup-container").style.display = "flex";
  }
}

function desenharForca() {
  const partesCorpo = document.querySelectorAll(".forca-parte");
  for (let i = 0; i < letrasErradas.length; i++) {
    partesCorpo[i].style.display = "block";
  }
}

function mostrarAvisoLetraRepetida() {
  const aviso = document.querySelector(".aviso-palavra-repetida");
  aviso.classList.add("show");
  setTimeout(() => {
    aviso.classList.remove("show");
  }, 1000);
}

function isLetra(codigo) {
  return codigo >= 65 && codigo <= 90;
}

function reiniciarJogo() {
  window.location.reload();
}
