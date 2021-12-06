let email = document.getElementById('email');
let nome = document.getElementById('nomeAluno');

let pontuacaoFinal1 = document.querySelector('div#um > p#totPontos');
let pontuacaoFinal2 = document.querySelector('div#quatro > p#totalPontos');
let I = document.getElementsByName('I');
let II = document.getElementsByName('II');
let III = document.getElementsByName('III');
let IV = document.getElementsByName('IV');
let resposta1;
let resposta2;
let resposta3;
let resposta4;
let totalDePontos = 0;
let enviada = false;


let q1a1 = document.getElementById('q1a1'); // question1 alternative 1
let q1a2 = document.getElementById('q1a2'); // question1 alternative 2
let q1a3 = document.getElementById('q1a3'); // question1 alternative 3
let q1a4 = document.getElementById('q1a4'); // question1 alternative 4
let q1a5 = document.getElementById('q1a5'); // question1 alternative 5

let q2a1 = document.getElementById('q2a1'); // question2 alternative 1
let q2a2 = document.getElementById('q2a2'); // question2 alternative 2

let q3a1 = document.getElementById('q3a1'); // question3 alternative 1
let q3a2 = document.getElementById('q3a2'); // question3 alternative 2
let q3a3 = document.getElementById('q3a3'); // question3 alternative 3
let q3a4 = document.getElementById('q3a4'); // question3 alternative 4
let q3a5 = document.getElementById('q3a5'); // question3 alternative 5


let q4a1 = document.getElementById('q4a1'); // question4 alternative 1
let q4a2 = document.getElementById('q4a2'); // question4 alternative 2
let q4a3 = document.getElementById('q4a3'); // question4 alternative 3
let q4a4 = document.getElementById('q4a4'); // question4 alternative 4
let q4a5 = document.getElementById('q4a5'); // question4 alternative 5



let errada1 = document.getElementById('errada1'); //q1
let errada2 = document.getElementById('errada2'); //q2
let errada3 = document.getElementById('errada3'); //q3
let errada4 = document.getElementById('errada4'); //q4


let resCerta1 = document.createElement('p');
let resCerta2 = document.createElement('p');
let resCerta3 = document.createElement('p');
let resCerta4 = document.createElement('p');



function enviar(){
    if(enviada) {
        alert('Este formulário já foi enviado');
    } else if(email.value.length == 0){
        alert('Preencha os campos de nome e email!');
    } else if(nome.value.length == 0) {
        alert('Preencha os campos de nome e email!');  
    } else {  
    enviada = true;
    correcaoResposta1();
    correcaoResposta2();
    correcaoResposta3();
    correcaoResposta4();

    alert('Formulário enviado com sucesso!');

    pontuacaoFinal1.innerHTML = `${totalDePontos}/10`;
    pontuacaoFinal2.innerHTML = `${totalDePontos} de 10 pontos`;

    
    }

}

function correcaoResposta1(){
    if(I[0].checked){
        resposta1 = 42;
        q1a1.innerHTML += `&#x274C`;
        q1a1.style.padding = '5px';
        q1a1.style.backgroundColor = '#fca0a0';
        resCerta1.innerHTML = '<br>';
        resCerta1.innerHTML += '<br>';
        resCerta1.style.marginLeft = '30px'
        resCerta1.innerHTML += ` A resposta correta é <mark style = background-color:#b2f8b2;>46</mark>.`;
        errada1.appendChild(resCerta1);
    } else if(I[1].checked){
        resposta1 = 43;
        q1a2.innerHTML += `&#x274C`;
        q1a2.style.padding = '5px';
        q1a2.style.backgroundColor = '#fca0a0';
        resCerta1.innerHTML = '<br>';
        resCerta1.innerHTML += '<br>';
        resCerta1.style.marginLeft = '30px'
        resCerta1.innerHTML += ` A resposta correta é <mark style = background-color:#b2f8b2;>46</mark>.`;
        errada1.appendChild(resCerta1);
    } else if(I[2].checked){
        resposta1 = 44;
        q1a3.innerHTML += `&#x274C`;
        q1a3.style.padding = '5px';
        q1a3.style.backgroundColor = '#fca0a0';
        resCerta1.innerHTML = '<br>';
        resCerta1.innerHTML += '<br>';
        resCerta1.style.marginLeft = '30px'
        resCerta1.innerHTML += ` A resposta correta é <mark style = background-color:#b2f8b2;>46</mark>.`;
        errada1.appendChild(resCerta1);
    } else if(I[3].checked){
        resposta1 = 45
        q1a4.innerHTML += `&#x274C`;
        q1a4.style.padding = '5px';
        q1a4.style.backgroundColor = '#fca0a0';
        resCerta1.innerHTML = '<br>';
        resCerta1.innerHTML += '<br>';
        resCerta1.style.marginLeft = '30px'
        resCerta1.innerHTML += ` A resposta correta é <mark style = background-color:#b2f8b2;>46</mark>.`;
        errada1.appendChild(resCerta1);
    } else if(I[4].checked){
        resposta1 = 46
        totalDePontos += 3;
        q1a5.innerHTML += `&#x2714;`;
        q1a5.style.padding = '5px';
        q1a5.style.backgroundColor = '#b2f8b2';
    }
}     

