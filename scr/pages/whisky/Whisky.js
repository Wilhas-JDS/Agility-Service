import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";


export default function Whisky() {
  const [selectedValor, setSelectedValor] = useState(null);
  const [selectedTipo, setSelectedTipo] = useState(null);

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
      <View style={styles.imageStyles}>
        <Image source={require('../../../assets/logoSub.png')} />
        <Text>
          Nº Caixa
        </Text>
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
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A784D',

  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },

  imageStyles: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  }
});
