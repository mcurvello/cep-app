import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import api from "./src/services/api";

export default function App() {
  const [cep, setCep] = useState("");
  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 79003241"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#1d75cd" }]}>
          <Text style={styles.textBtn}>BUSCAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#cd3e1d" }]}>
          <Text style={styles.textBtn}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.result}>
        <Text style={styles.item}>CEP: 79000000</Text>
        <Text style={styles.item}>Logradouro: 79000000</Text>
        <Text style={styles.item}>Bairro: 79000000</Text>
        <Text style={styles.item}>Cidade: 79000000</Text>
        <Text style={styles.item}>Estado: 79000000</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  btn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#ff0000",
  },
  textBtn: {
    fontSize: 20,
    color: "#fff",
  },
  result: {
    marginTop: 230,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    fontSize: 22,
  },
});
