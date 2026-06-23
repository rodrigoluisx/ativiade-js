let idade = 8
let matriculado = true

if (!matriculado){
    console.log ("aluno nao matriculado")
}
else if (idade < 6){
    console.log ("educacao infantil")
}
else if (idade >= 6 || idade <= 10){
    console.log ("ensino fundamental 1")
}
else if (idade >= 11 || idade <= 14 ){
    console.log ("ensino fundamental 2")
}
else if (idade >= 15 || idade <= 17){
    console.log ("ensino medio")
}
else{
    console.log ("ensino superior ou eja")
}