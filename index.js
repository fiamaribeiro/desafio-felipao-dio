// Desafio de Projeto
// Dev: Fiama Ribeiro
// Data: 16/01/2024

// Variáveis para armazenar o nome e a experiência do herói
let nomeHeroi = ["Homem de Ferro", "Dead Pool", "Mulher Maravilha", "Hulk"];
let xpHeroi = [9500, 7000, 5000, 8000];

// Laço de Repetição
for (let i = 0; i < nomeHeroi.length; i++) {
    // Variáveis do herói atual
    let nome = nomeHeroi[i];
    let XP = xpHeroi[i];
    let nivelHeroi;

    // Estrutura de decisão para classificar o nível do herói
    if (XP < 1000) {
        nivelHeroi = "Ferro";
    } else if (XP <= 2000) {
        nivelHeroi = "Bronze";
    } else if (XP <= 5000) {
        nivelHeroi = "Prata";
    } else if (XP <= 7000) {
        nivelHeroi = "Ouro";
    } else if (XP <= 8000) {
        nivelHeroi = "Platina";
    } else if (XP <= 9000) {
        nivelHeroi = "Ascendente";
    } else if (XP <= 10000) {
        nivelHeroi = "Imortal";
    } else {
        nivelHeroi = "Radiante";
    }

    // Saída do resultado
    console.log(`O Herói de nome ${nome} está no nível de ${nivelHeroi}`);
}
