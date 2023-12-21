// Sty.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#209A57",
  },

  header: {
    backgroundColor: "#2A784D",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  titulo: {
    fontSize: 24,
    color: "#fff",
    marginTop: 10,
  },

  botao: {
    fontSize: 22,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#2A784D",
    borderRadius: 5,
  },
});

export default styles;
