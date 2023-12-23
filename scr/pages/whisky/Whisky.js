import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Touchable, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import Menu from '../../pages/menu/Menu';

export default function Troco() {
  const [selectedMarca, setSelectedMarca] = useState(null);
  const [selectedTipo, setSelectedTipo] = useState(null);
  const [selectedQtd, setSelectedQtd] = useState(null);
  const [caixa, setCaixa] = useState("14");

  const placeholderMarca = {
    label: "Selecione a marca desejada",
    value: null,
    color: "#9EA0A4",
  };

  const placeholderQtd = {
    label: "Selecione a quantidade",
    value: null,
    color: "#9EA0A4",
  };


  const marca = [
    { label: "Lucky Strike", value: "Lucky Strike" },
    { label: "Marlboro", value: "Marlboro" },
    { label: "Dunhill", value: "Dunhill" },
    { label: "Camel", value: "Camel" },
    { label: "Parliament", value: "Parliament" },

  ];

  const qtd = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },


  ];



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} />
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Nº CAIXA:{caixa}</Text>
      </View>
      <View>
        <RNPickerSelect
          placeholder={placeholderMarca}
          items={marca}
          onValueChange={(value) => setSelectedMarca(value)}
          value={selectedMarca}
          style={{
            inputAndroid: {
              fontSize: 30,
              backgroundColor: '#008040',
              marginBottom: 1,
              marginTop: 200,
              paddingHorizontal: 5,
              color: '#000000',
              borderRadius: 50,
            },
          }}
        />

        <RNPickerSelect
          placeholder={placeholderQtd}
          items={qtd}
          onValueChange={(value) => setSelectedQtd(value)}
          value={selectedQtd}
          style={{
            inputAndroid: {
              fontSize: 30,
              backgroundColor: '#008040',
              marginBottom: 1,
              marginTop: 20,
              paddingHorizontal: 5,
              color: '#000000',
              borderRadius: 50,
            },
          }}
        />
      </View>
      <TouchableOpacity style={styles.botaoSoliAt}>
        <Text style={styles.botaoTextoSoliAt}>
          Solicitar Atendimento
        </Text>
      </TouchableOpacity>
    </View>
  );
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

  header: {
    flexDirection: 'column',
    alignItems: "center",
    height: 250,
    width: 'auto',
    padding: 50,

  },

  botaoSoliAt: {
    backgroundColor: '#ca6500',
    padding: 25,
    borderRadius: 50,
    alignSelf: 'center', // Alinha o botão à direita
    marginTop: 300,

  },
  botaoTextoSoliAt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    fontStyle: 'italic',
  },

});
