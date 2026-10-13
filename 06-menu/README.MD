# Exemplos de React Native

Projeto didático para explorar componentes e recursos comuns de aplicações React Native com Expo. Cada exemplo fica em uma tela própria e pode ser acessado pelo menu inicial.

## O que é explorado

- **Estrutura e navegação do exemplo:** menu de demonstrações, componentes reutilizáveis, propriedades e estado com React.
- **Texto e layout:** `Text`, `View`, `StyleSheet`, espaçamento e composição de telas.
- **Área segura e rolagem:** `SafeAreaView` do `react-native-safe-area-context` e `ScrollView`.
- **Indicadores e janelas:** `ActivityIndicator` e `Modal`.
- **Campos de formulário:** `TextInput` para email, senha, URL, texto multilinha, números e data; teclados apropriados, entrada controlada e formatação.
- **Ícones:** símbolos comuns de interface e ícones vetoriais Ionicons com `@react-native-vector-icons/ionicons`.
- **Imagens:** `ImageBackground` com imagem local e remota, além de opções de ajuste como `cover`.
- **Acessibilidade básica:** rótulos e papéis para controles interativos.

## Telas de exemplo

As telas estão em `src/app/Home/` e são registradas na lista `examples` de `App.tsx`.

| Tela | Arquivo | Conteúdo |
| --- | --- | --- |
| Activity Indicator | `ActivityIndicator.tsx` | Tamanhos, cores e estado de carregamento |
| Modal | `ModalExample.tsx` | Abertura, fechamento e conteúdo de um modal |
| Inputs | `ExemploInput.tsx` | Campos de email, texto, senha, URL, número e data |
| Ícones | `ExemploIcons.tsx` | Símbolos para início, busca, perfil e configurações |
| Ícones vetoriais | `ExemploExpoIcons.tsx` | Ionicons com tamanho e cor configuráveis |
| Imagem de fundo | `ImageBackground.tsx` | Imagens locais e remotas com `ImageBackground` |

## Requisitos

- Node.js compatível com Expo SDK 57 (Node.js 22.13 ou superior).
- npm, instalado junto com o Node.js.
- Expo Go compatível com o SDK do projeto, ou um emulador Android/iOS.

## Como executar

Na pasta do projeto, instale as dependências e inicie o servidor Expo:

```bash
npm install
npx expo start
```

No terminal do Expo:

- Escaneie o QR code com o Expo Go para abrir no celular.
- Pressione `a` para abrir no emulador Android.
- Pressione `i` para abrir no simulador iOS (macOS).
- Pressione `w` para abrir no navegador.

Os comandos `npm run android`, `npm run ios` e `npm run web` também estão disponíveis no `package.json`.

## Estrutura do projeto

```text
.
├── app.json                    # Configuração do Expo
├── index.js                    # Registra o componente raiz
├── package.json                # Dependências e scripts
├── assets/                     # Ícones e recursos da aplicação
└── src/
    ├── app/Home/               # Menu e telas de demonstração
    └── app/img/                # Imagens usadas nos exemplos
```

## Adicionar uma demonstração ao menu

Crie uma tela em `src/app/Home/` que receba a propriedade `onBack`, importe-a em `App.tsx` e adicione uma entrada ao array `examples`, incluindo título, descrição, cor, rótulo de acessibilidade e componente.

```tsx
{
  id: 'novaTela',
  title: 'NOVA DEMONSTRAÇÃO',
  description: 'Descrição curta do exemplo.',
  accessibilityLabel: 'Abrir nova demonstração',
  color: '#665A88',
  component: NovaTela,
}
```
