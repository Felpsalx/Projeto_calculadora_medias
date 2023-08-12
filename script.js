const form = document.getElementById('form-atv');
let linhas = ''
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Feliz">'

const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste">'

const atv = []
const notas = []

const spanAprovado = '<span class="resultado aprovado"> Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

const notaMinima = parseFloat( prompt('Digite nota minima'));


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addlinha();
    atualizaTabela();
    atualizaMedia();
   ;
    
});

function addlinha(){
    const inputNomeAtv = document.getElementById('NomeAtv');
    const inputNotaAtv = document.getElementById('NotaAtv');

    if(atv.includes(inputNomeAtv.value)){
        alert(`A atividade ${inputNomeAtv.value} ja foi inserida`)
    }else{
        atv.push(inputNomeAtv.value)
        notas.push(parseFloat(inputNotaAtv.value))
    
        let linha = '<tr>'
        linha += `<td>${inputNomeAtv.value}</td>`
        linha += `<td>${inputNotaAtv.value}</td>`
        linha += `<td>${inputNotaAtv.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`;
        linhas += linha;
    }


    inputNomeAtv.value = '';
    inputNotaAtv.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function atualizaMedia(){
    const mediaFinal = calcMedia();
    document.getElementById('ValorFinal').innerHTML = mediaFinal;
    document.getElementById('Resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    console.log(media)

}

function calcMedia(){
    let somaNota = 0
    for (let i = 0; i<notas.length; i++){
        somaNota += notas[i]
    }

    return somaNota / notas.length;
}