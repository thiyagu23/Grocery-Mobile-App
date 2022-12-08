import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
} from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function Table() {
  return (
    <View>
      <LinearGradient
        colors={["#F5F5F5", "#F5F5F5"]}
        style={{ height: "100%" }}>
        <DataTable style={styles.container}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>
              <Text style={styles.titleFont}>Items</Text>
            </DataTable.Title>

            <DataTable.Title>
              <Text style={styles.titleFont}>quantity</Text>
            </DataTable.Title>

            <DataTable.Title>
              <Text style={styles.titleFont}>Price</Text>
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
                      <Text style={styles.itemsFont}>{item.itemsNo}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell>
                      <Text style={styles.itemsFont}>{item.price}</Text>
                    </DataTable.Cell>
                  </View>
                </TouchableOpacity>
              )}
            />
          </DataTable.Row>
        </DataTable>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
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
    textAlign: "center",
    marginRight: 90,
  },

  tableHeader: {
    backgroundColor: "#3A7F0D",
    width: "93%",
    paddingLeft: 20,
    left: 15,
    color: "white",
    alignItems: "center",
    height: 70,
  },

  tableRow: {
    height: "100%",
    fontSize: 20,
    width: "100%",
  },

  tabelCell: {
    width: "100%",
    padding: 25,
    borderWidth: 0.5,
    flexDirection: "row",
    fontSize: 20,
  },
});

const myOrders = [
  {
    id: 1,

    name: "Apple",

    itemsNo: "3kg",

    price: "$50.00",
  },
  {
    id: 2,

    name: "Tomatoes",

    itemsNo: "2kg",

    price: "$55.00",
  },
  {
    id: 3,

    name: "Brinjal",

    itemsNo: "0.5kg",

    price: "$10.00",
  },
  {
    id: 4,

    name: "Pumpkin",

    itemsNo: "1kg",

    price: "$79.00",
  },
  {
    id: 5,

    name: "Spinach",

    itemsNo: "0.5kg",

    price: "$50.00",
  },
  {
    id: 6,

    name: "Beeroot",

    itemsNo: "1kg",

    price: "$60.00",
  },
  {
    id: 7,

    name: "Lady Finger",

    itemsNo: "1kg",

    price: "$20.00",
  },
  {
    id: 8,

    name: "Banana",

    itemsNo: "3kg",

    price: "$30.00",
  },
  {
    id: 9,

    name: "Califlower",

    itemsNo: "2kg",

    price: "$60.00",
  },
  {
    id: 10,

    name: "Orange",

    itemsNo: "1kg",

    price: "$90.00",
  },
];
