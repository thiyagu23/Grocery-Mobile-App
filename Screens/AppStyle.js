import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,

    paddingBottom: 30,
  },
  search: {
    height: 45,
    borderRadius: 5,
    borderWidth: 2,
    marginHorizontal: 25,
    marginVertical: 25,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    padding: 10,
  },
  topCard: {
    height: 100,

    height: 160,
    marginTop: -15,
    borderRadius: 10,
  },
  title: {
    padding: 20,
    width: 250,
    fontSize: 20,
    color: "#3A7F0D",
    fontWeight: "bold",
  },
  cardImg: {
    width: 100,
    height: 200,
    borderRadius: 10,
  },
  cardText: {
    color: "#232323",
    bottom: 20,

    fontWeight: "bold",
  },
  card: {
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-around",
    borderColor: "#838782",
    borderWidth: 1,
    width: 120,
    height: 150,
    borderRadius: 5,
    margin: 7,
  },
  middelCard: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
  },

  //Cart StyleSheet

  cartCard: {
    padding: 20,
    backgroundColor: "#F5F5F5",
    flexDirection: "column",
    justifyContent: "space-around",
    width: 380,
    height: 150,
    borderRadius: 10,
  },
  cartImg: {},

  cartText: {
    alignSelf: "flex-start",
    fontSize: 18,
    fontWeight: "bold",
    bottom: 140,
    left: 110,
  },

  billCard: {
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    lineHeight: 20,
  },

  cartName: {
    lineHeight: 45,
    fontSize: 18,
    fontWeight: "600",
    color: "#616360",
    left: 20,
  },
  cartPrice: {
    lineHeight: 40,
    fontSize: 17,
    fontWeight: "600",
  },

  itemCounter: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 130,
    left: 220,
    bottom: 120,
  },
  less: {
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
    width: 35,
    height: 35,
    borderRadius: 5,
    fontSize: 30,
    color: "#3A7F0D",
  },
  add: {
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
    width: 35,
    height: 35,
    borderRadius: 5,
    fontSize: 30,
    color: "#3A7F0D",
    backgroundColor: "#D6FFD2",
  },

  counter: { fontSize: 22, fontWeight: "bold" },
  remove: {
    alignItems: "center",

    backgroundColor: "#cdcfcd",
    borderRadius: 5,
    width: 110,
    height: 35,
    left: 230,
    bottom: 35,
  },
  ItemType: {
    fontSize: 15,
    fontWeight: "500",
    color: "#616360",
    alignItems: "flex-start",
    bottom: 100,
    left: 110,
  },

  itemPrice: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    bottom: 30,
    right: 25,
  },
});
