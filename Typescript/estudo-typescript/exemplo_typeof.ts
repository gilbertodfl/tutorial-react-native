/*
Observação: aqui o typeof é usado no contexto de tipos, para extrair o tipo de uma variável existente. 
O tipo tipo_id_nome é inferido como { id: number; nome: string; }. 
Note também que Produto e Pedido foram declarados com typeof tipo_id_nome, então ambos têm exatamente o mesmo tipo de tipo_id_nome. 
Só para demonstração, já que na prática cada um deveria ter sua própria estrutura.
Se quiser, posso gerar uma versão melhorada e atualizada, como fiz com o exemplo anterior, com typeof combinado com keyof, as const e ReturnType.
*/
const tipo_id_nome = {
    id: 1,
    nome: "Gilberto",
};

type Usuario = typeof tipo_id_nome;

const outroUsuario: Usuario = {
    id: 2,
    nome: "Dielen",
};

type Produto = typeof tipo_id_nome;
type Pedido = typeof tipo_id_nome;

console.log(tipo_id_nome);       // { id: 1, nome: "Gilberto" }
console.log(outroUsuario);  // { id: 2, nome: "Dielen }

console.log(tipo_id_nome.nome);       // "Gilberto"
console.log(outroUsuario.nome);  // "Dielen"

const produto: Produto = { id: 10, nome: "Notebook" };
const pedido: Pedido = { id: 100, nome: "Pedido #100" };

console.log(produto);  // { id: 10, nome: "Notebook" }
console.log(pedido);   // { id: 100, nome: "Pedido #100" }

/* saída:
npx tsx exemplo_typeof.ts 

S{ id: 1, nome: 'Gilberto' }
{ id: 2, nome: 'Dielen' }
Gilberto
Dielen
{ id: 10, nome: 'Notebook' }
{ id: 100, nome: 'Pedido #100' }

*/