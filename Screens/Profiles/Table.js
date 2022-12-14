import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

export default function Table({ navigation }) {
  return (
    <LinearGradient colors={["#F5F5F5", "#F5F5F5"]} style={{ height: "100%" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateItems")}
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}>
        <Icon
          style={styles.createIcon}
          name="create-outline"
          size={30}
          color="#3A7F0D"
        />

        <Text style={styles.createTxt}>Create</Text>
      </TouchableOpacity>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>
            <Text style={styles.titleFont}>Items</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={styles.titleFont}>Type</Text>
          </DataTable.Title>

          <DataTable.Title>
            <Text style={[styles.titleFont, { left: 10 }]}>Price</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={[styles.titleFont, { margin: 80 }]}>Edit</Text>
          </DataTable.Title>
        </DataTable.Header>

        <DataTable.Row style={styles.tableRow}>
          <FlatList
            data={myOrders}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.tabelCell}>
                  <DataTable.Cell>
                    <Text style={styles.itemsFont}>{item.name}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={styles.itemsFont}>{item.type}</Text>
                  </DataTable.Cell>

                  <DataTable.Cell>
                    <Text style={styles.itemsFont}>{item.price}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Icon name="pencil" size={23} />
                  </DataTable.Cell>
                </View>
              </TouchableOpacity>
            )}
          />
        </DataTable.Row>
        <DataTable.Pagination
          style={styles.tableFooter}
          numberOfPages={3}
          label="1-2 of 6"
          showFastPagination
          optionsLabel={"Rows per page"}
        />
      </DataTable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleFont: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingRight: 50,
  },
  itemsFont: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
    left: 50,
    textAlign: "center",
  },

  tableHeader: {
    top: 2,
    backgroundColor: "#3A7F0D",
    width: "100%",
    paddingLeft: 40,

    color: "white",
    alignItems: "center",
    justifyContent: "space-around",
    height: 70,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  tableFooter: {
    backgroundColor: "#3A7F0D",
    width: "100%",
    paddingLeft: 20,
    color: "white",
    alignItems: "center",
    justifyContent: "space-around",
    height: 70,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    bottom: 60,
  },

  tableRow: {
    flex: 1,
    // top: 59,
    height: "100%",
    fontSize: 20,
    width: "100%",
    marginBottom: 60,
  },

  tabelCell: {
    width: 450,
    padding: 25,
    right: 10,
    paddingLeft: 30,
    borderWidth: 0.5,
    flexDirection: "row",
  },
  createIcon: {
    paddingVertical: 20,
  },
  createTxt: {
    paddingHorizontal: 5,
    paddingRight: 10,
    paddingVertical: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "#3A7F0D",
  },
});
// <DataTable.Cell>
// <Text style={styles.itemsFont}>{item.itemsNo}</Text>
// </DataTable.Cell>
// <DataTable.Title>
//               <Text style={styles.titleFont}>quantity</Text>
//             </DataTable.Title>
const myOrders = [
  {
    id: 1,

    name: "Apple",
    type: "Fruit",
    itemsNo: "3kg",

    price: "$50.00",
  },
  {
    id: 2,

    name: "Tomatoes",
    type: "Vegetable",
    itemsNo: "2kg",

    price: "$55.00",
  },
  {
    id: 3,

    name: "Brinjal",
    type: "Vegetable",
    itemsNo: "0.5kg",

    price: "$10.00",
  },
  {
    id: 4,

    name: "Pumpkin",
    type: "Vegetable",
    itemsNo: "1kg",

    price: "$79.00",
  },
  {
    id: 5,

    name: "Spinach",
    type: "Vegetable",
    itemsNo: "0.5kg",

    price: "$50.00",
  },
  {
    id: 6,

    name: "Beeroot",
    type: "Vegetable",
    itemsNo: "1kg",

    price: "$60.00",
  },
  {
    id: 7,

    name: "Lady Finger",
    type: "Vegetable",
    itemsNo: "1kg",

    price: "$20.00",
  },
  {
    id: 8,

    name: "Banana",
    type: "Fruit",
    itemsNo: "3kg",

    price: "$30.00",
  },
  {
    id: 9,

    name: "Califlower",
    type: "Vegetable",
    itemsNo: "2kg",

    price: "$60.00",
  },
  {
    id: 10,

    name: "Orange",
    type: "Fruit",
    itemsNo: "1kg",

    price: "$90.00",
  },
  {
    id: 11,

    name: "Guava",
    type: "Fruit",
    itemsNo: "1kg",

    price: "$90.00",
  },
  {
    id: 12,

    name: "Grapes",
    type: "Fruit",
    itemsNo: "1kg",

    price: "$90.00",
  },
];
