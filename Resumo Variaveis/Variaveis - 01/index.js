//- Essa é a Aula Número 1 de JavaScript

//Tudo que estiver entre as barras e asteriscos é um comentário!

//Variaveis : São uma Forma de armazenar Dados na Memória do Computador que podem ser acessados ou manipulados posteriormente, independente do tipo de dados, string, números, booleanos, arrays, objetos ou funções

// VAR  - Ele é utilizado Globalmente ( Não recomendo mais o uso do VAR por ser mais antigo e ter alguns problemas de escopo )

// LET - Ele é Gerado para ser utilizado em escopos de blocos ( Recomendado para a maioria dos casos )

// CONST - Ele é utilizado para valores que não irão mudar ( Recomendado para valores que não irão mudar )


//Exemplos de Variaveis

var exemplo = "Essa é um tipo de VAR antiga";
console.log(exemplo);

exemplo = "Essa é uma Variavel que foi alterada";
console.log(exemplo);

let indicado = "Essa é a forma mais indicada de criar variaveis";
console.log(indicado);

indicado = "Essa Variavel foi alterada";
console.log(indicado); 

const naoMuda = "Essa é a forma correta de criar variaveis que não irão mudar";
console.log(naoMuda);