# 🌦️ Weather App (React Native + TypeScript)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React Native](https://img.shields.io/badge/React_Native-v0.76-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.3-3178C6)

Uma aplicação móvel robusta para consulta de previsão do tempo, construída com foco em **Clean Architecture**, **SOLID Principles** e **Type Safety**.

O projeto consome a API da OpenWeatherMap para fornecer dados climáticos em tempo real, com uma interface que se adapta visualmente às condições do tempo (Sol, Chuva, Neve, etc.).

## 📱 Screenshots

## 🚀 Tecnologias e Ferramentas

- **React Native (Expo):** Framework principal.
- **TypeScript:** Para tipagem estática e segurança de código.
- **Expo Vector Icons:** Ícones vetoriais dinâmicos.
- **Fetch API:** Consumo de dados assíncrono.
- **Clean Architecture:** Separação clara de responsabilidades.

## 🏗️ Estrutura do Projeto

O projeto segue uma arquitetura modular para facilitar a manutenção e escalabilidade:

```bash
src/
├── config/         # Configurações globais e variáveis de ambiente
├── services/       # Camada de comunicação com APIs externas (Data Fetching)
├── styles/         # Estilização centralizada (Separation of Concerns)
├── types/          # Interfaces e Tipos TypeScript (Contratos de dados)
└── utils/          # Lógica pura e helpers (ex: formatação de clima)
🛠️ Pré-requisitos
Node.js instalado.

Gerenciador de pacotes (NPM ou Yarn).

Aplicativo Expo Go no celular (ou emulador Android/iOS).

🔧 Instalação e Configuração
Clone o repositório

Bash

git clone https://github.com/Zacksyg/Weather_App/
cd weather-app-react-native
Instale as dependências

Bash

npm install
# ou
yarn install
Configuração da API Key Por questões de segurança, a chave da API não é versionada.

Crie um arquivo chamado env.ts dentro da pasta src/config/.

Use o arquivo src/config/env.example.ts como base:

TypeScript

// src/config/env.ts
export const ENV = {
  API_KEY: 'SUA_CHAVE_DA_OPENWEATHER_AQUI',
  BASE_URL: '[https://api.openweathermap.org/data/2.5/weather](https://api.openweathermap.org/data/2.5/weather)',
};
Você pode obter uma chave gratuita em OpenWeatherMap.

▶️ Como Rodar
Execute o servidor de desenvolvimento:

Bash

npx expo start
Para rodar no celular físico: Escaneie o QR Code exibido no terminal com o app Expo Go.

Para rodar no Emulador: Pressione a (Android) ou i (iOS) no terminal.

📚 Aprendizados e Práticas Aplicadas
Single Responsibility Principle (SRP): A lógica de UI está separada da lógica de negócios (Services) e da lógica visual (Utils).

Tratamento de Erros: Blocos try/catch/finally robustos para garantir que a UI nunca trave em caso de falha de rede.

Tipagem Estrita: Uso de Interfaces para moldar a resposta da API, prevenindo erros de leitura de propriedades inexistentes (undefined).

UX Dinâmica: Feedback visual (ícones e cores) que reage ao estado dos dados recebidos.s
