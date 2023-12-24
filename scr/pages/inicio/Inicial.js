import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, StatusBar, BackHandler } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Menu from "../menu/Menu";
import { stylesInicial } from "../estilos/Styles"

export default function Inicial({ navigation }) { // Passar navigation como prop
  const [caixa, setCaixa] = useState("14");
  const styles = stylesInicial;
  return (

    <View style={styles.container}>
      
      <Text style={stylesInicial.titulo}>
        Tela Inicial
      </Text>

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
            navigation.navigate("Menu");
          }}
          style={styles.botaoMenu}
        >
          <Text style={styles.textBotaoMenu}>MENU</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity
        onPress={() => {
          BackHandler.exitApp();
        }}
        style={styles.botaoSair}
      >
        <Text style={stylesInicial.textBotaoSair}>SAIR</Text>

      </TouchableOpacity>
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