function correcaoResposta2(){
    if(II[0].checked){
        resposta2 = true;
        totalDePontos+= 1;
        q2a1.innerHTML += `&#x2714;`;
        q2a1.style.padding = '5px';
        q2a1.style.backgroundColor = '#b2f8b2';
    } else if(II[1].checked) {
        resposta2 = false;
        q2a2.innerHTML += `&#x274C`;
        q2a2.style.padding = '5px';
        q2a2.style.backgroundColor = '#fca0a0';
        resCerta2.innerHTML = '<br>';
        resCerta2.innerHTML += '<br>';
        resCerta2.style.marginLeft = '30px'
        resCerta2.innerHTML += ` A resposta correta é <mark style = background-color:#b2f8b2;>VERDADEIRO</mark>.`;
        errada2.appendChild(resCerta2);
    }
}

function correcaoResposta3(){
    if(III[0].checked){
        resposta3 = '1A';
        q3a1.innerHTML += `&#x274C`;
        q3a1.style.padding = '5px';
        q3a1.style.backgroundColor = '#fca0a0';
        resCerta3.innerHTML = '<br>';
        resCerta3.innerHTML += '<br>';
        resCerta3.style.marginLeft = '30px'
        resCerta3.innerHTML += ` A resposta correta é <mark style = background-color:#b2f8b2;>3C</mark>.`;
        errada3.appendChild(resCerta3);
    } else if(III[1].checked){
        resposta3 = '2B';
        q3a2.innerHTML += `&#x274C`;
        q3a2.style.padding = '5px';
        q3a2.style.backgroundColor = '#fca0a0';
        resCerta3.innerHTML = '<br>';
        resCerta3.innerHTML += '<br>';
        resCerta3.style.marginLeft = '30px'
        resCerta3.innerHTML += ` A resposta correta é <mark style = background-color:#b2f8b2;>3C</mark>.`;
        errada3.appendChild(resCerta3);
    } else if(III[2].checked){
        resposta3 = '3C';
        totalDePontos+= 3;
        q3a3.innerHTML += `&#x2714;`;
        q3a3.style.padding = '5px';
        q3a3.style.backgroundColor = '#b2f8b2';
    } else if(III[3].checked){
        resposta3 = '3D';
        q3a4.innerHTML += `&#x274C`;
        q3a4.style.padding = '5px';
        q3a4.style.backgroundColor = '#fca0a0';
        resCerta3.innerHTML = '<br>';
        resCerta3.innerHTML += '<br>';
        resCerta3.style.marginLeft = '30px'
        resCerta3.innerHTML += ` A resposta correta é <mark style = background-color:#b2f8b2;>3C</mark>.`;
        errada3.appendChild(resCerta3);
    } else if(III[4].checked){
        resposta3 = '360';
        q3a5.innerHTML += `&#x274C`;
        q3a5.style.padding = '5px';
        q3a5.style.backgroundColor = '#fca0a0';
        resCerta3.innerHTML = '<br>';
        resCerta3.innerHTML += '<br>';
        resCerta3.style.marginLeft = '30px'
        resCerta3.innerHTML += ` A resposta correta é <mark style = background-color:#b2f8b2;>3C</mark>.`;
        errada3.appendChild(resCerta3);
    }
}  


function correcaoResposta4(){
    if(IV[0].checked){
        resposta4 = 22;
        q4a1.innerHTML += `&#x274C`;
        q4a1.style.padding = '5px';
        q4a1.style.backgroundColor = '#fca0a0';
        resCerta4.innerHTML = '<br>';
        resCerta4.innerHTML += '<br>';
        resCerta4.style.marginLeft = '30px'
        resCerta4.innerHTML += ` A resposta correta é <mark style = background-color:#b2f8b2;>-22</mark>.`;
        errada4.appendChild(resCerta4);
    } else if(IV[1].checked){
        resposta4 = -22;
        totalDePontos+=3;
        q4a2.innerHTML += `&#x2714;`;
        q4a2.style.padding = '5px';
        q4a2.style.backgroundColor = '#b2f8b2';
    } else if(IV[2].checked){
        resposta4 = 80;
        q4a3.innerHTML += `&#x274C`;
        q4a3.style.padding = '5px';
        q4a3.style.backgroundColor = '#fca0a0';
        resCerta4.innerHTML = '<br>';
        resCerta4.innerHTML += '<br>';
        resCerta4.style.marginLeft = '30px'
        resCerta4.innerHTML += ` A resposta correta é <mark style = background-color:#b2f8b2;>-22</mark>.`;
        errada4.appendChild(resCerta4);
    } else if(IV[3].checked){
        resposta4 = 0.12354;
        q4a4.innerHTML += `&#x274C`;
        q4a4.style.padding = '5px';
        q4a4.style.backgroundColor = '#fca0a0';
        resCerta4.innerHTML = '<br>';
        resCerta4.innerHTML += '<br>';
        resCerta4.style.marginLeft = '30px'
        resCerta4.innerHTML += ` A resposta correta é <mark style = background-color:#b2f8b2;>-22</mark>.`;
        errada4.appendChild(resCerta4);
    } else if(IV[4].checked){
        resposta4 = 'Nenhuma das alternativas';
        q4a5.innerHTML += `&#x274C`;
        q4a5.style.padding = '5px';
        q4a5.style.backgroundColor = '#fca0a0';
        resCerta4.innerHTML = '<br>';
        resCerta4.innerHTML += '<br>';
        resCerta4.style.marginLeft = '30px'
        resCerta4.innerHTML += ` A resposta correta é <mark style = background-color:#b2f8b2;>-22</mark>.`;
        errada4.appendChild(resCerta4);
    }
}  