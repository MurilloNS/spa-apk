import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  StatusBar
} from "react-native";

import styles from "./styles";

import RopeSvg from "../../../img/icons/Rope.svg";
import MagnifierSvg from "../../../img/icons/Magnifier.svg";
import ListBerthed from "../../components/ListBerthed";
import axios from "axios";

const api = axios.create({
  baseURL: "https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=atracados",
});

export default function BerthedShips() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Todos", value: "Todos" },
    { label: "Tipo de Carga", value: "Tipo de Carga" },
    { label: "Local do Navio", value: "Local do Navio" },
  ]);
  const [originalData, setOriginalData] = useState([]);
  const [ListBerthedShips, setListBerthedShips] = useState([]);

  useEffect(() => {
    api.get(axios.baseURL)
      
      .then((response) => {
        for (let i = 0; i < Object.keys(response.data).length; i++) {
          response.data[i].descarga = response.data[i].descarga.toString();
      }
        setOriginalData(response.data);
        setListBerthedShips(response.data);
      })
      .catch((err) => {
        console.error("ops! Ocorreu um erro" + err.response.data);
      });
  }, []);

  function search(s) {
    let arr = JSON.parse(JSON.stringify(originalData));
    setListBerthedShips(arr.filter((d) => d.nomenavio.includes(s) || d.descricao_local.includes(s) || d.descarga.includes(s)));
  }

  return (
    <View style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,}}>
      <ImageBackground
        style={styles.photoHomepage}
        source={require("../../../img/PhotoHomepage.jpg")}
      >
        <View style={styles.boxRopeSvg}>
          <RopeSvg style={styles.ropeSvg} />
        </View>
        <View style={styles.boxText}>
          <Text style={styles.text}>Navios Atracados</Text>
        </View>
      </ImageBackground>
      <View style={styles.mainOptions}>
        <View style={styles.boxMagnifierSvg}>
          <MagnifierSvg style={styles.magnifierSvg} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          onChangeText={(s) => search(s)}
          autoCapitalize="characters"
        />
      </View>
      <ListBerthed list={ListBerthedShips} />
    </View>
  );
}
