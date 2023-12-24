import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { stylesLogin } from "../estilos/Styles";

export default function Login({ navigation }) {
  const [numeroCaixa, setNumeroCaixa] = useState("");
  const [operador, setOperador] = useState("");

  const handleLogin = () => {
    const numeroCaixaDigitado = numeroCaixa;
    const operadorDigitado = operador;

    navigation.navigate("Inicial", { numeroCaixa: numeroCaixaDigitado, operador: operadorDigitado });
    //navigation.navigate("Menu", { numeroCaixa: numeroCaixaDigitado, operador: operadorDigitado });
  };

  return (
    
      <View style={stylesLogin.container}>
        <Image source={require("../../../assets/logo.png")}/>

       
        <Text style={stylesLogin.titulo}>Tela de Login</Text>

        <TextInput
          style={stylesLogin.input}
          placeholder="Nome do Operador"
          onChangeText={(text) => setOperador(text)}
          value={operador}
        />

        <TextInput
          style={stylesLogin.input}
          placeholder="Número do Caixa"
          onChangeText={(text) => setNumeroCaixa(text)}
          value={numeroCaixa}
        />

        <TouchableOpacity style={stylesLogin.button} onPress={handleLogin}>
          <Text style={stylesLogin.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    
  );
}
