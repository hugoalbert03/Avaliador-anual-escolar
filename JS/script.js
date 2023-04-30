var nome = window.prompt("Digite o seu nome:");
var nMat = document.querySelector("input#mt");
let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let b4 = document.querySelector("#b4");
let msg = document.querySelector("#msg")
let msg2 = document.querySelector("#msg2")
let msg3 = document.querySelector("#msg3")
let imag = document.querySelector("img#img_res")
while(!nome){
    window.alert("Você não respondeu minha pergunta!")
    nome = prompt("Digite seu nome:")
}
if(nome.length > 0){
    window.alert(`Seja bem-vindo ${nome}!`)
}

function calcNotas(){
    var res = Number(b1.value) + Number(b2.value) + Number(b3.value) + Number(b4.value)
    if(String(b1.value).length == false || String(b2.value).length == false || String(b3.value).length == false || String(b4.value).length == false){
        var n = undefined
     if(String(b1.value).length == false){
        n = 1
     }else if (String(b2.value).length == false){ 
        n = 2
     }else if (String(b3.value).length == false){
        n = 3
     }else if (String(b4.value).length == false){
        n = 4
     }
        var simbol = `${n}º Bimestre`
        window.alert(`Digite sua resposta em ${simbol}`)
        
    }else if(Number(b1.value) > 10 || Number(b2.value) > 10 || Number(b3.value) > 10 || Number(b4.value) > 10){
        var vbim = [b1,b2,b3,b4]
        var val = undefined
        if(vbim[0].value > 10){
            val = 1
        }else if(vbim[1].value > 10){
            val = 2
        }else if (vbim[2].value > 10){
            val = 3
        }else if (vbim[3].value > 10){
            val = 4
        }
        var val_res = `${val}º Bimestre`
        window.alert(`Numeração excedida no ${val_res}`)
    }else if(String(nMat.value).length <= 4){
        window.alert(`Desculpe ${nome}, mas os numeros de caracteres para a matéria estão vazios ou  insuficiente para a autenticação!`)
    }else{
        
        var plu_p = undefined
        if(res > 1){
            plu_p = "pontos"
        }else{
            plu_p = "ponto"
        }
        msg.innerHTML = `${nome}, sua nota em ${String(nMat.value)} é de ${res.toFixed(1).replace('.',',')} ${plu_p}.`
        var ap = undefined   
        if (res >= 20){
            ap = '<strong style="color:green;">aprovado</strong>'
            imag.src="/img/aprovado.jpg"
            imag.style="border:dashed 3px green"
            document.querySelector(".cont-content").style="background:#c9ff73; color:black;"
        }else if(res >= 15){
            ap = "<strong style='color:#ff7700'>em recuperação</strong>"
            imag.src="/img/recuperação.jpg"
            var nmb = 20
            var rest = nmb - res
            msg3.innerHTML = `Faltam ${rest.toFixed(1).replace('.',',')} pontos para passar de ano!`
            imag.style="border:3px dashed #ffb300"
            document.querySelector(".cont-content").style="background:#ffcc4a; color:black;"
        }else{        
            imag.src="/img/reprovado.jpg"
            imag.style="border:3px dashed red"
            document.querySelector(".cont-content").style="background:#ff7e73; color:white; text-shadow:1px 1px 2px black;"
            ap = "<strong style='color:red; text-shadow:none;'>reprovado</strong>"
        }
        
       
        msg2.innerHTML = `Você está ${ap}`

        
    }
}

function resNotas(){
    msg.innerHTML = `Não há nenhum resultado no momento`
    msg2.innerHTML = ""
    msg3.innerHTML = ""
    imag.style = "border:none;"
    imag.src = "/img/pexels-olya-kobruseva-5428826.jpg"
    document.querySelector(".cont-content").style="background-color:none;"
}

function t_user(){
    nome = window.prompt("Digite outro nome:")
    while(!nome){
        window.alert("Você não respondeu minha pergunta!")
        nome = prompt("Digite seu nome:")
    }
    msg.innerHTML = `Não há nenhum resultado no momento`
    msg2.innerHTML = ""
    msg3.innerHTML = ""
    imag.style = "border:none;"
    imag.src = "/img/pexels-olya-kobruseva-5428826.jpg"
    document.querySelector(".cont-content").style="background-color:none;"
}