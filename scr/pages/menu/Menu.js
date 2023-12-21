import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image, TextInput, StatusBar } 
from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState("troco");
  const [observacao, setObservacao] = useState("");
  const [caixa, setCaixa] = useState("14");

  const App = () => {
    const [mensagem, setMensagem] = useState("");
    const navigation = useNavigation();

    return (
      <ScrollView style={styles.container}>
        <StatusBar
          backgroundColor="#209A57" // Cor de fundo da barra de status
          barStyle="light-content" // Define a cor do texto da barra de status
        />
        <View style={styles.header}>
          <Image source={require('../../../assets/logoSub.png')} />
          <Text style={styles.texto}>Nº CAIXA:</Text>
          <Text style={styles.texto}>{caixa}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Troco");
          }}
          style={styles.botao}
        >
          <Text style={styles.botaoTexto}>Solicitar troco</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cigarro");
          }}
          style={styles.botao}
        >
          <Text style={styles.botaoTexto}>Solicitar cigarro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Whisky");
          }}
          style={styles.botao}
        >
          <Text style={styles.botaoTexto}>Solicitar whisky</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Pausa");
          }}
          style={styles.botao}
        >
          <Text style={styles.botaoTexto}>Solicitar pausa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PreçoErrado");
          }}
          style={styles.botao}
        >
          <Text style={styles.botaoTexto}>Preço errado</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("OutrosAssuntos");
          }}
          style={styles.botao}
        >
          <Text style={styles.botaoTexto}>Outros assuntos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cancelamento");
          }}
          style={styles.botao}
        >
          <Text style={styles.botaoTexto}>Cancelamento</Text>
        </TouchableOpacity>
        {/* Utilizando @react-native-picker/picker */}
        <Picker
          selectedValue={selectedItem}
          onValueChange={(itemValue) => setSelectedItem(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Jessica" value="Jessica" />
          <Picker.Item label="wilhas" value="wilhas" />
          <Picker.Item label="Rodrigo" value="Rodrigo" />
        </Picker>
        {/* Adicionando a área de texto (TextInput) */}
        <TextInput
          style={styles.textArea}
          placeholder="Observações"
          multiline={true}
          numberOfLines={4}
          value={observacao}
          onChangeText={(text) => setObservacao(text)}
        />
      </ScrollView>
    );
  };

  return <App />;
}

const styles = StyleSheet.create({
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
    color: '#fff',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  picker: {
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    fontSize: 15,
  },
});