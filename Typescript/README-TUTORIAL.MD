# Tutorial: utilitários e interfaces no TypeScript

Este tutorial apresenta `Partial`, `Required`, `Readonly`, interfaces, `extends`, `Pick`, `Omit` e `Record` com exemplos práticos.

## `Partial<T>`

`Partial<T>` cria um tipo em que todas as propriedades de `T` são opcionais. É útil quando uma operação, como uma atualização, pode receber apenas alguns campos.

```typescript
type Produto = {
  nome: string;
  preco: number;
  descricao: string;
};

const atualizacao: Partial<Produto> = {
  preco: 29.9
};
```

## `Required<T>`

`Required<T>` torna obrigatórias todas as propriedades de `T`, inclusive aquelas que eram opcionais.

```typescript
type Produto = {
  nome: string;
  preco?: number;
};

const produto: Required<Produto> = {
  nome: "Caderno",
  preco: 19.9
};
```

## Interfaces

Uma `interface` descreve a estrutura que um objeto deve ter. O TypeScript verifica se os objetos usados com essa interface possuem as propriedades esperadas e os tipos corretos.

```typescript
interface Produto {
  nome: string;
  preco: number;
}

const produto: Produto = {
  nome: "Caneta",
  preco: 4.5
};
```

## `Readonly<Produto>`

`Readonly<T>` cria um tipo cujas propriedades não podem ser alteradas depois que o objeto é criado.

```typescript
type Produto = {
  nome: string;
  preco: number;
};

const produto: Readonly<Produto> = {
  nome: "Mochila",
  preco: 120
};

// Erro: a propriedade é somente leitura.
// produto.preco = 150;
```

## `extends`

Em uma interface, `extends` permite criar uma interface baseada em outra. A nova interface herda as propriedades da interface original e pode adicionar outras.

```typescript
interface Produto {
  nome: string;
  preco: number;
}

interface ProdutoEmEstoque extends Produto {
  quantidade: number;
}

const item: ProdutoEmEstoque = {
  nome: "Teclado",
  preco: 150,
  quantidade: 8
};
```

## `Pick<T, K>`

`Pick` cria um tipo selecionando propriedades de outro tipo. Ele recebe dois parâmetros:

- `T`: o tipo de origem (*type*).
- `K`: as chaves (*keys*), ou propriedades, que serão selecionadas. As chaves precisam existir em `T`.

Na prática estou **restringindo** de um modelo maior. Neste caso vou usar só nome e preco do
type Produto.

```typescript
type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
};

type ResumoProduto = Pick<Produto, "nome" | "preco">;

const resumo: ResumoProduto = {
  nome: "Fone",
  preco: 89.9
};
```

## Interface com `Pick`

Uma interface pode estender o tipo criado por `Pick` e **acrescentar** outras propriedades.

```typescript
type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
};

interface ProdutoCard extends Pick<Produto, "nome" | "preco"> {
  emEstoque: boolean;
}

const card: ProdutoCard = {
  nome: "Monitor",
  preco: 899,
  emEstoque: true
};
```

## `Omit<T, K>`

`Omit` cria um tipo **removendo** propriedades de outro tipo. Ele faz o oposto de `Pick`: `Pick` seleciona as propriedades indicadas, enquanto `Omit` exclui as propriedades indicadas.

Ele recebe o tipo de origem `T` e as chaves `K` que serão removidas.

```typescript
type Produto = {
  id: number;
  nome: string;
  preco: number;
};

type NovoProduto = Omit<Produto, "id">;

const novoProduto: NovoProduto = {
  nome: "Mouse",
  preco: 59.9
};
```

## `Record<K, T>`

`Record<K, T>` cria um tipo de objeto cujas chaves são `K` e cujos valores são do tipo `T`.

```typescript
type Categoria = "livros" | "eletronicos" | "papelaria";

const quantidadePorCategoria: Record<Categoria, number> = {
  livros: 12,
  eletronicos: 5,
  papelaria: 20
};
```

Neste exemplo, cada categoria é uma chave obrigatória e seu valor deve ser um número.
