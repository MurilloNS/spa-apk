import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flatList: {
    marginBottom: "48%",
  },
  container: {
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  containerCardInfoOpened: {
    backgroundColor: "#FFFFFF",
    height: 260,
    width: "90%",
    borderRadius: 10,
    flexDirection: "row",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 4,
    marginTop: 10,
  },
  containerCardInfoClosed: {
    backgroundColor: "#FFFFFF",
    height: 200,
    width: "90%",
    borderRadius: 10,
    flexDirection: "row",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 4,
    marginTop: 10,
  },
  boxSvgConfirmed: {
    backgroundColor: "#32CD32",
    height: "100%",
    width: "3%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  boxSvgPending: {
    backgroundColor: "#FFD700",
    height: "100%",
    width: "3%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  boxSvgAnalysis: {
    backgroundColor: "#E6E6FA",
    height: "100%",
    width: "3%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardTextLocal: {
    height: 28,
    width: "50%",
    fontSize: 15,
    marginLeft: 12,
    marginTop: 10,
    color: "#264775",
    fontWeight: "bold",

  },
  cardTextManobra: {
    height: 28,
    width: "50%",
    fontSize: 12,
    marginLeft: 20,
    marginTop: 13,
    fontWeight: "bold",

  },
  cardTextName: {
    height: 28,
    width: "80%",
    fontSize: 20,
    marginLeft: 12,
    fontWeight: "bold",
    color: "#393939",
  },
  textsInfo: {
    flexDirection: "row"
  },
  cardTextCargoType: {
    height: 28,
    width: "80%",
    fontSize: 15,
    marginLeft: 12,
    marginTop: 5,
    color: "#393939",
    fontWeight: "bold",
  },
  cardTextCargo: {
    width: "65%",
    flexDirection: "row",
    marginLeft: 25,
    justifyContent: "space-between",
  },
  cardTextCargo2: {
    width: "65%",
    flexDirection: "row",
    marginLeft: 25,
    justifyContent: "space-between",
    marginTop: 5,
  },
  cardTextCargo3: {
    width: "65%",
    flexDirection: "row",
    marginLeft: 25,
    justifyContent: "space-between",
    marginTop: 5,
  },
  textDuvOpened: {
    marginRight: 45,
  },
  textDuvClosed: {
    marginRight: 45,
  },
  cardTextCargoValue: {
    width: "65%",
    flexDirection: "row",
    marginLeft: 25,
    justifyContent: "space-between",
  },
  firstValue: {
    width: 110,
    fontWeight: "bold",
    fontSize: 15,
  },
  cargaValue: {
    width: 250,
    fontWeight: "bold",
    fontSize: 15,
  },
  secondValue: {
    marginLeft: 49,
    fontWeight: "bold",
    fontSize: 15,
  },
  thirdValue: {
    width: 100,
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonDetails: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "12%",
    height: 27,
    width: "60%",
    backgroundColor: "#264775",
    borderRadius: 10,
  },
  textButton: {
    color: "#FFFFFF",
  },
});
export default styles;
