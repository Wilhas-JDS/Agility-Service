import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState("troco");
  const [caixa] = useState("14");

  const App = () => {
    const navigation = useNavigation();

    return (
      <ScrollView style={styles.container}>
        <StatusBar
          backgroundColor="#209A57"
          barStyle="dark-content"
        />
        <View style={styles.header}>
          <Image source={require('../../../assets/logoSub.png')} />
          <Text >Nº CAIXA:{caixa}</Text>
        </View>

        <Picker
          selectedValue={selectedItem}
          onValueChange={(itemValue) => setSelectedItem(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Jessica" value="Jessica" />
          <Picker.Item label="Wilhas" value="Wilhas" />
          <Picker.Item label="Rodrigo" value="Rodrigo" />
        </Picker>
        <Picker
          selectedValue={selectedItem}
          onValueChange={(itemValue) => setSelectedItem(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Jessica" value="Jessica" />
          <Picker.Item label="Wilhas" value="Wilhas" />
          <Picker.Item label="Rodrigo" value="Rodrigo" />
        </Picker>
        <TouchableOpacity style={styles.botaoSolicitarlizaAt}>
          <Text style={styles.botaoTextoSolicitarlizaAt}>Solicitar Atendimento</Text>
        </TouchableOpacity>
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
  header: {
    flexDirection: 'column',
    alignItems: "center",
    height: 250,
    width: 'auto',
    padding: 50,
  },
  picker: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 150,
    marginTop: 60,
    paddingHorizontal: 5,
  },
  botaoSolicitarlizaAt: {
    backgroundColor: '#ca6500',
    padding: 25,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 0,
  },
  botaoTextoSolicitarlizaAt: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
    fontStyle: 'italic',
  },
});
