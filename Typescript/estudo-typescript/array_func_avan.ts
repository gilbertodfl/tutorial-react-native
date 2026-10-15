// aqui temos um exemplo de array de funções, onde cada função recebe um valor e retorna uma string formatada.
// não se preocupe se não entender tudo de uma vez, vamos explicar passo a passo.
//  este é um exemplo mais avançado de array de funções, onde cada função recebe um valor e retorna uma string formatada.

// explicando parte 1: 
//  Aqui temos um array chamado "formatadores" que contém funções que formatam valores de entrada.
//  Cada função recebe um valor (string ou número) e retorna uma string formatada 
// de acordo com a lógica definida na função. 
console.log( ' ---------- Parte 1: formatadores ----------')
// ---------- Parte 1: formatadores ----------
type Formatador = (valor: string | number) => string;

const formatadores: Formatador[] = [
  (valor) => `Formatador - Valor: ${valor}`,
  (valor) => typeof valor === "string" ? 'Formatador - ' + valor.toUpperCase() : 'Formatador - ' + valor.toFixed(2),
  (valor) => `Formatador - Tipo: ${typeof valor}`,
];

const entradas: (string | number)[] = ["typescript", 3.14159];
// esse primeiro for percorre o array de entradas. Neste caso na primeira passada pega o valor "typescript" 
// e na segunda passada pega o valor 3.14159
for (const entrada of entradas) {
  console.log(`Entrada: ${entrada}`);
  // esse segundo for percorre o array de formatadores. Neste caso na primeira passada pega a primeira função do array
  // e na segunda passada pega a segunda função do array e assim por diante.
  for (const formatar of formatadores) {
    console.log("  ", formatar(entrada));
  }
}

console.log( ' ---------- Parte 2: validações ----------')
// explicando parte 2: 
// Aqui temos um array chamado "validacoes" que contém funções que validam uma senha.
// Cada função recebe uma senha (string) e retorna um booleano ou uma mensagem de erro.
// Caso o resultado seja uma string, significa que a validação falhou e a mensagem de erro será exibida.
// ---------- Parte 2: validações ----------
type Validacao = (senha: string) => boolean | string;

const validacoes: Validacao[] = [
  // Abaixo vai sempre retornar um true ou uma string com a mensagem de erro, caso a validação falhe.  
  (senha) => senha.length >= 8 || "Mínimo de 8 caracteres",
  (senha) => /[0-9]/.test(senha) || "Precisa ter um número",
  (senha) => /[A-Z]/.test(senha) || "Precisa ter letra maiúscula",
];

function validar(senha: string): string[] {
  const erros: string[] = [];
  for (const regra of validacoes) {
    const resultado = regra(senha);
    if (typeof resultado === "string") {
        // se retornou string, tem erro, então adicone no array de erros para o retorno da função validar
        // no caso vai retornar todos os erros. 
      erros.push(resultado);
    }
  }
  return erros;
}

function testar(senha: string): void {
  const erros = validar(senha);
  console.log(
    erros.length === 0
      ? `"${senha}" -> válida`
      : `"${senha}" -> ${erros.join(" | ")}`
  );
}

console.log("\n--- Validações ---");
testar("abc");
testar("abcdefgh");
testar("Senha1234");
/* saída esperada:
 npx tsx array_func_avan.ts 
 ---------- Parte 1: formatadores ----------
Entrada: typescript
   Formatador - Valor: typescript
   Formatador - TYPESCRIPT
   Formatador - Tipo: string
Entrada: 3.14159
   Formatador - Valor: 3.14159
   Formatador - 3.14
   Formatador - Tipo: number
 ---------- Parte 2: validações ----------

--- Validações ---
"abc" -> Mínimo de 8 caracteres | Precisa ter um número | Precisa ter letra maiúscula
"abcdefgh" -> Precisa ter um número | Precisa ter letra maiúscula
"Senha1234" -> válida
*/