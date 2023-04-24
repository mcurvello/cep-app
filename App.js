import React, { useRef, useState } from "react";
import {
  Keyboard,
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
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);

  async function buscar() {
    if (cep == "") {
      alert("Digite um CEP válido");
      setCep("");
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      Keyboard.dismiss();
    } catch (error) {
      console.log("ERROR: " + error);
    }
  }

  function limpar() {
    setCep("");
    inputRef.current.focus();
    setCepUser(null);
  }

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
          ref={inputRef}
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#1d75cd" }]}
          onPress={buscar}
        >
          <Text style={styles.textBtn}>BUSCAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#cd3e1d" }]}
          onPress={limpar}
        >
          <Text style={styles.textBtn}>LIMPAR</Text>
        </TouchableOpacity>
      </View>

      {cepUser && (
        <View style={styles.result}>
          <Text style={styles.item}>CEP: {cepUser.cep}</Text>
          <Text style={styles.item}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.item}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.item}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.item}>Estado: {cepUser.uf}</Text>
        </View>
      )}
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
