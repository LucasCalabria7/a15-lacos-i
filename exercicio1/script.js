let pergunta = prompt("Você deseja mais coxinhas ?").toUpperCase();

let conta = 0;

while(pergunta === "SIM" || pergunta === "S"){
    conta += 2.50
    pergunta = prompt("Você deseja mais coxinhas ?").toUpperCase()
};

console.log(`Sua conta foi : ${conta}`);