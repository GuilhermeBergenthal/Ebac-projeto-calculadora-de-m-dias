const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Aprovado" />';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Reprovado" />';
 const atividade = [];
 const nota = [];
 const spanAprovado = '<span classs="resultado aprovado">rprovado</span>';
 const spanReprovado = '<span classs="resultado reprovado">reprovado</span>'; 
 const notaMinima = parseFloat(prompt("Digite a nota minima:"));


 


let linhas = '';
form.addEventListener('submit', function(e) {
    e.preventDefault();  
    
    adicionaLinha();
    atualizatabela();
    atualizaMediaFinal();
    
}); 

    function adicionaLinha() {
        const inputNomeAtividade = document.getElementById('nome-atividade');
        const inputNotaAtividade = document.getElementById('nota-atividade');

        if (atividade.includes(inputNomeAtividade.value)){
            alert(`A atividade: ${  inputNomeAtividade.value} já foi inserida`);
        } else {
            atividade.push(inputNomeAtividade.value);
            nota.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
        linha += '</td>';
        linhas += linha;
     
        }
        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }

    function atualizatabela(){  
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
    
    }

    function atualizaMediaFinal(){
             const mediaFinal = calculaMediaFinal();

             document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
             document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
    }

    function calculaMediaFinal(){
        let somaDasNotas = 0;
         
        for (let i = 0; i < nota.length; i++) {
            somaDasNotas += nota[i];   
        }

          return somaDasNotas / nota.length;

    }
    
