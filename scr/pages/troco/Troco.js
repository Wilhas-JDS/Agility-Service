import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";


export default function Troco() {
  const [selectedItem, setSelectedItem] = useState(null);

  const placeholder = {
    label: "Selecione uma opção...",
    value: null,
    color: "#9EA0A4",
  };

  const data = [
    { label: "Opção 1", value: "option1" },
    { label: "Opção 2", value: "option2" },
    { label: "Opção 3", value: "option3" },
  ];

  return (
    
    <View style={styles.container}>
      <View style={styles.imageStyles}>
      <Image  source={require('../../../assets/logoSub.png')}/>
      <Text>
        Nº Caixa
      </Text>
      </View>
      
      <RNPickerSelect
        placeholder={placeholder}
        items={data}
        onValueChange={(value) => setSelectedItem(value)}
        value={selectedItem}
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

  imageStyles:{
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  }
});
