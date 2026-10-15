
https://www.typescriptlang.org/play/

### Rodando TypeScript na sua máquina

PASSO 01: 
Com o Node já instalado, o único passo extra é instalar o compilador do TypeScript (tsc).

  > node -v

  > npm -v

PASSO 02: crie uma pasta de trabalho
```bash
mkdir estudo-typescript
cd estudo-typescript
npm init -y
```
PASSO 03: Instale o TypeScript
```bash
npm install --save-dev typescript
## conferindo a instalação 
npx tsc -v
```
## Global instalação

Também dá para instalar globalmente
> npm install -g typescript
 
mas instalar por projeto é a prática recomendada.

PASSO 04: Gere o arquivo de configuração
```bash
 npx tsc --init
``` 
O comando acima deve criar um arquivo chamado 

tsconfig.json:
```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true
  }
}
```
| Opção | Para que serve |
|---|---|
| `target` | Versão do JavaScript gerado |
| `rootDir` | Pasta onde ficam seus arquivos `.ts` |
| `outDir` | Pasta onde o `.js` compilado será salvo |
| `strict` | Liga as checagens rígidas de tipos (inclui `strictNullChecks`) |

## como usar
  npm run build   # compila
  npm start       # executa o compilado
  npm run dev     # executa e reexecuta ao salvar
  npm run check   # só verifica os tipos

## testando após a instalação: 
npm install --save-dev tsx
npx tsx src/index.ts

teste.ts - no caso vamos forçar um erro. 
```
"use strict";
x = 10;
console.log(x);
```
### EXECUTANDO: comando de linha
e no comando de linha rode: tsx -> eXecute.
> npx tsx teste.js

### COMPILANDO: Outra forma de testar seria compilar
```bash
npx tsc teste.ts
node teste.js
```

## Array de funções
Exemplo de array de funções, onde todas recebem um string ou number e devolvem uma string.: 
```typescript
let lista: ((input: string | number) => string)[] = [
  (input) => typeof input === "string" 
           ? `Texto: ${input}` 
           : `Número: ${input}`,
  (input) => `Tipo detectado: ${typeof input}`
]

console.log(lista[0]("Olá"))
console.log(lista[1](99))

const validacao: (() => boolean | string)[] = [
  () => true,
  () => "Validação pendente"
]

console.log(validacao[0]())
console.log(validacao[1]())

```
saída:
```bash
Texto: Olá
Tipo detectado: number
true
Validação pendente
```

### Exemplos de teste primitivos:
veja que em soma como string "10" ele acusa um erro. 
```typescript
let nome: string = "Eu sou um string";
let idade: number = 10;
let isLoggin: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;

console.log(nome);
console.log(idade);
console.log(isLoggin);
console.log(nulo)
console.log(indefinido);

function soma(a: number, b: number): number {
    return a + b;
}

let resultado: number = soma("10", 20);
console.log(resultado + " Resultado");
```

# Tipos primitivos em TypeScript

## 1. `string`
Texto.

```typescript
let nome: string = "Millene";
let saudacao: string = `Olá, ${nome}!`; // template string
```

## 2. `number`
Inteiros e decimais (não há tipos separados).

```typescript
let idade: number = 25;
let preco: number = 19.99;
let hex: number = 0xff;
let negativo: number = -10;
```

## 3. `boolean`
Verdadeiro ou falso.

```typescript
let isLogado: boolean = true;
let temPermissao: boolean = false;
```

## 4. `null`
Ausência intencional de valor.

```typescript
let nulo: null = null;
```

## 5. `undefined`
Variável declarada, mas sem valor atribuído.

```typescript
let indefinido: undefined = undefined;
```

## 6. `bigint`
Números inteiros muito grandes (precisa do sufixo `n`).

```typescript
let grande: bigint = 9007199254740993n;
let outro: bigint = BigInt(100);
```

## 7. `symbol`
Valor único e imutável, muito usado como chave de objeto.

```typescript
let id1: symbol = Symbol("id");
let id2: symbol = Symbol("id");

console.log(id1 === id2); // false (cada symbol é único)
```

## Exemplo juntando todos

```typescript
let nome: string = "Millene";
let idade: number = 10;
let isLoggin: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;
let grande: bigint = 123n;
let unico: symbol = Symbol("chave");

console.log(typeof nome);        // "string"
console.log(typeof idade);       // "number"
console.log(typeof isLoggin);    // "boolean"
console.log(typeof nulo);        // "object" (curiosidade histórica do JS)
console.log(typeof indefinido);  // "undefined"
console.log(typeof grande);      // "bigint"
console.log(typeof unico);       // "symbol"
```

## Tipos especiais (não são primitivos, mas aparecem junto)

| Tipo      | Uso                                                      |
|-----------|----------------------------------------------------------|
| `any`     | Desativa a checagem de tipos (evite)                     |
| `unknown` | Como `any`, mas exige verificação antes de usar          |
| `void`    | Função que não retorna nada                              |
| `never`   | Função que nunca retorna (ex.: lança erro)               |

```typescript
function logar(msg: string): void {
    console.log(msg);
}

function erro(msg: string): never {
    throw new Error(msg);
}
```

> **Dica:** com `strictNullChecks` ativado no `tsconfig.json`, `null` e `undefined` só podem ser atribuídos a variáveis que os declarem explicitamente, por exemplo: `let valor: string | null = null;`.


# use strict
O que é "use strict"?

É uma diretiva do JavaScript que ativa o modo estrito (strict mode). Nesse modo, o JavaScript fica mais rigoroso: erros que antes passavam em silêncio passam a lançar exceções, e algumas práticas perigosas ficam proibidas.

Foi introduzido no ES5 (2009). Para funcionar, precisa estar no início do arquivo ou da função.
```
"use strict";
function soma(a, b) {
    return a + b;
}
let resultado = soma(10, 20);
console.log(resultado);

```