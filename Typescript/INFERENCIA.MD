# Inferência de tipos em TypeScript

## O que é inferência?

**Inferência de tipos** é a capacidade do TypeScript de **descobrir o tipo de uma variável (ou o retorno de uma função) automaticamente**, a partir do valor que ela recebe, sem que você precise escrever o tipo explicitamente.

Ou seja: em vez de escrever `let nome: string = "Millene"`, você pode escrever apenas `let nome = "Millene"` e o TypeScript entende que `nome` é `string`.

> A tipagem continua existindo e sendo checada. Ela só não precisa ser escrita por você.

---

## 1. Inferência em variáveis

```typescript
let nome = "Millene";   // inferido como string
let idade = 10;         // inferido como number
let isLogado = true;    // inferido como boolean

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof isLogado);
```

**Saída:**

```
string
number
boolean
```

### A inferência protege o código

Depois que o tipo é inferido, ele **não pode mudar**:

```typescript
let cidade = "Brasília";
cidade = 123; // ❌ Erro
```

**Erro do TypeScript:**

```
Type 'number' is not assignable to type 'string'.
```

---

## 2. Inferência com `const` (tipo literal)

Com `const`, o valor não muda, então o TypeScript infere o **tipo literal** (o valor exato), e não o tipo genérico.

```typescript
let a = "oi";      // tipo: string
const b = "oi";    // tipo: "oi" (literal)

let c = 42;        // tipo: number
const d = 42;      // tipo: 42 (literal)
```

---

## 3. Inferência no retorno de funções

O TypeScript infere o tipo de retorno olhando para o que a função devolve:

```typescript
function soma(a: number, b: number) {
    return a + b; // retorno inferido como number
}

let resultado = soma(10, 20); // resultado inferido como number

console.log(resultado);
console.log(typeof resultado);
```

**Saída:**

```
30
number
```

---

## 4. Inferência em arrays e objetos

```typescript
let numeros = [1, 2, 3];              // number[]
let nomes = ["Ana", "Bia", "Carlos"]; // string[]
let misto = [1, "dois", true];        // (string | number | boolean)[]

let pessoa = {
    nome: "Millene",  // string
    idade: 10         // number
};

console.log(numeros);
console.log(pessoa.nome);
```

**Saída:**

```
[ 1, 2, 3 ]
Millene
```

```typescript
pessoa.idade = "dez"; // ❌ Erro
```

**Erro do TypeScript:**

```
Type 'string' is not assignable to type 'number'.
```

---

## 5. Quando a inferência NÃO funciona bem

### Variável declarada sem valor

Se você não atribui um valor inicial, o TypeScript infere `any` (perde a proteção):

```typescript
let valor;        // tipo: any
valor = "texto";
valor = 100;      // aceito, sem erros
```

**Correção:** declare o tipo explicitamente.

```typescript
let valor: string;
valor = "texto";
```

### Parâmetros de função

Parâmetros **não são inferidos** automaticamente (a não ser em callbacks). Sem tipo, viram `any` implícito e geram erro com `strict`:

```typescript
function dobro(n) { // ❌ Parameter 'n' implicitly has an 'any' type.
    return n * 2;
}
```

**Correção:**

```typescript
function dobro(n: number) {
    return n * 2;
}
```

---

## 6. Inferência contextual (callbacks)

O TypeScript infere o tipo dos parâmetros de um callback pelo contexto:

```typescript
const numeros = [1, 2, 3];

const dobrados = numeros.map(n => n * 2); // 'n' é inferido como number

console.log(dobrados);
```

**Saída:**

```
[ 2, 4, 6 ]
```

---

## Quando usar tipo explícito ou inferido?

| Situação | Recomendação |
|---|---|
| Variável com valor inicial óbvio | Deixe **inferir** |
| Parâmetros de função | **Sempre explícito** |
| Retorno de função pública / API | Prefira **explícito** (serve como documentação) |
| Variável sem valor inicial | **Explícito** |
| Objetos e arrays complexos | Inferir, ou usar `interface` / `type` |

---

## Resumo

- **Inferência** = o TypeScript deduz o tipo sozinho a partir do valor.
- Menos código escrito, **mesma segurança** de tipos.
- Use `typeof` para conferir em tempo de execução e passe o mouse sobre a variável no editor para ver o tipo inferido.
- Evite deixar variáveis sem valor inicial e parâmetros sem tipo, pois caem em `any`.