// Exemplo de uso do operador keyof em TypeScript
// No caso vamos
interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string; // senha deve ser string, não number
}

// keyof: gera a união de todas as chaves da interface
type ChavesUsuario = keyof Usuario; // "id" | "nome" | "email" | "senha"

let chave: ChavesUsuario = "senha";
console.log(chave); // "senha"

// chave = "idade"; // ❌ Erro: "idade" não é uma chave de Usuario

// Excluindo chaves sensíveis
type ChavesPublicas = Exclude<keyof Usuario, "senha">; // "id" | "nome" | "email"

// Função genérica e segura usando keyof
function obterValor<T, K extends keyof T>(objeto: T, chave: K): T[K] {
    return objeto[chave];
}

const usuario: Usuario = {
    id: 1,
    nome: "Maria",
    email: "maria@email.com",
    senha: "123456",
};

const nome = obterValor(usuario, "nome");   // tipo inferido: string
const id = obterValor(usuario, "id");       // tipo inferido: number
// obterValor(usuario, "idade");            // ❌ Erro de compilação

// Exibindo apenas as chaves públicas
// Senha não será exibida, pois não faz parte de ChavesPublicas
function exibirPublico(u: Usuario, campos: ChavesPublicas[]): void {
    campos.forEach((campo) => {
        console.log(`${campo}: ${u[campo]}`);
    });
}

exibirPublico(usuario, ["id", "nome", "email"]);

// Percorrendo as chaves de forma tipada
// Aqui usamos Object.keys, mas com um type assertion para ChavesUsuario[]
// mostra a senha, mas não é recomendável exibir senhas em produção.
(Object.keys(usuario) as ChavesUsuario[]).forEach((k) => {
    console.log(k, usuario[k]);
});
/* Saída esperada:
npx tsx exemplo_keyof.ts 
    senha
    id: 1
    nome: Maria
    email: maria@email.com

    id 1
    nome Maria
    email maria@email.com
    senha 123456

*/

