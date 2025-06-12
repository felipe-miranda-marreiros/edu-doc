# eduDOC

> ## Como rodar o projeto

Para iniciar o projeto, instale as dependencias com:

```bash
npm install
```

### Android

```bash
npx expo run:android
```

### IOS

```bash
npx expo run:ios
```

**Obs.: Projeto não funciona com Expo GO. Requer build de desenvolvimento.**

> ## Requisitos

| Ferramentas      | Versão          |
| --------- | ----------------- |
| `Node.Js` | v22.14.0 |
| `Expo`  | SDK 53           |

> ## Como testar as funcionalidades

Projeto usa [Mirage JS](https://miragejs.com/) para interceptar com as conexões feitas com Axios. Para tornar a aplicação mais realista,
foi configurado um delay de 2 segundos. `(./src/shared/mocks/ServerMock.ts)`

> ### Flow inicial:

![Screenshot 2025-06-12 at 00 28 24](https://github.com/user-attachments/assets/e2cb91ad-b682-4fbf-9e4c-f87edf7a81fc)


> ## Credenciais de teste

```bash
matricula: 1256487
password: test123456
```
> ## Screenshots ou vídeos demonstrando o funcionamento

<video src="[https://user-images.githubusercontent.com/aaa.mp4](https://github.com/user-attachments/assets/49d879b2-b27e-450c-bf1e-0a9655e3114b)"></video>

https://github.com/user-attachments/assets/49d879b2-b27e-450c-bf1e-0a9655e3114b

> ## Metodologia e Arquitetura: Feature Slice Design

Feature Slice Design (FSD) é uma metodologia de arquitetura para a construção de aplicações Front-End. Simplificando, é uma compilação de regras e convenções sobre a organização do código. O principal objetivo dessa metodologia é tornar o projeto mais compreensível e estruturado diante das constantes mudanças nos requisitos de negócios.

> ## Feature Slice Design

Este projeto utiliza a metodologia baseada em FSD, o que significa que
separamos as regras de negócios por Features ou Slices.

Esses recursos são autocontidos e desvinculados uns dos outros.
Por exemplo, o Slice(A) não pode se comunicar diretamente com Slice(B). É
uma regra que podemos criar para proteger as regras de negócios, facilitando
a pesquisa, a manutenção e os testes dos desenvolvedores.

> ## Estrutura

Em `./src` teremos:

```txt
├── app - possui rotas com Expo Router
├── entities - possui entidades (Auth, Document, Login)
├── features - possui features (Camera, DocumentPicker, Logout)
├── providers - possui providers (AuthProvider, QueryClientProvider, GestureHandlerRootView)
├── screens - possui todas as telas do aplicativo (LoginScreen)
└── shared - possui tudo aquilo é génerico (componentes, api, storage, utils)
```

Cada pasta pode ser chamada de `camada`. Cada camada possui sua própria regra.

> ## Regras

Definir regras pode tornar o desenvolvimento mais preciso, aumentar a coesão e tornar o projeto menos sujeito a erros. Todos no projeto podem seguir uma regra concisa e ninguém pode quebrá-la.

> ### Overview

![image](https://github.com/user-attachments/assets/47098814-9266-41dc-bbb8-24425469182c)

A camada `entities`, por exemplo, poderá apenas utilizar a camada `shared`, pois entidades são autosuficientes. Agora, podemos olhar outro exemplo como `features`. Ela pode utilizar `shared` e `entities`, pois são lógicas recorrentes no projeto, mas que ainda possuem um certo grau  de autonomia.

> ## Anatomia de um Slice

 Cada `Slice` pode ter esta anatomia:

- Exemplo utilizando o UploadedDocumentListScreen (`./src/screens/UploadedDocumentListScreen`)

```txt
├── screens - telas relacionadass apenas com UploadedDocumentList
├── components - componentes relacionados apenas com UploadedDocumentList
└── api - endpoints relacionados apenas ao UploadedDocumentList
```

> ## Bibliotecas

| Lib     | Versão          |
| --------- | ----------------- |
| `zustand` | 5.0.5 |
| `Expo`  | SDK 53           |
| `nativewind`  | 4.1.23          |
| `expo-file-system`  | 18.1.10          |
| `expo-document-picker`  | 13.1.5          |
| `expo-camera`  | 16.1.8          |
| `@tanstack/react-query`  | 5.80.6         |
| `react-native-webview`  | 13.13.5         |
| `react-native-pdf-renderer`  | 13.13.5         |
| `react-native-mmkv-storage`  | 0.11.2         |
| `react-hook-form`  | 7.57.0         |
| `lz-string`  | 1.5.0         |
| `expo-router`  | 5.0.7         |
| `@likashefqet/react-native-image-zoom`  | 4.3.0        |

> ## Erros conhecidos

- IOS: Ao tentar utilizar a câmera, retorna `No permission handler detected`. 
- Arquivos de upload: os arquivos salvos via upload serão apagados ao remover ou fechar complemente. Os arquivos são salvos apenas no cache temporario, mas podem ser salvos com Expo File System ou utilizando um banco de dados como SQL Lite.
