import React from "react";
import 'react-native-gesture-handler';
import { Text, TouchableOpacity, View, StyleSheet, Image, StatusBar } from "react-native";

import Menu from "../menu/Menu";

export default function Inicial({ navigation }) { // Passar navigation como prop

  return (

    <View style={styles.container}>
      <StatusBar
        backgroundColor="#209A57" // Cor de fundo da barra de status
        barStyle="light-content" // Define a cor do texto da barra de status
      />
      <View style={styles.header}>
        <Image source={require('../../../assets/logoTelaInicial.png')} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Menu"); // Corrigir nome da tela
          }}
          style={styles.botao}
        >
          <Text style={styles.botao}>CHAMAR FISCAL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator>
        <Stack.Screen name="Ap" component={Ap} />
        <Stack.Screen name="Menu" component={Menu} />
      </StackNavigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
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