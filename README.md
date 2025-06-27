# 📱 Sensor de Movimento

Um aplicativo React Native desenvolvido com Expo que controla a lanterna do dispositivo através de toque na tela ou movimento de shake (balançar o dispositivo).

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 🔋 Funcionalidades

- **🔦 Controle da Lanterna**: Liga e desliga a lanterna do dispositivo
- **👆 Toque na Tela**: Toque na tela para alternar o estado da lanterna
- **📳 Sensor de Movimento**: Balance o dispositivo para controlar a lanterna
- **🎨 Interface Dinâmica**: Interface que muda de cor baseada no estado da lanterna
- **📱 Suporte Multiplataforma**: Funciona em iOS e Android

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **TypeScript** - Linguagem de programação
- **react-native-torch** - Controle da lanterna
- **react-native-shake** - Detecção de movimento de shake

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) no seu dispositivo móvel

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/trydavidqix/-Sensor_de-_Movimento.git
cd Sensor
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npx expo start
```

4. Escaneie o QR Code com o aplicativo Expo Go no seu dispositivo

## 📱 Como Usar

1. **Toque na Tela**: Toque em qualquer lugar da tela para ligar/desligar a lanterna
2. **Balance o Dispositivo**: Faça um movimento de shake para alternar o estado da lanterna
3. **Interface Visual**:
   - **Modo Escuro**: Quando a lanterna está desligada
   - **Modo Claro**: Quando a lanterna está ligada

## 🏗️ Estrutura do Projeto

```text
Sensor/
├── src/
│   └── app/
│       └── App.tsx          # Componente principal
├── assets/
│   ├── icons/               # Ícones do aplicativo
│   │   ├── eco-light.png
│   │   ├── eco-light-off.png
│   │   ├── logo-dio.png
│   │   └── logo-dio-white.png
│   └── images/              # Imagens do aplicativo
├── app.json                 # Configurações do Expo
├── package.json             # Dependências do projeto
└── README.md               # Este arquivo
```

## 🔧 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run android` - Executa no emulador Android
- `npm run ios` - Executa no simulador iOS
- `npm run web` - Executa no navegador web
- `npm run lint` - Executa o linter

## 📦 Principais Dependências

- **react-native-torch**: Controle da lanterna do dispositivo
- **react-native-shake**: Detecção de movimento de shake
- **expo-router**: Sistema de roteamento do Expo
- **@expo/vector-icons**: Ícones do Expo

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Author

| [<img src="https://avatars.githubusercontent.com/u/193255351?s=400&u=fc9352baf3193df4491c0a07d9b8a40ea0a82e9f&v=4" width="100" style="border-radius: 50%;"><br><sub>David Macêdo</sub>](https://github.com/trydavidqix) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
| [LinkedIn](https://www.linkedin.com/in/trydavidqix/) |


---

Sinta-se à vontade para contribuir, abrir issues ou sugerir melhorias!