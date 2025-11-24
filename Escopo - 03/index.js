/* escopo:

Determina quais são os dados que podem ser acessados em determinadas partes do código */ 

// Exemplo 1: escopo global

let Exemplo = "exemplo de escopo global";
console.log(Exemplo); // pode ser acessado em qualquer parte do código


// Exemplo 2: escopo local

{
    let exemploLocal = "Exemplo de escopo local";
    console.log(exemploLocal); //se usado fora vai gerar erro
}

// O USO INDEVIDO DO VAR

//* O var não respeita o escopo de bloco, podendo gerar problemas no código. Pois ele acessa
// de Qualquer lugar a Variavel independente se usa escopo ou não.  */

