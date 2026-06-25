let alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
let notas = [9, 5, 7, 10, 4];

let destaque = 0;
let estaBom = 0;
let precisaMelhorar = 0;

for (let i = 0; i < alunos.length; i++) {

    let status = notas[i] >= 8
        ? "Destaque"
        : notas[i] >= 6
        ? "Está bom"
        : "Precisa melhorar";

    console.log(alunos[i] + " - Nota: " + notas[i] + " - " + status);

    if (notas[i] >= 8) {
        destaque++;
    } else if (notas[i] >= 6 && notas[i] <= 7) {
        estaBom++;
    } else {
        precisaMelhorar++;
    }
}

console.log("\nResumo da turma:");
console.log("Destaque: " + destaque);
console.log("Está bom: " + estaBom);
console.log("Precisa melhorar: " + precisaMelhorar);