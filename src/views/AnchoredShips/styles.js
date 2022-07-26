import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  photoHomepage: {
    width: "100%",
    height: 59,
  },
  boxAnchoredShipsSvg: {
    height: "108%",
    width: "20%",
    flexDirection: "row",
  },
  AnchoredShipsSvg: {
    height: "50%",
    width: "50%",
    marginTop: 15,
  },
  boxText: {
    marginLeft: "23%",
    marginTop: "-9.5%",
    alignItems: "center",
  },
  text: {
    fontSize: 21,
    color: "#FFFFFF",
    marginLeft: "-45%",
    textShadowRadius: 15,
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: 1 },
  },
  mainOptions: {
    borderTopColor: "#04ADBF",
    borderTopWidth: 3,
    height: 70,
    backgroundColor: "#E2E2E2",
    flexDirection: "row",
    alignItems: "center",
  },
  boxMagnifierSvg: {
    height: "100%",
    width: "15%",
    flexDirection: "row",
    alignItems: "center",
  },
  magnifierSvg: {
    height: 30,
    width: 30,
  },
  input: {
    width: "80%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: "5%",
    paddingLeft: 10,
  },
  boxFilterSvg: {
    height: "100%",
    width: "10%",
    flexDirection: "row",
    alignItems: "center",
  },
  filterSvg: {
    height: 35,
    width: 35,
  },
  dropDown: {
    borderRadius: 10,
  },
  boxDrop: {
    width: "28%",
  },
  container: {
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  containerCardInfo: {
    backgroundColor: "#FFFFFF",
    height: 195,
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
  boxSvg: {
    backgroundColor: "#264775",
    height: "100%",
    width: "3%",
    borderTopLeftRadius: 10,
  },
  cardTextLocal: {
    height: 28,
    width: "40%",
    fontSize: 15,
    marginLeft: 12,
    marginTop: 10,
    color: "#264775",
    fontWeight: "bold",
  },
  cardTextName: {
    height: 28,
    width: "65%",
    fontSize: 20,
    marginLeft: 12,
    fontWeight: "bold",
    color: "#393939",
  },
  cardTextCargoType: {
    height: 28,
    width: "65%",
    fontSize: 15,
    marginLeft: 12,
    marginTop: 10,
    color: "#393939",
  },
  cardTextCargo: {
    width: "65%",
    flexDirection: "row",
    marginLeft: 45,
    justifyContent: "space-between",
  },
  cardTextCargoValue: {
    width: "65%",
    flexDirection: "row",
    marginLeft: 45,
    justifyContent: "space-between",
  },
  valueUnload: {
    marginRight: 20,
  },
  buttonDetails: {
    marginTop: 10,
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
export default style;
