import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, StatusBar, BackHandler } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Menu from "../menu/Menu";
import {stylesInicial} from "../estilos/Styles"

export default function Inicial({ navigation }) { // Passar navigation como prop
  const [caixa, setCaixa] = useState("14");
  const styles  = stylesInicial;
  return (

    <View style={styles.container}>
      <StatusBar
        backgroundColor='#000000' // Cor de fundo da barra de status
        barStyle="default" // Define a cor do texto da barra de status
      />
      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} />
        <Text style={{ fontSize: 30, fontWeight: 'bold' }} >Nº CAIXA:{caixa}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Menu"); // Corrigir nome da tela
          }}
          style={styles.botao}
        >
          <Text style={styles.botao}>MENU</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            BackHandler.exitApp();
          }}
          style={styles.botao}
        >

          <Text style={styles.botao}>SAIR</Text>
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