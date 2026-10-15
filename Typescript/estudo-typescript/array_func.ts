let lista: ((input: string | number) => string)[] = [
  (input) => typeof input === "string" 
           ? `func 0 - Texto: ${input}` 
           : `func 0 - Número: ${input}`,
  (input) => `func 1 - Tipo detectado: ${typeof input}`
]
console.log('Exemplo 1:' )
console.log('Retorna um array de Function ' )
console.log(lista)

console.log(lista[0]("Olá, sou uma string"))
console.log(lista[0](22))
console.log(lista[1](99))

const validacao: (() => boolean | string)[] = [
  () => true,
  () => "Validação pendente"
]

console.log('\nExemplo 2: validação' )
console.log(validacao[0]())
console.log(validacao[1]())

// para rodar no comando de linha execute
// npx tsx array_func.ts