import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize: 30,
    color: "#3A7F0D",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  lebelText: {
    paddingBottom: 10,
    color: "#0F8B32",
    fontWeight: "bold",
  },
  accountHave: {
    marginLeft: 50,
    paddingVertical: 30,
  },
  loginBtn: {
    width: "50%",
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#3A7F0D",
    marginLeft: "25%",
    color: "white",
  },
  horizontalSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  horizontalLine: { height: 1, width: "40%", backgroundColor: "black" },
  imageStyle: {
    width: 70,
    height: 70,
    alignSelf: "center",
  },
  TextInput: {
    width: "100%",
    height: 45,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#92CAA2",
    marginBottom: 10,
    padding: 10,
  },
  inputFieldBaseText: {
    alignSelf: "flex-end",
    color: "#3A7F0D",
    fontSize: 15,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    textAlign: "center",
  },
  otpBox: {
    width: 50,
    textAlign: "center",
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#92CAA2",
  },
  otpText: {
    fontWeight: "bold",
    color: "#3A7F0D",
    fontSize: 16,
  },
  iconstyle: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  otpBoxContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 40,
  },
  otpTimer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 40,
  },
  verificationText: {
    width: "80%",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    color: "#232323",
  },
  verifiedCard: {
    background: "#FFFFFF",
    borderRadius: 8,
  },
  search: {
    borderColor: "black",
    width: "100%",
    height: 45,
    borderRadius: 5,
    borderWidth: 2,

    marginBottom: 10,
    padding: 10,
  },
});