var categoria = [["BRASIL","BELGICA","PANAMA","MEXICO","ESTADOSUNIDOS","INGLATERRA","FRANÇA","ALEMANHA","PORTUGAL","ESPANHA","ITALIA","NORUEGA","CHILE","ARGENTINA","PERU","AUSTRALIA","EGITO","MARROCOS","TURQUIA","IRLANADA","IRAQUE","ISRAEL","CHINA","CANADA","DINAMARCA","ESCOCIA"],
                 ["MAÇÃ","BANANA","QUIABO","LARANJA","MARACUJÁ","ACEROLA","GOIABA","GRAVIOLA","UVA","MAMÃO","LIMÃO","MANGA","TOMATE","PERA","MELÃO","MORANGO"]];
var sorteio_categoria = Math.floor(Math.random()*categoria.length);           

var categoria_nome;

if(sorteio_categoria==0){
        var categoria_nome = "PAÍSES"
} else if(sorteio_categoria==1){
        var categoria_nome = "FRUTAS"
}
var categoria_sorteada = categoria[sorteio_categoria]

function change(){
        document.getElementById("categoria").innerHTML = `A categoria da sua palavra é: ${categoria_nome}`
}

function mudar_imagem(){
        var i = document.getElementById("photo").src;
        for(let j = 0;j<6;j++){
                if(i[122]==j){
                        document.getElementById("photo").src =  `stickman por partes/${j+1}.jpg`     
                }
        }
        if(i[122]==5){
                alert("vc perdeu")
        }
}

function teste_de_letra(){
        var letra_do_user;
        letra_do_user = x;

}