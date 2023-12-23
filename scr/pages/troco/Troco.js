import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Touchable, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import Menu from '../../pages/menu/Menu';

export default function Troco() {
  const [selectedValor, setSelectedValor] = useState(null);
  const [selectedTipo, setSelectedTipo] = useState(null);
  const [caixa, setCaixa] = useState("14");

  const placeholderValor = {
    label: "Selecione o Valor",
    value: null,
    color: "#9EA0A4",
  };
  const placeholderTipo = {
    label: "Selecione o tipo",
    value: null,
    color: "#9EA0A4",
  };

  const valor = [
    { label: "R$ 5 (2x 2 + 1)", value: "R$ 5 (2x 2 + 1)" },
    { label: "R$ 10 (2x 5)", value: "R$ 10 (2x 5)" },
    { label: "R$ 10 (5x 2)", value: "R$ 10 (5x 2)" },
    { label: "R$ 20 (2X 10)", value: "R$ 20 (2X 10)" },
    { label: "R$ 20 (1X R$10 + 2x R$5)", value: "R$ 20 (1X R$10 + 2x R$5)" },
    { label: "R$ 50 (2X R$20 + 1x R$10)", value: "R$ 50 (2X R$20 + 1x R$10)" },
    { label: "R$ 50 (1X R$20 + 3x R$10)", value: "R$ 50 (1X R$20 + 3x R$10)" },
    { label: "R$ 100 (2X R$50)", value: "R$ 100 (2X R$50)" },
    { label: "R$ 100 (1X R$50 2x 20 1x 10)", value: "R$ 100 (1X R$50 2x 20 1x 10)" },
    { label: "R$ 200 (1X R$100 2x 50)", value: "R$ 200 (1X R$100 2x 50)" },
    { label: "R$ 200 (1X R$100 2x 20 2x 5)", value: "R$ 200 (1X R$100 2x 20 2x 5)" },

  ];
  const tipo = [
    { label: "R$ 5", value: "R$ 5" },
    { label: "R$ 10", value: "R$ 10" },
    { label: "R$ 20", value: "R$ 20" },
    { label: "R$ 50", value: "R$ 50" },
    { label: "R$ 100", value: "R$ 100" },
    { label: "R$ 200", value: "R$ 200" },
  ];

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logoSub.png')} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Nº CAIXA:{caixa}</Text>
      </View>

      <RNPickerSelect
        placeholder={placeholderValor}
        items={valor}
        onValueChange={(value) => setSelectedValor(value)}
        value={selectedValor}
        style={styles.picker}
      />
      <RNPickerSelect
        placeholder={placeholderTipo}
        items={tipo}
        onValueChange={(value) => setSelectedTipo(value)}
        value={selectedTipo}
        style={styles.picker}
      />
      
      <TouchableOpacity style={styles.botaoSoliAt}>
        <Text style={styles.botaoCbTexto}>
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
  botaoCb: {
    flex: 0,
    fontSize: 30,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: '#2A784D',
    borderRadius: 50,
    width: 'auto',
  },
  botaoCbTexto: {
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
    marginTop: 110,
    paddingHorizontal: 5,
  },
  
  botaoSoliAt: {
    backgroundColor: '#ca6500',
    padding: 25,
    borderRadius: 50,
    alignSelf: 'center', // Alinha o botão à direita
    marginTop: 500,

  },
  botaoTextoSoliAt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    fontStyle: 'italic',
  },
});
