// Sty.js
import { StyleSheet } from "react-native";

const stylesMenu = StyleSheet.create({
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
    backgroundColor: '#fff',
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
    alignSelf: 'center', // Alinha o botão à direita
    marginTop: 0,

  },
  botaoTextoFinailizaAt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    fontStyle: 'italic',
  },
  
});
export default stylesMenu;