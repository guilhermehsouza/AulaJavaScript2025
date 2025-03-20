function exercicio1()
{
    let numero1, resultado1, resultado2;

    numero1 = Number(document.getElementById("numero1").value);    

    resultado1 = numero1 * numero1;
    resultado2 = numero1 ** 3;

    document.getElementById("mensagem").innerHTML = `<p style='color : red'>
        O número digitado foi ${numero1} <br>
        O quadrado do número é:  ${resultado1} <br>
        O cubo do número é: ${resultado2}
        </p>`;
}

function exercicio2()
{
    let numero1, resultado;

    numero1 = Number(document.getElementById("numero1").value);    

    resultado = (numero1 -32) *5/9;

    document.getElementById("mensagem").innerHTML = `<p style='color : magenta'>
        A temperatura em graus Fahrenheit foi ${numero1} <br>
        A temperatura em graus Fahrenheit é ${resultado} 
        </p>`;
}

function exercicio3()
{
    let valor, taxa, tempo, resultado;

    valor = Number(document.getElementById("valor").value);    
    taxa = Number(document.getElementById("taxa").value);    
    tempo = Number(document.getElementById("tempo").value);    

    resultado = valor + (valor * (taxa * taxa / 100) * tempo);

    document.getElementById("mensagem").innerHTML = `<p style='color : blue'>
    <u>Valores informados</u><br>
    Valor = ${valor} <br>
    Taxa = ${taxa} <br>
    Tempo = ${tempo} <br><br>
    <b>O valor atualizado é: ${resultado}</b>
    </p>`;
}

function exercicio4()
{
    let base, altura, resultado;

    base = Number(document.getElementById("base").value);    
    altura = Number(document.getElementById("altura").value);        

    resultado = base * altura / 2

    document.getElementById("mensagem").innerHTML = `<p style='color : green'>
    Base = ${base} <br>
    Altura = ${altura} <br>
    <br>
    <b>A area do triângulo é: ${resultado}</b>
    </p>`;
}

function exercicio5()
{
    let lado, resultado;

    lado = Number(document.getElementById("lado").value);        

    resultado = lado ** 2;

    document.getElementById("mensagem").innerHTML = `<p style='color : rgb(180, 154, 7)'>
    O lado do quadrado é ${lado} <br>
    <br>
    <b>A area do quadrado é: ${resultado}</b>
    </p>`;
}