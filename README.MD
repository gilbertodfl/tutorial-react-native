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
├── App.js          # componente principal
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