import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image, TextInput, StatusBar }
  from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import stylesMenu from "../estilos/Styles";

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState("troco");
  const [observacao, setObservacao] = useState("");
  const [caixa, setCaixa] = useState("14");

  const App = () => {
    const [mensagem, setMensagem] = useState("");
    const navigation = useNavigation();

    //estilos do arquivo Styles
    
    return (
      <ScrollView style={stylesMenu.container}>
        <StatusBar
          backgroundColor='#000000' // Cor de fundo da barra de status
          barStyle="default" // Define a cor do texto da barra de status
        />
        <View style={stylesMenu.header}>
          <Image source={require('../../../assets/logoSub.png')} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Nº CAIXA:{caixa}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Troco");
          }}
          style={stylesMenu.botao }
        >
          <Text style={stylesMenu.botaoTexto}>Solicitar troco</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cigarro");
          }}
          style={stylesMenu.botao}
        >
          <Text style={stylesMenu.botaoTexto}>Solicitar cigarro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Whisky");
          }}
          style={stylesMenu.botao}
        >
          <Text style={stylesMenu.botaoTexto}>Solicitar whisky</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Pausa");
          }}
          style={stylesMenu.botao}
        >
          <Text style={stylesMenu.botaoTexto}>Solicitar pausa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PreçoErrado");
          }}
          style={stylesMenu.botao}
        >
          <Text style={stylesMenu.botaoTexto}>Preço errado</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("OutrosAssuntos");
          }}
          style={stylesMenu.botao}
        >
          <Text style={stylesMenu.botaoTexto}>Outros assuntos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cancelamentos");
          }}
          style={stylesMenu.botao}
        >
          <Text style={stylesMenu.botaoTexto}>Cancelamento</Text>
        </TouchableOpacity>

        {/* Utilizando @react-native-picker/picker */}
        <Picker
          selectedValue={selectedItem}
          onValueChange={(itemValue) => setSelectedItem(itemValue)}
          es={stylesMenu.picker}
        >
          <Picker.Item label="Jessica" value="Jessica" />
          <Picker.Item label="wilhas" value="wilhas" />
          <Picker.Item label="Rodrigo" value="Rodrigo" />
        </Picker>
        <TouchableOpacity style={stylesMenu.botaoFinailizaAt}>
          <Text style={stylesMenu.botaoTextoFinailizaAt}>Finalizar Atendimento</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Inicial");
          }}
          style={stylesMenu.botao}
          position="absolute"
          left="0"
          top="-100"
        >
          <Text >Voltar</Text>
        </TouchableOpacity>
        {/* Adicionando a área de texto (TextInput) */}

      </ScrollView>
    );

  };

  return <App />;

}
