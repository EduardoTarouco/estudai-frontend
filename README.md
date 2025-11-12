# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```
   or
   ```bash
   npx start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

---

# Git Flow – Guia de Uso

Este projeto segue o modelo de versionamento **Git Flow** para organizar o desenvolvimento de forma clara, previsível e colaborativa.

## O que é Git Flow?

Git Flow é uma estratégia de ramificação que define um fluxo de trabalho padronizado, separando desenvolvimento, produção e funcionalidades.

### Estrutura de branches:

- `main`: contém o código em produção (estável).
- `dev`: branch de integração para desenvolvimento.
- `feature/*`: novas funcionalidades.
- `release/*`: preparação para novos lançamentos.
- `hotfix/*`: correções críticas em produção.

---

## Configurando Git Flow

Instale o Git Flow no seu ambiente:

### Linux / Ubuntu:

```bash
sudo apt install git-flow
```

### MacOS (com Homebrew):

```bash
brew install git-flow
```

### Windows:
- Recomendado: [Git for windows](https://gitforwindows.org/)
- Ou use um cliente como [Sourcetree](https://www.sourcetreeapp.com/)

Inicie o Git Flow no seu repositório local:

```bash
git flow init
```

Aceite os nomes padrão das branches (main, dev, etc.) pressionando ```Enter``` nas opções sugeridas.

## Criando novas funcionalidades

```bash
git flow feature start nome-da-feature
```
> Isso cria e muda para a branch feature/nome-da-feature.

Quando terminar a funcionalidade:
```bash
git flow feature finish nome-da-feature
```
> Isso faz merge da feature em develop e apaga a branch local.

## Criando uma nova release

Use quando quiser preparar uma nova versão para produção:

```bash
git flow release start 1.0.0
```
Finalize a release após os testes:

```bash
git flow release finish 1.0.0
```
> Isso faz merge em main e develop, cria uma tag com a versão e apaga a branch local.


## Corrigindo bugs urgentes (hotfix)
Quando precisar corrigir algo direto na produção:

```bash
git flow hotfix start nome-da-correção
```
Finalize assim que corrigido:

```bash
git flow hotfix finish nome-da-correção
```
> Isso faz merge direto em main e develop, e cria uma tag da correção.
