const input =require ("readline-sync");
let nota1 = parseFloat(input.question("digite a primeira nota : "));
let nota2 = parseFloat(input.question("digite  a segunda nota : "));
let media = (nota1 + nota2)/2;
if(media >=7){
    console.log(" aluno aprovado :");
}else{
console.log("reprovado");}
    