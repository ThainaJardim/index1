// Cria um programa que clacula a média 
//das turmas de alunos e envia
// mensagem do cálculo da média.
//Array ou vetores

const alunosDaTurmaA = [
    {
        nome: 'Mayk',
        nota: 9.8
    },
{
    nome: "Diego",
    nota: 10
}, 
 { 
    nome: "Fulano",
    nota: 2
},
]

const alunosDaTurmaB = [
    {
        nome: 'Cleiton',
        nota: 10
    },
{
    nome: "Robson",
    nota: 10
}, 
 { 
    nome: "Siclano",
    nota: 2
},
]
  
function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

}

calculaMedia(alunosDaTurmaA)
calculaMedia(alunosDaTurmaB)

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
//Se a média for maoir que 5, parabenizar a turma
if (media > 5) {
    console.log (`A media da turma ${turma} foi de ${media}. Parabéns`)
 } else {
     console.log (`A media da turma ${turma} é menor que 5`)
     }
 }

 enviaMensagem(media1,'turmaA') //aqui são parâmetros da função
 enviaMensagem(media2,'turmaB')