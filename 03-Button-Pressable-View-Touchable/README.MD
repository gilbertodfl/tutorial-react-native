## objetivo: explorar os elementos  Button, Pressableressable e Image

https://reactnative.dev/docs/button

## O que exploramos aqui?
 - SafeAreaView
  - View
  - Text
  - style
  - Button
  - Pressable
  - TouchableOpacity
  - Image

# Criando um projeto básico em React Native

A forma mais simples e recomendada hoje é usar o **Expo**.

## Pré-requisitos

- **Node.js** (versão LTS) instalado. Confira com `node -v`.
- Um editor, como o VS Code.
- Um celular com o app **Expo Go** instalado (Android ou iOS), ou um emulador.

## Passo a passo

### 1. Crie o projeto

```bash
npx create-expo-app@latest meu-app
```

### 2. Entre na pasta

```bash
cd meu-app
```

### 3. Inicie o servidor de desenvolvimento

```bash
npx expo start
```

### 4. Abra o app

- **No celular:** escaneie o QR code que aparece no terminal com o Expo Go (Android) ou com a câmera (iOS). O celular e o computador precisam estar na mesma rede Wi-Fi.
- **No emulador Android:** pressione `a` no terminal (requer o Android Studio configurado).
- **No simulador iOS:** pressione `i` (somente em Mac).
- **No navegador:** pressione `w`.

## Projeto mínimo

O template padrão já vem com navegação e vários arquivos de exemplo. Para começar do zero, use o template em branco:

```bash
npx create-expo-app@latest meu-app --template blank
```

Ele cria um `App.js` simples. Depois, instale a biblioteca de área segura:

```bash
npx expo install react-native-safe-area-context
```

E crie o arquivo `style.js` na mesma pasta do `App.js`.

## Estrutura básica do projeto

```
meu-app/
├── src/app/Home/App.tjs    # componente principal
├── app.json        # configurações do app
├── package.json    # dependências e scripts
├── assets/         # imagens e ícones
└── node_modules/   # bibliotecas instaladas
```

## Observação

Dependendo da versão do template, o arquivo principal pode ser `app/index.tsx` (com Expo Router) em vez de `App.js`. Nesse caso, use o template `blank` indicado acima.


## COMO RODAR O PROJETO
terminal 1: CARREGUE O STUDIO ANDROID
```bash
cd /usr/local/android-studio/bin
/usr/local/android-studio/bin/studio.sh
```
terminal 2: EXECUTE A APLICAÇÃO
```bash

npx expo start

vamos usar a 57:
? Expo Go 57.0.9 is recommended for SDK 57.0.0 (Medium_Phone_API_35-ext15_32GB_-_expo_54.0.7 is using 54.0.7). Learn more. Install the recommended Expo Go version? › (Y/n)
```

# Button vs Pressable vs TouchableOpacity

| Característica | `Button` | `Pressable` | `TouchableOpacity` |
|---|---|---|---|
| **O que é** | Botão nativo pronto, com aparência padrão da plataforma | Componente base e flexível para detectar toques em qualquer elemento | Wrapper que reduz a opacidade do conteúdo ao ser tocado |
| **Personalização visual** | Muito limitada (só `title` e `color`) | Total: aceita qualquer `style` e qualquer filho | Alta: aceita `style` e qualquer filho |
| **Aceita filhos (children)** | Não, apenas texto via `title` | Sim, qualquer componente | Sim, qualquer componente |
| **Feedback ao toque** | Automático, definido pela plataforma (iOS: texto muda de opacidade; Android: efeito ripple) | Você define como quiser (via função em `style`, `android_ripple`, etc.) | Opacidade reduzida automaticamente (`activeOpacity`) |
| **Eventos disponíveis** | `onPress` | `onPress`, `onPressIn`, `onPressOut`, `onLongPress`, `onHoverIn`, `onHoverOut` | `onPress`, `onPressIn`, `onPressOut`, `onLongPress` |
| **Estado "pressionado"** | Não acessível | Sim: `({ pressed }) => ...` | Não acessível (apenas opacidade) |
| **Facilidade de uso** | Muito alta | Média | Alta |
| **Situação atual** | Estável | **Recomendado pela documentação do React Native** | Ainda funciona, mas considerado "legado" |

## Quando usar cada um

| Componente | Use quando... | Vantagem principal |
|---|---|---|
| **`Button`** | Precisa de um botão simples e rápido, protótipos, testes ou telas internas sem design personalizado | Zero configuração e visual nativo consistente com a plataforma |
| **`Pressable`** | Quer botões customizados, feedback visual próprio, detectar long press, ou tornar qualquer componente (cards, imagens, ícones) clicável | Máxima flexibilidade e controle sobre os estados de toque; é a opção moderna e recomendada |
| **`TouchableOpacity`** | Está mantendo código existente ou quer um botão customizado com feedback de opacidade simples, sem escrever lógica extra | Efeito de toque pronto com pouquíssimo código |

## Resumo prático

- **Só precisa de um botão rápido?** → `Button`
- **Quer um botão com a sua cara (cor, borda, ícone)?** → `Pressable`
- **Projeto novo?** → prefira `Pressable`, pois é o padrão atual
- **Código antigo ou efeito de opacidade simples?** → `TouchableOpacity`

## Exemplo rápido de cada um

```tsx

### Pressable com Image

As vezes queremos que a imagem seja clicagem, abaixo segue como fazer. O hitSlop expande o clique, veja que a imagem é 
redonda, mas se clicar em volta, também responde até 20 pixels. 
```
  <Pressable onPress ={ () =>  handlePress('Imagem') } hitSlop={{top:20, bottom:20, left:20, right:20}}>
            <Image
              source={require("../img/gamer.png")}
              style={styles.image}
            />
          </Pressable>
          <Image

```       
## extensões do vscode para cores
Instale 
Material Color -guobing 
Color Highlight -  Hue show better version

code --install-extension naumovs.color-highlight

 ctrl+shift+p e color Picker abre a paletta..