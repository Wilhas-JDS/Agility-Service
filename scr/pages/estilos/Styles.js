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
  },
  botao: {
    flex: 0,
    fontSize: 30,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: '#2A784D',
    borderRadius: 50,
    width: 'auto',
  },
  botaoTexto: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  header: {
    flexDirection: 'column',
    alignItems: "center",
    height: 250,
    width: 'auto',
    padding: 50,

  },
  picker: {
    fontSize: 20,
    height: 50,
    backgroundColor: '#2A784D',
    marginBottom: 150,
    marginTop: 60,
    paddingHorizontal: 5,
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
    padding: 25,
    borderRadius: 5,
    alignSelf: 'center', 
    marginTop: 0,

  },
  botaoTextoFinailizaAt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    fontStyle: 'italic',
  },
  botãoVoltar:{
    backgroundColor: '#ca6500',
    padding: 25,
    borderRadius: 5,
    alignSelf: 'center', 
    marginTop: 0,

  },
  txtBotãoVoltar: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    fontStyle: 'italic',
  },
});

//#endregion fim da estilização da tela de menu 

export const stylesInicial = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#209A57",
  },

  header: {
    backgroundColor: '#209A57',
    alignItems: "center",
    justifyContent: "space-between",
    padding: 50,
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: "center",
  },

  titulo: {
    fontSize: 24,
    color: '#00a854',
    marginTop: 10,
  },

  botao: {
    fontSize: 22,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 37,
    backgroundColor: '#2A784D',
    borderRadius: 100,

  },
});

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