import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
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
    width: "90%",
    right: 5,
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
    width: 200,
    height: 200,
    borderRadius: 50,
    bottom: 15,
    right: 10,
  },
  cardText: {
    color: "#232323",
    top: 15,
    fontWeight: "bold",
  },
  card: {
    padding: 5,
    flexDirection: "column",
    justifyContent: "space-around",
    borderColor: "#838782",
    width: 115,
    height: 130,

    margin: 8,
  },
  middelCard: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  homePrice: {
    borderRadius: 50,
    backgroundColor: "#3A7F0D",
    width: 25,
    height: 25,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
    left: 90,
    bottom: 10,
    fontSize: 12,
  },

  //Cart StyleSheet

  cartCard: {
    padding: 20,
    backgroundColor: "#F5F5F5",
    flexDirection: "column",
    justifyContent: "space-around",
    width: 390,
    height: 150,
    borderRadius: 10,
  },

  cartText: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    bottom: 140,
    left: 110,
    fontSize: 18,
  },

  billCard: {
    width: 330,
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
    left: 20,
  },

  itemCounter: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 130,
    left: 230,
    bottom: 110,
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
    left: 240,
    bottom: 35,
  },
  ItemType: {
    fontSize: 15,
    fontWeight: "500",
    color: "#616360",
    alignItems: "flex-start",
    bottom: 100,
    left: 120,
  },

  itemPrice: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    bottom: 30,
    right: 20,
  },
  rating: {
    flexDirection: "row",
    borderColor: "#B8BBC6",
    borderWidth: 0.5,
    fontSize: 15,
    borderRadius: 20,
    width: 65,
    fontWeight: "bold",
    bottom: 100,
    left: 130,
    padding: 5,
    paddingLeft: 10,
  },
  rightRating: {
    color: "#FA662E",
    bottom: 92,
    left: 210,
    fontSize: 16,
    fontWeight: "500",
  },
  discount: {
    backgroundColor: "#FA662E",
    left: 10,
    width: 70,
    height: 30,
    bottom: 30,
    color: "#FFFFFF",
    fontSize: 12,
    paddingTop: 8,
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 5,
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  ProfileLogo: {
    height: 40,
  },
  ProfileName: {
    alignContent: "flex-start",
    fontSize: 18,
    fontWeight: "600",
  },
  ProfileArrow: {},
  logoutBtn: {
    width: "50%",
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#3A7F0D",
    margin: "25%",
  },
});
