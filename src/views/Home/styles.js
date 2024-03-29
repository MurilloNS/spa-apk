import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  photoHomepage: {
    height: 149,
    width: 411,
    flexDirection: "row",
  },
  logoMain: {
    marginLeft: 10,
    marginTop: -30,
  },
  logoSvg: {
    marginLeft: -75,
    marginTop: 70,
  },
  mainOptions: {
    borderTopColor: "#04ADBF",
    borderTopWidth: 3,
    marginBottom: 15,
  },
  container: {
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  firstContainerListOption: {
    backgroundColor: "#FFFFFF",
    height: 75,
    width: "90%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: "row",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 4,
    marginTop: 10,
  },
  containerListOptions: {
    backgroundColor: "#FFFFFF",
    height: 75,
    width: "90%",
    flexDirection: "row",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 4,
    marginTop: 10,
  },
  lastContainerListOptions: {
    backgroundColor: "#FFFFFF",
    height: 75,
    width: "90%",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: "row",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 4,
    marginTop: 10,
  },
  firstBoxSvg: {
    backgroundColor: "#264775",
    height: "100%",
    width: "22%",
    justifyContent: "center",
    borderTopLeftRadius: 10,
  },
  boxSvg: {
    backgroundColor: "#264775",
    height: "100%",
    width: "22%",
    justifyContent: "center",
  },
  lastBoxSvg: {
    backgroundColor: "#264775",
    height: "100%",
    width: "22%",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
  },
  iconSvg: {
    height: 50,
    width: 50,
  },
  iconCabecaSvg: {
    height: "100%",
    width: "100%",
    marginLeft: "10%",
  },
  boxText: {
    marginTop: "2%",
    marginLeft: 5,
  },
  textListOptions: {
    fontSize: 19,
    fontWeight: "bold",
  },
  text: {
    fontSize: 13,
    marginLeft: 1,
    width: 250,
  },
  viewLogos: {
    backgroundColor: "#f1f1f1",
    height: "35%",
    width: "60%",
    marginLeft: -25,
    marginTop: 100,
    justifyContent: "center",
  },
  logoSpa: {
    height: 40,
    width: 90,
    marginLeft: 5,
  },
  logoBrasil: {
    height: 40,
    width: 220,
    marginTop: -40,
    marginLeft: 20,
  },
  teste: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 5,
    borderRightWidth: 7,
    borderTopWidth: 50,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#2f4f68",
    marginLeft: "-12.4%",
    marginTop: 100,
    zIndex: 1,
    marginRight: 18,
  },
  termoPrivate: {
    fontSize: 12,
    color: "#000",
    marginLeft: 5,
  },
  boxTermo: {
    height: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default styles;
