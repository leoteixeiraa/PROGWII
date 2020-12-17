const questao_tag = document.querySelector("div.questao");
const alternativas_tag = document.querySelector("div.alternativas");
const form = document.querySelector("form");
const resultado_tag = document.querySelector("p.resultado");
var indice = 0;

const questoes = [
  {
    id: 1,
    descricao: "Dentro de qual elemento HTML colocamos o JavaScript?",
    nivel: "Fácil",
    alternativas: [
      { id: 1, texto: "<javascript>", correta: false },
      { id: 2, texto: "<script>", correta: true },
      { id: 3, texto: "<scripting>", correta: false },
      { id: 4, texto: "<js>", correta: false },
    ],
  },
  {
    id: 2,
    descricao: "Qual declaração de variável NÃO está correta?",
    nivel: "Fácil",
    alternativas: [
      { id: 1, texto: 'var texto = "10";', correta: false },
      { id: 2, texto: "const texto;", correta: true },
      { id: 3, texto: 'let texto = "oi";', correta: false },
      { id: 4, texto: "const idade = 18;", correta: false },
    ],
  },
  {
    id: 3,
    descricao: "Qual a montanha mais alta do Brasil?",
    nivel: "Fácil",
    alternativas: [
      { id: 1, texto: 'Pico da Neblina', correta: true },
      { id: 2, texto: "Pico Paraná", correta: false },
      { id: 3, texto: 'Monte Roraima', correta: false },
      { id: 4, texto: "Pico Maior de Friburgo", correta: false },
    ],
  },

  {
    id: 4,
    descricao: "Qual a velocidade da luz?",
    nivel: "Fácil",
    alternativas: [
      { id: 1, texto: '300 000 000 metros por segundo (m/s)', correta: false },
      { id: 2, texto: "150 000 000 metros por segundo (m/s)", correta: false },
      { id: 3, texto: '199 792 458 metros por segundo (m/s)', correta: false },
      { id: 4, texto: "299 792 458 metros por segundo (m/s)", correta: true },
    ],
  },

  {
    id: 5,
    descricao: "Em qual local da Ásia o português é língua oficial?",
    nivel: "Fácil",
    alternativas: [
      { id: 1, texto: 'Índia', correta: false },
      { id: 2, texto: "Filipinas", correta: false },
      { id: 3, texto: 'Moçambique', correta: false },
      { id: 4, texto: "Macau", correta: true },
    ],
  }


];

const proximaQuestao = function () {
  let questao = questoes[indice];

  imprimirQuestao(questao);
  imprimirAlternativas(embaralharArray(questao.alternativas));
};

function imprimirQuestao(questao) {
  var input = criarInputHidden(questao);
  var label = criarLabel(`${questao.id} - ${questao.descricao}`);
  questao_tag.appendChild(input);
  questao_tag.appendChild(label);
}

function imprimirAlternativas(alternativas) {
  alternativas.forEach(function (a) {
    alternativas_tag.appendChild(criarAlternativaRadio(a));
    alternativas_tag.appendChild(criarLabel(a.texto));
    alternativas_tag.innerHTML += "<br />";
  });
}

function criarInputHidden(questao) {
  let input = document.createElement("input");
  input.type = "hidden";
  input.id = "questao_id";
  input.name = "questao_id";
  input.value = questao.id;
  return input;
}

function criarLabel(texto) {
  let label = document.createElement("label");
  label.textContent = texto;

  return label;
}

function criarAlternativaRadio(alternativa) {
  let input = document.createElement("input");
  input.type = "radio";
  // input.id = alternativa.id;
  input.name = "alternativa";
  input.value = alternativa.id;

  return input;
}

function verificarResposta(resposta) {
  let questao = questoes.find(function (q) {
    return q.id == resposta.questao_id;
  });

  let alternativa = questao.alternativas.find(function (a) {
    return a.id == resposta.alternativa;
  });

  console.log(questao);
  console.log(alternativa);
  if (alternativa.correta === true) {
    return { correta: true, mensagem: "Resposta Certa!" };
  } else {
    return { correta: false, mensagem: "Que pena! Tente novamente!" };
  }
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var formulario = new FormData(event.target);
  var resposta = Object.fromEntries(formulario);
  console.log(resposta);

  let resultado = verificarResposta(resposta);
  resultado_tag.innerHTML = resultado.mensagem;

  if (resultado.correta) {
    limpar();

    if (++indice === questoes.length) {
      resultado_tag.innerHTML = "Quiz Finalizado!";
    } else {
      proximaQuestao(indice);
    }
  }
});

(function () {
  console.log("Iniciando o Quiz...", "\n");

  proximaQuestao();
})();

function limpar() {
  questao_tag.innerHTML = "";
  alternativas_tag.innerHTML = "";
}
function embaralharArray(meuArray) {
  for (
    var j, x, i = meuArray.length;
    i;
    j = Math.floor(Math.random() * i),
    x = meuArray[--i],
    meuArray[i] = meuArray[j],
    meuArray[j] = x
  );
  return meuArray;
}