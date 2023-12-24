// Sty.js
import { StyleSheet } from "react-native";

//#region inicio da estilização da tela de menu  
export const stylesMenu = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#209A57',
    padding: 20,
  },
  texto: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'white', // Adicionado para garantir que o texto seja branco
    marginBottom: 20,
  },
  botao: {
    fontSize: 18, // Ajustado o tamanho da fonte
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: '#2A784D',
    borderRadius: 8,
    paddingVertical: 15,
  },
  botaoTexto: {
    fontSize: 16, // Ajustado o tamanho da fonte
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', // Adicionado para centralizar o texto
  },
  header: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    width: 'auto',
    padding: 20, // Ajustado o padding
  },
  picker: {
    fontSize: 18, // Ajustado o tamanho da fonte
    height: 50,
    backgroundColor: '#2A784D',
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 10, // Ajustado o padding horizontal
    color: 'white', // Adicionado para garantir que o texto seja branco
  },
  textArea: {
    height: 100,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    fontSize: 15,
  },
  botaoFinailizaAt: {
    backgroundColor: '#ca6500',
    padding: 20, // Ajustado o padding
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  botaoTextoFinailizaAt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18, // Ajustado o tamanho da fonte
    fontStyle: 'italic',
  },
  botãoVoltar: {
    backgroundColor: '#ca6500',
    padding: 20, // Ajustado o padding
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  txtBotãoVoltar: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18, // Ajustado o tamanho da fonte
    fontStyle: 'italic',
  },
});

//#endregion fim da estilização da tela de menu 

//#region inicio da estilização da tela de Tela inicial
export const stylesInicial = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#209A57",
  },

  header: {
    backgroundColor: '#209A57',
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    width: 80,
    height: 80,
    resizeMode: "cover",
  },

  titulo: {
    fontSize: 24,
    color: 'white',
    marginTop: 20,
    fontWeight: "bold",
  },

  botaoMenu: {
    alignItems:'center',
    justifyContent: "center",
    backgroundColor: '#2A784D',
    borderRadius: 8,
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  
  textBotaoMenu: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  botaoSair: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: '#2A784D',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  
  textBotaoSair: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
//#endregion

//#region inicio da estilização da tela de Tela de cancelamento
export const stylesCancelamento = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#209A57',
    padding: 20,
  },

  header: {
    flexDirection: 'column',
    alignItems: "center",
    height: 250,
    width: 'auto',
    padding: 50,
    marginVertical: 20
  },

  botaoSoliAt: {
    backgroundColor: '#ca6500',
    padding: 25,
    borderRadius: 52,
    alignSelf: 'center',
    marginTop: 80,
  },
  botaoTextoSoliAt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    fontStyle: 'italic',
  },
});
//#endregion

//#region styles tela de login
export const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#209A57", // Cor de fundo da tela de login
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: 300,
    backgroundColor: "white", // Cor do fundo do input
    borderRadius: 8, // Borda arredondada
  },
  button: {
    backgroundColor: "#2A784D",
    padding: 15,
    borderRadius: 8,
    width: 300,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  titulo: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
    fontWeight: "bold",
  },
});
//#endregion