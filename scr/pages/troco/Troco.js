import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import database from '@react-native-firebase/database';

export default function Troco() {
  const [selectedValor, setSelectedValor] = useState(null);
  const [selectedTipo, setSelectedTipo] = useState(null);
  const [caixa, setCaixa] = useState("14");
  const navigation = useNavigation();

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

  const saveDataToFirebase = () => {
    if (selectedValor && selectedTipo) {
      const ref = database().ref(`caixas/${caixa}`);

      ref.set({
        selectedValor,
        selectedTipo,
        timestamp: database.ServerValue.TIMESTAMP
      }).then(() => {
        console.log('Dados salvos com sucesso no Firebase!');
      }).catch((error) => {
        console.error('Erro ao salvar dados no Firebase:', error);
      });
    } else {
      console.warn('Selecione um valor e um tipo antes de salvar.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='#000000'
        barStyle="default"
      />
      <View style={styles.header}>
        <Image source={require('../../../assets/logoSub.png')} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nº CAIXA: {caixa}</Text>
      </View>

      <RNPickerSelect
        placeholder={placeholderValor}
        items={valor}
        onValueChange={(value) => setSelectedValor(value)}
        value={selectedValor}
        style={pickerSelectStyles}
      />
      <RNPickerSelect
        placeholder={placeholderTipo}
        items={tipo}
        onValueChange={(value) => setSelectedTipo(value)}
        value={selectedTipo}
        style={pickerSelectStyles}
      />

      <TouchableOpacity
        onPress={saveDataToFirebase}
        style={styles.botaoSoliAt}
      >
        <Text style={styles.botaoCbTexto}>
          Solicitar Atendimento
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Menu");
        }}
        style={styles.botaoVoltar}
      >
        <Text style={styles.textoBotaoVoltar}>Voltar</Text>
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
  header: {
    flexDirection: 'column',
    alignItems: "center",
    height: 250,
    width: 'auto',
    padding: 20,
  },
  botaoSoliAt: {
    backgroundColor: '#ca6500',
    padding: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  botaoCbTexto: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botaoVoltar: {
    backgroundColor: '#ca6500',
    padding: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  textoBotaoVoltar: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    fontStyle: 'italic',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    marginBottom: 20,
  },
  inputAndroid: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    marginBottom: 20,
  },
});
