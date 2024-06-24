import Dropdown from "@/components/Dropdown";
import RoundBtn from "@/components/RoundBtn";
import Colors from "@/constants/Colors";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Page = () => {
  const balance = 1420;

  const onAddMoney = () => {};

  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance}</Text>

          <Text style={styles.currency}>€</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundBtn text="Add money" icon="add" onPress={onAddMoney} />
        <RoundBtn text="Exchange" icon="refresh" />
        <RoundBtn text="Details" icon="list" />
        <Dropdown />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 10,
  },
  balance: {
    fontSize: 50,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 20,
    fontWeight: "500",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});

export default Page;
