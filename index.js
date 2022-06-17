const elementResposta = document.querySelector('#resposta')
const inputSim = document.querySelector('#inputSim')
const buttonResposta = document.querySelector('#buttonResposta')
const respostas = [
  'Hoje será um grande dia!',
  'O seu dia será incrível!',
  'Hoje não me parece um dia bom...',
  'Prefiro não comentar...',
  'Nem bom e nem ruim.',
  'Se prepare porque hoje será um dia longo.',
  'Antes de sair de casa respire fundo... você vai precisar.',
  'Hoje será OK.',
  'Tudo aponta que será um ótimo dia.',
  'Hoje é seu dia de sorte!',
  'Sinto muito em te dizer isso mas... hoje será um dia daqueles.',
  'Coloque um sorriso no rosto, hoje é seu dia de sorte.',
  'Melhor não te dizer agora.'
]

function fazerPergunta() {
  if (inputSim.value != 'Sim, eu quero') {
    alert('Desculpe, você não seguiu minha condição, não posso te ajudar')
    return
  }

  buttonResposta.setAttribute('disabled', true)

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementResposta.innerHTML = respostas[numeroAleatorio]
  elementResposta.style.opacity = 1

  setTimeout(function () {
    elementResposta.style.opacity = 0
    buttonResposta.removeAttribute('disabled')
  }, 3000)
}
